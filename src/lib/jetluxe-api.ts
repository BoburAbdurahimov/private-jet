// JetLuxe Affiliate API Service

const API_BASE_URL = "https://jetluxe.jetlink.app";
const API_TOKEN = "223oLxcHMcaQ8TVatNAsLRJ2acpLQkqtXBbQY9yqg010dc8e8f";

export interface TripLeg {
  date: string; // YYYY-MM-DD
  passengers: number;
  arrival_icao: string; // 4-letter ICAO code
  departure_icao: string; // 4-letter ICAO code
  time: string; // HH:MM format
}

export interface Customer {
  full_name: string;
  contact: string;
  email: string;
}

export interface CreateTripRequest {
  idempotency_key: string; // UUID
  legs: TripLeg[];
  customer: Customer;
}

export interface CreateTripResponse {
  id: string; // UUID
  trip_ref: string;
}

/**
 * Convert city name to ICAO code
 * This is a simplified mapping - you may want to expand this or use an airport lookup service
 */
export const getICAOCode = (cityName: string): string | null => {
  const cityToICAO: Record<string, string> = {
    "New York, NY": "KJFK",
    "Los Angeles, CA": "KLAX",
    "Miami, FL": "KMIA",
    "Las Vegas, NV": "KLAS",
    "Chicago, IL": "KORD",
    "London, UK": "EGLL",
    "Paris, France": "LFPG",
    "Tokyo, Japan": "RJAA",
    "Dubai, UAE": "OMDB",
    "Monaco": "LFMN",
    "Aspen, CO": "KASE",
    "Nantucket, MA": "KACK",
  };
  
  return cityToICAO[cityName] || null;
};

/**
 * Generate a UUID v4 for idempotency key
 */
export const generateIdempotencyKey = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Create a new trip via JetLuxe Affiliate API
 */
export const createTrip = async (
  request: CreateTripRequest
): Promise<CreateTripResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/affiliate/valens/v1/trip/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `API request failed with status ${response.status}`
      );
    }

    const data: CreateTripResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating trip:", error);
    throw error;
  }
};

