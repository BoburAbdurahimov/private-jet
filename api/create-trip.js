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

    // Make request to JetLuxe API
    const response = await fetch(`${API_BASE_URL}/api/affiliate/valens/v1/trip/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(tripData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('JetLuxe API error:', {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      });
      
      return res.status(response.status).json({
        error: responseData.message || `API request failed with status ${response.status}`,
        details: responseData
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
    console.error('Error creating trip:', error);
    return res.status(500).json({ 
      error: 'Failed to create trip',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

