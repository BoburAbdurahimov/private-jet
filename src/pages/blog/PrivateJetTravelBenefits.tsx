import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Shield, Users, Plane, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetTravelBenefits = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Private Aviation Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Why Choose Private Jet Travel with JetLuxe: Top 5 Benefits
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the powerful reasons why business leaders and discerning travelers prefer private aviation over commercial flights.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published December 19, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h2 className="font-serif text-3xl mb-6">The Private Jet Advantage</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  While commercial aviation has its place, private jet travel offers unparalleled advantages that go far beyond luxury. 
                  Here are the top 5 benefits that make private aviation the smart choice for business and leisure travelers.
                </p>
              </div>

              {/* Benefit 1 */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">1. Time is Your Most Valuable Asset</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Private jets save you hours of travel time. No security lines, no waiting at gates, no connecting flights. 
                    Arrive 15 minutes before departure and be wheels-up within minutes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Direct flights to any destination</li>
                    <li>• No layovers or connections</li>
                    <li>• Arrive closer to your final destination</li>
                    <li>• Work productively during flight</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">2. Unmatched Privacy & Security</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Conduct sensitive business discussions, protect confidential information, and travel with complete discretion. 
                    Your conversations stay private.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Confidential business discussions</li>
                    <li>• No public exposure</li>
                    <li>• Secure document handling</li>
                    <li>• VIP security protocols</li>
                  </ul>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">3. Ultimate Flexibility</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Change your schedule, add passengers, or modify your route with minimal notice. 
                    Your aircraft adapts to your needs, not the other way around.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Schedule changes in minutes</li>
                    <li>• Add or remove passengers</li>
                    <li>• Route modifications</li>
                    <li>• Last-minute departures</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">4. Personalized Service</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Every detail is tailored to your preferences. From catering to ground transportation, 
                    your experience is designed around your specific needs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Custom catering preferences</li>
                    <li>• Personalized ground services</li>
                    <li>• Dedicated flight crew</li>
                    <li>• Concierge assistance</li>
                  </ul>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl">5. Enhanced Safety & Health</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Private jets offer superior safety standards with fewer passengers, controlled environments, 
                  and the ability to avoid crowded airports and terminals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Controlled passenger environment</li>
                  <li>• Superior aircraft maintenance</li>
                  <li>• Experienced flight crews</li>
                  <li>• Avoid crowded terminals</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Ready to Experience Private Aviation?</h3>
                <p className="text-muted-foreground mb-6">
                  Discover transparent pricing and exceptional service with JetLuxe. 
                  Book your first private jet charter today.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Your Flight <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivateJetTravelBenefits;
