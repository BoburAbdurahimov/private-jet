import { getWebsiteContext } from "./website-knowledge";

// Business context is now generated from website-knowledge.ts
// Update that file to train the chatbot with your website content
// Using a function to lazy-load the context and handle any errors gracefully
function getBusinessContext(): string {
  try {
    return getWebsiteContext();
  } catch (error) {
    console.error("Error generating website context:", error);
    // Fallback context if there's an error
    return `You are a helpful AI assistant for Managerius, a premium private jet charter service. Please answer questions about private jet charter services professionally and helpfully. For specific details, please contact the team at +1 (929) 567-4215.`;
  }
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function getAIResponse(
  userMessage: string,
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>
): Promise<string> {
  // Check if OpenAI API key is configured
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    // Fallback to rule-based responses if no API key
    return getFallbackResponse(userMessage);
  }

  try {
    // Prepare conversation history with system message for context
    // OpenAI API uses "system" role for instructions/context
    const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      {
        role: "system",
        content: getBusinessContext(),
      },
      ...conversationHistory.slice(-10).map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      {
        role: "user",
        content: userMessage,
      },
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    // Fallback to rule-based responses on error
    return getFallbackResponse(userMessage);
  }
}

// Fallback response system for when OpenAI API is not available
function getFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Booking questions
  if (message.includes("book") || message.includes("booking") || message.includes("reserve")) {
    return "To book a private jet, we recommend booking 24-48 hours in advance for domestic flights and 48-72 hours for international flights. You'll need to provide your departure and destination airports, preferred dates and times, number of passengers, and any special requirements. Would you like me to connect you with our concierge team for a personalized quote?";
  }

  // Pricing questions
  if (
    message.includes("price") ||
    message.includes("cost") ||
    message.includes("how much") ||
    message.includes("pricing")
  ) {
    return "Pricing depends on several factors including flight distance, aircraft type, flight time, fuel costs, landing fees, and crew expenses. We provide transparent, all-inclusive quotes with no hidden fees. For a personalized quote, please contact our team at +1 (929) 567-4215 or visit our contact page. We also offer corporate accounts with preferred pricing.";
  }

  // Payment method questions
  if (
    message.includes("payment method") ||
    message.includes("payment methods") ||
    message.includes("how to pay") ||
    message.includes("how do i pay") ||
    message.includes("how can i pay") ||
    (message.includes("accept") && message.includes("payment")) ||
    message.includes("credit card") ||
    message.includes("wire transfer") ||
    message.includes("corporate account") ||
    (message.includes("pay") && message.includes("method")) ||
    (message.includes("pay") && message.includes("way"))
  ) {
    return "We accept all major credit cards, wire transfers, and corporate accounts. Payment terms vary based on the booking type - some require full payment in advance, while others may offer payment upon completion of the flight. We also offer corporate accounts with preferred pricing, flexible payment terms, and dedicated account management. There are no hidden fees - our quotes include all costs: flight time, fuel, landing fees, crew expenses, and standard catering.";
  }

  // Safety questions
  if (
    message.includes("safe") ||
    message.includes("safety") ||
    message.includes("pilot") ||
    message.includes("certified") ||
    message.includes("weather delay") ||
    message.includes("weather delays") ||
    message.includes("security screening") ||
    message.includes("private terminal") ||
    message.includes("private terminals")
  ) {
    if (message.includes("weather") || message.includes("delay")) {
      return "Safety is our top priority. If weather conditions are unsafe, we'll work with you to reschedule or provide alternative arrangements. Our aircraft are equipped with advanced weather radar and our pilots make informed decisions based on real-time conditions.";
    }
    if (message.includes("security") || message.includes("screening") || message.includes("terminal")) {
      return "Private terminals offer expedited security screening that's typically much faster than commercial airports. The process is streamlined but still thorough, ensuring security while maintaining the convenience and privacy that private aviation provides.";
    }
    if (message.includes("pilot") || message.includes("certified")) {
      return "Yes, all pilots are commercially licensed with extensive experience. Most have military or commercial airline backgrounds with thousands of flight hours. They undergo regular training and medical examinations to ensure peak performance and safety.";
    }
    return "All aircraft in our network meet the highest international safety standards. We work exclusively with operators who maintain rigorous maintenance schedules, employ experienced pilots with thousands of flight hours, and adhere to strict safety protocols. Every flight includes comprehensive insurance coverage.";
  }

  // Aircraft/fleet questions
  if (
    message.includes("aircraft") ||
    message.includes("fleet") ||
    (message.includes("jet") && !message.includes("private jet")) ||
    message.includes("plane") ||
    message.includes("types of aircraft") ||
    message.includes("what aircraft")
  ) {
    if (message.includes("type") || message.includes("available") || message.includes("what")) {
      return "Our fleet includes everything from light jets for short trips to ultra-long-range jets for intercontinental flights. We have turboprops, light jets, midsize jets, heavy jets, and ultra-long-range aircraft, each suited for different distances and passenger counts.";
    }
    return "Our premium fleet includes light jets, midsize jets, heavy jets, and ultra-long-range aircraft, each suited for different distances and passenger counts. We also have turboprops available. Most modern jets are equipped with high-speed WiFi and satellite communications. Can I help you find the perfect aircraft for your journey?";
  }

  // Airport questions
  if (
    message.includes("airport") ||
    message.includes("airports") ||
    message.includes("what airports") ||
    message.includes("which airports")
  ) {
    return "Private jets can access over 5,000 airports worldwide, including many smaller airports that commercial airlines don't serve. This means you can often fly closer to your final destination, saving significant travel time.";
  }

  // WiFi questions
  if (
    message.includes("wifi") ||
    message.includes("wi-fi") ||
    message.includes("internet") ||
    message.includes("connectivity")
  ) {
    return "Yes, most modern private jets are equipped with high-speed WiFi and satellite communications. This allows you to stay connected and productive during your flight, whether for business calls or entertainment.";
  }

  // Pet questions
  if (
    message.includes("pet") ||
    message.includes("pets") ||
    message.includes("dog") ||
    message.includes("cat") ||
    (message.includes("bring") && message.includes("animal"))
  ) {
    return "Yes, most private jets welcome pets. Unlike commercial airlines, pets can often travel in the cabin with you. We'll ensure the aircraft operator accommodates your pet and can arrange any necessary documentation or special requirements.";
  }

  // Amenities/catering questions
  if (
    message.includes("amenities") ||
    message.includes("amenity") ||
    message.includes("catering") ||
    message.includes("food") ||
    message.includes("meal") ||
    (message.includes("request") && (message.includes("amenity") || message.includes("catering")))
  ) {
    return "Absolutely! We can arrange premium catering, specific beverages, dietary accommodations, entertainment systems, and other amenities. We'll work with you to create a personalized experience that meets your preferences.";
  }

  // Booking questions - more specific
  if (
    message.includes("how far") ||
    message.includes("advance") ||
    message.includes("how early") ||
    message.includes("when to book")
  ) {
    return "While we can accommodate last-minute requests, we recommend booking at least 24-48 hours in advance for domestic flights and 48-72 hours for international flights. For peak travel periods or popular destinations, booking 1-2 weeks ahead ensures the best aircraft selection and pricing.";
  }

  // One-way flight questions
  if (
    message.includes("one-way") ||
    message.includes("one way") ||
    message.includes("round trip") ||
    message.includes("round-trip")
  ) {
    return "Absolutely! We offer both one-way and round-trip flights. One-way flights are perfect for business trips or when you're planning to return via different transportation. Our team will help you find the most cost-effective options.";
  }

  // Booking information questions
  if (
    message.includes("what information") ||
    message.includes("information needed") ||
    message.includes("what do i need") ||
    (message.includes("booking") && message.includes("need"))
  ) {
    return "We'll need your departure and destination airports, preferred dates and times, number of passengers, and any special requirements (dietary restrictions, pets, oversized luggage, etc.). We can provide quotes with just basic information and finalize details later.";
  }

  // Cancel/change booking questions
  if (
    message.includes("cancel") ||
    message.includes("change") ||
    message.includes("modify") ||
    (message.includes("booking") && (message.includes("cancel") || message.includes("change")))
  ) {
    return "Yes, we offer flexible booking policies. Changes and cancellations are typically allowed up to 24 hours before departure, though specific terms may vary based on the aircraft operator and booking type. We'll explain all terms clearly during the booking process.";
  }

  // Hidden fees questions
  if (
    message.includes("hidden fee") ||
    message.includes("hidden fees") ||
    message.includes("additional cost") ||
    message.includes("extra charge")
  ) {
    return "No hidden fees. Our quotes include all costs: flight time, fuel, landing fees, crew expenses, and standard catering. The only additional costs might be for special requests like premium catering, ground transportation, or specific amenities.";
  }

  // Corporate account questions
  if (
    message.includes("corporate account") ||
    message.includes("corporate accounts") ||
    message.includes("business account") ||
    message.includes("company account")
  ) {
    return "Yes, we offer corporate accounts with preferred pricing, flexible payment terms, and dedicated account management. Corporate clients benefit from volume discounts, streamlined booking processes, and consolidated billing.";
  }

  // Services questions
  if (
    message.includes("service") ||
    message.includes("amenities") ||
    message.includes("catering") ||
    message.includes("wifi")
  ) {
    return "We offer premium catering, high-speed WiFi, satellite communications, and personalized amenities. Most aircraft accommodate pets (they can travel in the cabin), and we can arrange dietary accommodations and special requests. Our 24/7 concierge service ensures every detail of your journey is perfect.";
  }

  // Contact questions
  if (message.includes("contact") || message.includes("phone") || message.includes("call")) {
    return "You can reach our 24/7 concierge team at +1 (929) 567-4215. We're available around the clock to assist with bookings, questions, or special requests. You can also visit our contact page on the website for more ways to get in touch.";
  }

  // General greeting
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey") ||
    message.includes("greetings")
  ) {
    return "Hello! I'm here to help you with questions about our private jet charter services. You can ask me about booking, pricing, our fleet, safety standards, or any other questions. How can I assist you today?";
  }

  // Default response
  return "Thank you for your question! For detailed information about private jet charter services, I'd recommend speaking with our expert concierge team. They can provide personalized assistance and quotes tailored to your specific needs. You can reach them 24/7 at +1 (929) 567-4215, or visit our contact page. Is there anything specific about our services I can help clarify?";
}


