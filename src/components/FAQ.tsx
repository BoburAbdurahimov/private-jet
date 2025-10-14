import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, Clock, Shield, CreditCard, ChevronDown } from "lucide-react";
import { ManageriusIcon } from "./ManageriusIcon";

const faqs = [
  {
    category: "Booking & Planning",
    icon: Clock,
    questions: [
      {
        question: "How far in advance should I book a private jet?",
        answer: "While we can accommodate last-minute requests, we recommend booking at least 24-48 hours in advance for domestic flights and 48-72 hours for international flights. For peak travel periods or popular destinations, booking 1-2 weeks ahead ensures the best aircraft selection and pricing."
      },
      {
        question: "Can I book a one-way flight?",
        answer: "Absolutely! We offer both one-way and round-trip flights. One-way flights are perfect for business trips or when you're planning to return via different transportation. Our team will help you find the most cost-effective options."
      },
      {
        question: "What information do I need to provide when booking?",
        answer: "We'll need your departure and destination airports, preferred dates and times, number of passengers, and any special requirements (dietary restrictions, pets, oversized luggage, etc.). We can provide quotes with just basic information and finalize details later."
      },
      {
        question: "Can I change or cancel my booking?",
        answer: "Yes, we offer flexible booking policies. Changes and cancellations are typically allowed up to 24 hours before departure, though specific terms may vary based on the aircraft operator and booking type. We'll explain all terms clearly during the booking process."
      }
    ]
  },
  {
    category: "Safety & Security",
    icon: Shield,
    questions: [
      {
        question: "What safety standards do you maintain?",
        answer: "All aircraft in our network meet the highest international safety standards. We work exclusively with operators who maintain rigorous maintenance schedules, employ experienced pilots with thousands of flight hours, and adhere to strict safety protocols. Every flight includes comprehensive insurance coverage."
      },
      {
        question: "Are the pilots certified and experienced?",
        answer: "Yes, all pilots are commercially licensed with extensive experience. Most have military or commercial airline backgrounds with thousands of flight hours. They undergo regular training and medical examinations to ensure peak performance and safety."
      },
      {
        question: "What happens in case of weather delays?",
        answer: "Safety is our top priority. If weather conditions are unsafe, we'll work with you to reschedule or provide alternative arrangements. Our aircraft are equipped with advanced weather radar and our pilots make informed decisions based on real-time conditions."
      },
      {
        question: "Is there security screening at private terminals?",
        answer: "Private terminals offer expedited security screening that's typically much faster than commercial airports. The process is streamlined but still thorough, ensuring security while maintaining the convenience and privacy that private aviation provides."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: CreditCard,
    questions: [
      {
        question: "How is pricing calculated?",
        answer: "Pricing is based on several factors including flight distance, aircraft type, flight time, fuel costs, landing fees, and crew expenses. We provide transparent, all-inclusive quotes so you know exactly what you're paying with no hidden fees."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, wire transfers, and corporate accounts. Payment terms vary based on the booking type - some require full payment in advance, while others may offer payment upon completion of the flight."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees. Our quotes include all costs: flight time, fuel, landing fees, crew expenses, and standard catering. The only additional costs might be for special requests like premium catering, ground transportation, or specific amenities."
      },
      {
        question: "Do you offer corporate accounts?",
        answer: "Yes, we offer corporate accounts with preferred pricing, flexible payment terms, and dedicated account management. Corporate clients benefit from volume discounts, streamlined booking processes, and consolidated billing."
      }
    ]
  },
  {
    category: "Aircraft & Services",
    icon: ManageriusIcon,
    questions: [
      {
        question: "What types of aircraft are available?",
        answer: "Our fleet includes everything from light jets for short trips to ultra-long-range jets for intercontinental flights. We have turboprops, light jets, midsize jets, heavy jets, and ultra-long-range aircraft, each suited for different distances and passenger counts."
      },
      {
        question: "Can I request specific amenities or catering?",
        answer: "Absolutely! We can arrange premium catering, specific beverages, dietary accommodations, entertainment systems, and other amenities. We'll work with you to create a personalized experience that meets your preferences."
      },
      {
        question: "Are pets allowed on private jets?",
        answer: "Yes, most private jets welcome pets. Unlike commercial airlines, pets can often travel in the cabin with you. We'll ensure the aircraft operator accommodates your pet and can arrange any necessary documentation or special requirements."
      },
      {
        question: "What airports can private jets access?",
        answer: "Private jets can access over 5,000 airports worldwide, including many smaller airports that commercial airlines don't serve. This means you can often fly closer to your final destination, saving significant travel time."
      },
      {
        question: "Is WiFi available on private jets?",
        answer: "Yes, most modern private jets are equipped with high-speed WiFi and satellite communications. This allows you to stay connected and productive during your flight, whether for business calls or entertainment."
      }
    ]
  }
];

export const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  
  // Limit initial questions per category
  const getDisplayedQuestions = (questions: any[]) => {
    return showAllQuestions ? questions : questions.slice(0, 2);
  };

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ManageriusIcon className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about private jet charter services, booking, safety, and more.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All Categories
            </button>
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs
              .filter(faq => !selectedCategory || faq.category === selectedCategory)
              .map((category) => (
                <div key={category.category} className="space-y-4">
                  {getDisplayedQuestions(category.questions).map((faq, index) => (
                    <AccordionItem 
                      key={`${category.category}-${index}`}
                      value={`${category.category}-${index}`}
                      className="border border-border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          <Badge variant="secondary" className="text-xs">
                            {category.category}
                          </Badge>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              ))}
          </Accordion>

          {/* View More Button */}
          {!showAllQuestions && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllQuestions(true)}
                variant="outline"
                className="group"
              >
                View More Questions
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* View Less Button (when all are shown) */}
          {showAllQuestions && (
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowAllQuestions(false)}
                variant="ghost"
                className="group"
              >
                Show Less
                <ChevronDown className="w-4 h-4 ml-2 rotate-180 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg">
            <h3 className="font-serif text-xl mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our aviation experts are here to help with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Contact Our Team
              </a>
              <a href="tel:+19295674215" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:border-primary transition-colors">
                Call +19295674215
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
