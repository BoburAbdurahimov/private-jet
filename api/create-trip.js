// JetLuxe Affiliate API Proxy
// This serverless function acts as a proxy to avoid CORS issues

const API_BASE_URL = "https://jetluxe.jetlink.app";
// API Token - format according to docs: "Bearer {user_id}|{token}"
// The example shows "Bearer 12|your_token_here"
// If your token already includes the user ID, use it as-is
// If not, you may need to add the user ID prefix
const API_TOKEN = "223oLxcHMcaQ8TVatNAsLRJ2acpLQkqtXBbQY9yqg010dc8e8f";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log incoming request for debugging
    console.log('Received request:', {
      method: req.method,
      hasBody: !!req.body,
      bodyKeys: req.body ? Object.keys(req.body) : [],
      bodyPreview: req.body ? JSON.stringify(req.body).substring(0, 200) : 'No body'
    });

    const tripData = req.body;

    // Validate required fields
    if (!tripData.idempotency_key || !tripData.legs || !tripData.customer) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['idempotency_key', 'legs', 'customer']
      });
    }

    // Validate legs
    if (!Array.isArray(tripData.legs) || tripData.legs.length === 0) {
      return res.status(400).json({ error: 'At least one leg is required' });
    }

    // Validate customer
    if (!tripData.customer.full_name || !tripData.customer.email || !tripData.customer.contact) {
      return res.status(400).json({ 
        error: 'Customer information incomplete',
        required: ['full_name', 'email', 'contact']
      });
    }

    console.log('Creating trip via JetLuxe API:', {
      idempotency_key: tripData.idempotency_key,
      legs_count: tripData.legs.length,
      customer_email: tripData.customer.email
    });

    // Log the request being sent (without sensitive data)
    console.log('Sending request to JetLuxe API:', {
      url: `${API_BASE_URL}/api/affiliate/valens/v1/trip/new`,
      legs: tripData.legs.map(leg => ({
        date: leg.date,
        passengers: leg.passengers,
        departure: leg.departure_icao,
        arrival: leg.arrival_icao,
        time: leg.time
      })),
      customer: {
        name: tripData.customer.full_name,
        email: tripData.customer.email
      }
    });

    // Make request to JetLuxe API
    let response;
    let responseData;
    
    try {
      // Format Authorization header according to API docs: "Bearer 12|your_token_here"
      // The example shows "12|" as a user ID prefix
      // Try the token as-is first (standard Bearer format)
      const authHeader = `Bearer ${API_TOKEN}`;
      
      console.log('Making API request to JetLuxe:', {
        url: `${API_BASE_URL}/api/affiliate/valens/v1/trip/new`,
        method: 'POST',
        authHeaderFormat: authHeader.substring(0, 20) + '...',
        tokenLength: API_TOKEN.length,
        tokenStartsWith: API_TOKEN.substring(0, 10)
      });

      response = await fetch(`${API_BASE_URL}/api/affiliate/valens/v1/trip/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify(tripData),
      });

      // Get response as text first to handle both JSON and non-JSON responses
      const responseText = await response.text();
      console.log('API Response status:', response.status);
      console.log('API Response headers:', Object.fromEntries(response.headers.entries()));
      console.log('API Response text (first 500 chars):', responseText.substring(0, 500));
      console.log('API Response text length:', responseText.length);
      
      // Check if response is empty
      if (!responseText || responseText.trim().length === 0) {
        console.error('Empty response from API');
        return res.status(500).json({
          error: 'Empty response from API',
          message: 'The API returned an empty response',
          status: response.status,
          statusText: response.statusText
        });
      }
      
      // Try to parse JSON response
      try {
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', {
          error: parseError.message,
          responseType: response.headers.get('content-type'),
          responsePreview: responseText.substring(0, 500),
          status: response.status
        });
        
        // Handle 403/401 errors that return non-JSON (like HTML error pages)
        if (response.status === 403 || response.status === 401) {
          return res.status(response.status).json({
            error: 'Authentication failed',
            message: response.status === 403 
              ? 'The API token is invalid, expired, or you do not have permission to access this resource.'
              : 'Invalid or missing authentication token.',
            status: response.status,
            statusText: response.statusText,
            contentType: response.headers.get('content-type'),
            responsePreview: responseText.substring(0, 500),
            suggestion: 'Please verify your API token is correct and has the format: Bearer {user_id}|{token}'
          });
        }
        
        // Return more detailed error information for other errors
        return res.status(response.ok ? 500 : response.status).json({
          error: 'Invalid response from API',
          message: 'The server returned a response that could not be parsed as JSON',
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get('content-type'),
          responsePreview: responseText.substring(0, 1000), // First 1000 chars for debugging
          isHTML: responseText.trim().startsWith('<!'),
          isText: !responseText.trim().startsWith('{') && !responseText.trim().startsWith('[')
        });
      }
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      return res.status(500).json({
        error: 'Network error',
        message: fetchError.message || 'Failed to connect to JetLuxe API',
        details: process.env.NODE_ENV === 'development' ? fetchError.stack : undefined
      });
    }

    if (!response.ok) {
      console.error('JetLuxe API error:', {
        status: response.status,
        statusText: response.statusText,
        data: responseData,
        contentType: response.headers.get('content-type')
      });
      
      // Handle 403 Forbidden specifically (authentication/authorization issue)
      if (response.status === 403) {
        return res.status(403).json({
          error: 'Authentication failed',
          message: 'The API token is invalid or expired. Please check your API credentials.',
          details: responseData,
          status: 403,
          suggestion: 'Verify that the API token is correct and has the proper format (Bearer {user_id}|{token})'
        });
      }
      
      // Handle 401 Unauthorized
      if (response.status === 401) {
        return res.status(401).json({
          error: 'Unauthorized',
          message: 'Invalid or missing authentication token.',
          details: responseData,
          status: 401
        });
      }
      
      return res.status(response.status).json({
        error: responseData.message || responseData.error || `API request failed with status ${response.status}`,
        details: responseData,
        status: response.status
      });
    }

    // Log successful trip creation
    console.log('Trip created successfully:', {
      id: responseData.id,
      trip_ref: responseData.trip_ref
    });

    // Return success response with the exact format from API
    // Expected format: { id: "uuid", trip_ref: "RT5G7" }
    return res.status(201).json({
      id: responseData.id,
      trip_ref: responseData.trip_ref
    });

  } catch (error) {
    console.error('Error creating trip:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return res.status(500).json({ 
      error: 'Failed to create trip',
      message: error.message || 'An unexpected error occurred',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

