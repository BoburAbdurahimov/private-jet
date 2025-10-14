import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Plane, Shield, DollarSign, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

const JetLuxe = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Partner Spotlight
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Jet Luxe
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Premium private aviation with transparent pricing and exceptional service. Experience luxury redefined.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Jet Luxe <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-lg font-medium hover:border-primary transition-colors"
                >
                  View All Partners
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground text-sm">
                  No hidden fees or surprises. Clear, upfront pricing for all luxury jet charters
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Luxury Service</h3>
                <p className="text-muted-foreground text-sm">
                  White-glove service with personalized attention to every detail of your journey
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Premium Fleet</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully curated fleet of the world's most luxurious private aircraft
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">The Jet Luxe Difference</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4">Unmatched Luxury</h3>
                  <p className="text-muted-foreground mb-4">
                    Experience the pinnacle of private aviation with our meticulously maintained fleet of luxury aircraft.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Handpicked luxury aircraft</li>
                    <li>• Premium interior configurations</li>
                    <li>• Gourmet catering options</li>
                    <li>• Concierge services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4">Complete Transparency</h3>
                  <p className="text-muted-foreground mb-4">
                    What you see is what you pay. Our transparent pricing model ensures no surprises or hidden costs.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All-inclusive pricing</li>
                    <li>• No fuel surcharges</li>
                    <li>• Fixed hourly rates</li>
                    <li>• Price guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Business Aviation</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize your business travel with our efficient and comfortable business jet solutions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Same-day departures</li>
                  <li>• Business class amenities</li>
                  <li>• Global reach</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </div>
              <div className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Leisure Travel</h3>
                <p className="text-muted-foreground mb-4">
                  Make your vacation extraordinary with our luxury leisure travel services.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Luxury destinations</li>
                  <li>• Custom itineraries</li>
                  <li>• Family-friendly options</li>
                  <li>• Special occasion packages</li>
                </ul>
              </div>
            </div>

            {/* Partners Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">Explore Our Partner Network</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Discover other premium private aviation partners in our trusted network, each offering unique services and specialties.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/private-jet-finder"
                  className="group block p-6 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">Private Jet Finder</h3>
                  <p className="text-sm text-muted-foreground mb-4">Compare and book from trusted operators</p>
                  <div className="pt-2">
                    <div className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="text-center mt-8">
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  View All Partners <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
              <h2 className="font-serif text-3xl mb-4">Experience True Luxury in the Sky</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join discerning travelers who choose Jet Luxe for their private aviation needs. Discover transparent luxury today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Your Flight <Plane className="w-4 h-4" />
                </a>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-lg font-medium hover:border-primary transition-colors"
                >
                  Explore All Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JetLuxe;
