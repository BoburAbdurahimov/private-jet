// JetLuxe Affiliate API Proxy
// This serverless function acts as a proxy to avoid CORS issues

const API_BASE_URL = "https://jetluxe.jetlink.app";
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
      // The example shows "12|" as a user ID prefix, but we'll use the token as provided
      // Standard Bearer token format
      const authHeader = `Bearer ${API_TOKEN}`;
      
      console.log('Making API request:', {
        url: `${API_BASE_URL}/api/affiliate/valens/v1/trip/new`,
        method: 'POST',
        authHeaderPrefix: authHeader.substring(0, 15) + '...'
      });

      response = await fetch(`${API_BASE_URL}/api/affiliate/valens/v1/trip/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify(tripData),
      });

      // Try to parse JSON response
      const responseText = await response.text();
      console.log('API Response status:', response.status);
      console.log('API Response text:', responseText);
      
      try {
        responseData = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        return res.status(500).json({
          error: 'Invalid response from API',
          message: 'The server returned an invalid response format',
          responseText: responseText.substring(0, 200) // First 200 chars for debugging
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
        data: responseData
      });
      
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

