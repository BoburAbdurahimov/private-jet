import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search, Clock, DollarSign, Plane, Star } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyLegPrivateFlights = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                Cost Savings
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Empty-Leg Flights Explained: How to Fly Private for Less
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the smart way to experience private aviation at a fraction of the cost through empty-leg flights.
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
                <h2 className="font-serif text-3xl mb-6">What Are Empty-Leg Flights?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Empty-leg flights occur when a private jet needs to return to its base or reposition for the next charter. 
                  These flights are offered at significantly reduced rates, making private aviation accessible to more travelers.
                </p>
              </div>

              {/* How Empty Legs Work */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">How They Work</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    When a private jet completes a one-way charter, it often needs to return to its home base or reposition for the next flight.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Aircraft needs to return to base</li>
                    <li>• Repositioning for next charter</li>
                    <li>• Maintenance or crew scheduling</li>
                    <li>• Seasonal base changes</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Cost Savings</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Empty-leg flights typically cost 30-70% less than regular charters, making private aviation more accessible.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• 30-70% cost reduction</li>
                    <li>• Same luxury experience</li>
                    <li>• All amenities included</li>
                    <li>• Professional crew</li>
                  </ul>
                </div>
              </div>

              {/* Finding Empty Legs */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">How to Find Empty-Leg Flights</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Online Platforms</h4>
                    <p className="text-sm text-muted-foreground">Use specialized websites and apps to search for available empty legs</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Broker Networks</h4>
                    <p className="text-sm text-muted-foreground">Work with aviation brokers who have access to empty-leg inventory</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Direct Operators</h4>
                    <p className="text-sm text-muted-foreground">Contact operators directly for upcoming empty-leg opportunities</p>
                  </div>
                </div>
              </div>

              {/* Tips for Success */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Booking Tips</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Book early for best selection and pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Be flexible with dates and times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Consider one-way trips to popular destinations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Set up alerts for your preferred routes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Same luxury experience as regular charters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Professional crew and amenities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Limited schedule flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Potential for schedule changes</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Popular Empty-Leg Routes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Domestic Routes</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• New York ↔ Miami</li>
                      <li>• Los Angeles ↔ Las Vegas</li>
                      <li>• Chicago ↔ New York</li>
                      <li>• Boston ↔ Florida</li>
                      <li>• Dallas ↔ Los Angeles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">International Routes</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• New York ↔ London</li>
                      <li>• Miami ↔ Caribbean</li>
                      <li>• Los Angeles ↔ Mexico</li>
                      <li>• New York ↔ Europe</li>
                      <li>• Miami ↔ South America</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Find Your Perfect Empty-Leg Flight</h3>
                <p className="text-muted-foreground mb-6">
                  Discover available empty-leg flights and experience private aviation at incredible savings 
                  with JetLuxe's transparent pricing.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Search Empty Legs <ArrowRight className="w-4 h-4" />
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

export default EmptyLegPrivateFlights;
