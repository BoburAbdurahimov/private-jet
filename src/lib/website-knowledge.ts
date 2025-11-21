/**
 * Website Knowledge Base
 * 
 * This file contains extracted content from your website components.
 * Update this with actual content from your website to train the chatbot.
 * 
 * To update: Copy relevant text from your components and paste them here.
 */

export const websiteKnowledge = {
  // From Hero component
  hero: {
    tagline: "Meet us in the clouds.",
    description: "Experience unparalleled luxury with our exclusive private jet charter service. Travel in comfort, style, and privacy to destinations worldwide.",
    stats: {
      airports: "5,000+ Airports Worldwide",
      concierge: "24/7 Concierge Service",
      onTime: "99.8% On-Time Performance",
      responseTime: "2hr Average Response",
    },
    trustedBy: "Trusted by 500+ Elite Travelers",
    bookingUrl: "https://valens.jetluxe.com/affiliate/managerius",
  },

  // From Services component
  services: {
    title: "Redefining luxury travel.",
    description: "Every detail of your journey is crafted with precision and care. From the moment you book to the second you land, experience aviation at its finest.",
    items: [
      {
        title: "Premium Fleet",
        description: "Access our exclusive collection of the world's finest private aircraft, meticulously maintained to the highest standards.",
      },
      {
        title: "Global Reach",
        description: "Fly anywhere, anytime. Our network spans the globe with priority access to over 5,000 airports worldwide.",
      },
      {
        title: "24/7 Availability",
        description: "Around-the-clock concierge service ensures your journey is seamless from booking to landing.",
      },
      {
        title: "Safety First",
        description: "Industry-leading safety protocols and certified pilots guarantee peace of mind for every flight.",
      },
    ],
  },

  // From Fleet component
  fleet: {
    title: "Our Fleet",
    description: "Choose from our curated selection of aircraft, each offering unmatched comfort and performance.",
    aircraft: [
      {
        name: "Light Jets",
        description: "Perfect for short trips and small groups",
        passengers: "6-8",
        range: "1,500 miles",
      },
      {
        name: "Midsize Jets",
        description: "Ideal balance of space and efficiency",
        passengers: "8-10",
        range: "2,500 miles",
      },
      {
        name: "Heavy Jets",
        description: "Ultimate luxury for long-haul flights",
        passengers: "12-16",
        range: "6,000+ miles",
      },
    ],
    interior: {
      title: "Crafted for comfort",
      description: "Every interior is meticulously designed with premium materials and cutting-edge amenities.",
    },
  },

  // From FAQ component (already in chatbot-service.ts, but organized here)
  faq: {
    categories: [
      {
        name: "Booking & Planning",
        questions: [
          {
            q: "How far in advance should I book a private jet?",
            a: "While we can accommodate last-minute requests, we recommend booking at least 24-48 hours in advance for domestic flights and 48-72 hours for international flights. For peak travel periods or popular destinations, booking 1-2 weeks ahead ensures the best aircraft selection and pricing.",
          },
          {
            q: "Can I book a one-way flight?",
            a: "Absolutely! We offer both one-way and round-trip flights. One-way flights are perfect for business trips or when you're planning to return via different transportation. Our team will help you find the most cost-effective options.",
          },
          {
            q: "What information do I need to provide when booking?",
            a: "We'll need your departure and destination airports, preferred dates and times, number of passengers, and any special requirements (dietary restrictions, pets, oversized luggage, etc.). We can provide quotes with just basic information and finalize details later.",
          },
          {
            q: "Can I change or cancel my booking?",
            a: "Yes, we offer flexible booking policies. Changes and cancellations are typically allowed up to 24 hours before departure, though specific terms may vary based on the aircraft operator and booking type. We'll explain all terms clearly during the booking process.",
          },
        ],
      },
      {
        name: "Safety & Security",
        questions: [
          {
            q: "What safety standards do you maintain?",
            a: "All aircraft in our network meet the highest international safety standards. We work exclusively with operators who maintain rigorous maintenance schedules, employ experienced pilots with thousands of flight hours, and adhere to strict safety protocols. Every flight includes comprehensive insurance coverage.",
          },
          {
            q: "Are the pilots certified and experienced?",
            a: "Yes, all pilots are commercially licensed with extensive experience. Most have military or commercial airline backgrounds with thousands of flight hours. They undergo regular training and medical examinations to ensure peak performance and safety.",
          },
          {
            q: "What happens in case of weather delays?",
            a: "Safety is our top priority. If weather conditions are unsafe, we'll work with you to reschedule or provide alternative arrangements. Our aircraft are equipped with advanced weather radar and our pilots make informed decisions based on real-time conditions.",
          },
          {
            q: "Is there security screening at private terminals?",
            a: "Private terminals offer expedited security screening that's typically much faster than commercial airports. The process is streamlined but still thorough, ensuring security while maintaining the convenience and privacy that private aviation provides.",
          },
        ],
      },
      {
        name: "Pricing & Payment",
        questions: [
          {
            q: "How is pricing calculated?",
            a: "Pricing is based on several factors including flight distance, aircraft type, flight time, fuel costs, landing fees, and crew expenses. We provide transparent, all-inclusive quotes so you know exactly what you're paying with no hidden fees.",
          },
          {
            q: "What payment methods do you accept?",
            a: "We accept all major credit cards, wire transfers, and corporate accounts. Payment terms vary based on the booking type - some require full payment in advance, while others may offer payment upon completion of the flight.",
          },
          {
            q: "Are there any hidden fees?",
            a: "No hidden fees. Our quotes include all costs: flight time, fuel, landing fees, crew expenses, and standard catering. The only additional costs might be for special requests like premium catering, ground transportation, or specific amenities.",
          },
          {
            q: "Do you offer corporate accounts?",
            a: "Yes, we offer corporate accounts with preferred pricing, flexible payment terms, and dedicated account management. Corporate clients benefit from volume discounts, streamlined booking processes, and consolidated billing.",
          },
        ],
      },
      {
        name: "Aircraft & Services",
        questions: [
          {
            q: "What types of aircraft are available?",
            a: "Our fleet includes everything from light jets for short trips to ultra-long-range jets for intercontinental flights. We have turboprops, light jets, midsize jets, heavy jets, and ultra-long-range aircraft, each suited for different distances and passenger counts.",
          },
          {
            q: "Can I request specific amenities or catering?",
            a: "Absolutely! We can arrange premium catering, specific beverages, dietary accommodations, entertainment systems, and other amenities. We'll work with you to create a personalized experience that meets your preferences.",
          },
          {
            q: "Are pets allowed on private jets?",
            a: "Yes, most private jets welcome pets. Unlike commercial airlines, pets can often travel in the cabin with you. We'll ensure the aircraft operator accommodates your pet and can arrange any necessary documentation or special requirements.",
          },
          {
            q: "What airports can private jets access?",
            a: "Private jets can access over 5,000 airports worldwide, including many smaller airports that commercial airlines don't serve. This means you can often fly closer to your final destination, saving significant travel time.",
          },
          {
            q: "Is WiFi available on private jets?",
            a: "Yes, most modern private jets are equipped with high-speed WiFi and satellite communications. This allows you to stay connected and productive during your flight, whether for business calls or entertainment.",
          },
        ],
      },
    ],
  },

  // Contact information
  contact: {
    phone: "+1 (929) 567-4215",
    phoneFormatted: "+19295674215",
    email: "hello@managerius.com",
    website: "managerius.com",
    availability: "24/7",
    address: "63 N. Burritt Ave Room 100 East Buffalo, WY 82834 United States",
    responseTime: "Response within 2 hours during business hours",
    emergencySupport: "24/7 emergency charter assistance",
    services: [
      "Free consultation and quote",
      "Personalized service recommendations",
      "Private Charter",
      "Business Aviation",
      "Leisure Travel",
      "Group Travel",
      "Fractional Ownership",
      "Jet Card Program",
    ],
  },

  // Testimonials (for credibility)
  testimonials: {
    totalClients: "500+ Satisfied Clients",
    totalFlights: "2,000+ Successful Flights",
    onTimePerformance: "99.8% On-Time Performance",
    description: "Trusted by industry leaders worldwide",
  },

  // Partners
  partners: {
    description: "We've carefully curated partnerships with the world's most trusted private aviation providers. Each partner brings unique expertise and exceptional service to ensure your journey exceeds expectations.",
    features: [
      "Global Coverage: Access to private jets and airports worldwide through our extensive partner network",
      "Vetted Excellence: Every partner is carefully selected for their safety record and service excellence",
      "24/7 Support: Round-the-clock assistance from our team and partner network for any travel needs",
    ],
  },

  // Additional business information
  business: {
    name: "Managerius",
    type: "Premium Private Jet Charter Service",
    tagline: "Experience unparalleled luxury with exclusive private jet charter service",
  },
};

/**
 * Convert website knowledge to a formatted string for AI context
 */
export function getWebsiteContext(): string {
  const { hero, services, fleet, faq, contact, business, testimonials, partners } = websiteKnowledge;

  return `
You are a helpful AI assistant for ${business.name}, a ${business.type}. Your role is to answer questions about private jet charter services professionally and accurately based on the following information from our website:

COMPANY INFORMATION:
- Name: ${business.name}
- Tagline: "${hero.tagline}"
- Description: ${hero.description}
- ${hero.trustedBy}

KEY STATISTICS:
- ${hero.stats.airports}
- ${hero.stats.concierge}
- ${hero.stats.onTime}
- ${hero.stats.responseTime}

SERVICES:
${services.items.map((s) => `- ${s.title}: ${s.description}`).join("\n")}

FLEET INFORMATION:
${fleet.aircraft.map((a) => `- ${a.name}: ${a.description}. Capacity: ${a.passengers} passengers. Range: ${a.range}.`).join("\n")}
- Interior: ${fleet.interior.description}

BOOKING & PLANNING INFORMATION:
- Booking URL: ${hero.bookingUrl}
${faq.categories
  .find((c) => c.name === "Booking & Planning")
  ?.questions.map((q) => `- Q: ${q.q}\n  A: ${q.a}`)
  .join("\n\n")}

SAFETY & SECURITY INFORMATION:
${faq.categories
  .find((c) => c.name === "Safety & Security")
  ?.questions.map((q) => `- Q: ${q.q}\n  A: ${q.a}`)
  .join("\n\n")}

PRICING & PAYMENT INFORMATION:
${faq.categories
  .find((c) => c.name === "Pricing & Payment")
  ?.questions.map((q) => `- Q: ${q.q}\n  A: ${q.a}`)
  .join("\n\n")}

AIRCRAFT & SERVICES INFORMATION:
${faq.categories
  .find((c) => c.name === "Aircraft & Services")
  ?.questions.map((q) => `- Q: ${q.q}\n  A: ${q.a}`)
  .join("\n\n")}

CONTACT INFORMATION:
- Phone: ${contact.phone} (${contact.phoneFormatted})
- Email: ${contact.email}
- Website: ${contact.website}
- Address: ${contact.address}
- Availability: ${contact.availability}
- ${contact.responseTime}
- ${contact.emergencySupport}
- Services: ${contact.services.join(", ")}

TESTIMONIALS & CREDIBILITY:
- ${testimonials.totalClients}
- ${testimonials.totalFlights}
- ${testimonials.onTimePerformance}
- ${testimonials.description}

PARTNER NETWORK:
${partners.description}
${partners.features.map((f) => `- ${f}`).join("\n")}

IMPORTANT GUIDELINES:
- Be friendly, professional, and helpful
- ALWAYS use the FAQ information above to answer questions accurately
- When asked about payment methods, pricing, booking, safety, or services, refer to the specific FAQ answers provided above
- If asked about payment methods, provide the exact answer from the "Pricing & Payment" FAQ section
- If asked about specific pricing, recommend contacting the team for a personalized quote
- For complex booking questions, suggest speaking with the concierge team
- Keep responses concise but informative
- Always maintain a luxury/premium service tone
- Reference specific statistics when relevant (e.g., "We have access to 5,000+ airports")
- When discussing booking, mention the booking URL: ${hero.bookingUrl}
- DO NOT make up information - only use information from the context provided above
`.trim();
}

