import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Plane, Search, Shield, Star, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const PrivateJetFinder = () => {
  useEffect(() => {
    // Page retained for legacy routing; no external script needed
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Private Jet Finder | Charter Services | Managerius"
        description="Find the perfect private jet charter for your travel needs. Compare prices and book luxury aviation services through our comprehensive private jet finder platform."
        canonical="https://managerius.com/private-jet-finder"
      />
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
                Premium private aviation with transparent pricing and exceptional service.
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
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Compare Prices</h3>
                <p className="text-muted-foreground text-sm">
                  Compare prices from multiple operators to find the best deals for your private jet charter
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Trusted Operators</h3>
                <p className="text-muted-foreground text-sm">
                  All operators are vetted and verified for safety, reliability, and exceptional service standards
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Best Deals</h3>
                <p className="text-muted-foreground text-sm">
                  Access exclusive deals and competitive pricing from our network of premium private jet operators
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">Why Choose Private Jet Finder?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4">Transparent Comparison</h3>
                  <p className="text-muted-foreground mb-4">
                    See all your options side by side with transparent pricing, aircraft details, and operator information.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time pricing comparison</li>
                    <li>• Aircraft specifications</li>
                    <li>• Operator ratings and reviews</li>
                    <li>• Complete cost breakdown</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4">Verified Safety</h3>
                  <p className="text-muted-foreground mb-4">
                    Every operator in our network undergoes rigorous safety audits and maintains the highest industry standards.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Safety certification verification</li>
                    <li>• Insurance compliance checks</li>
                    <li>• Pilot qualification reviews</li>
                    <li>• Aircraft maintenance records</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-serif text-lg mb-2">Search & Compare</h3>
                <p className="text-muted-foreground text-sm">Enter your route and see all available options with transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-serif text-lg mb-2">Review Options</h3>
                <p className="text-muted-foreground text-sm">Compare aircraft, operators, and pricing to find your perfect match</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-serif text-lg mb-2">Book Securely</h3>
                <p className="text-muted-foreground text-sm">Complete your booking with secure payment and instant confirmation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-serif text-lg mb-2">Fly Confidently</h3>
                <p className="text-muted-foreground text-sm">Depart with confidence knowing you got the best deal from a trusted operator</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Save Money</h3>
                <p className="text-muted-foreground mb-4">
                  Our comparison platform helps you find the best deals and save up to 30% on private jet charters.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Price comparison across operators</li>
                  <li>• Exclusive member discounts</li>
                  <li>• Seasonal pricing insights</li>
                  <li>• Empty leg opportunities</li>
                </ul>
              </div>
              <div className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Save Time</h3>
                <p className="text-muted-foreground mb-4">
                  Skip the endless calls and emails. Get quotes and book your flight in minutes, not hours.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Instant quote generation</li>
                  <li>• One-click booking process</li>
                  <li>• Automated confirmations</li>
                  <li>• Digital travel documents</li>
                </ul>
              </div>
            </div>

            {/* CTA to Jet Luxe */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl mb-6">Book With Jet Luxe</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare options and book your luxury charter with transparent pricing.
              </p>
              <a
                href="https://valens.jetluxe.com/affiliate/managerius"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Book Now <Plane className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
              <h2 className="font-serif text-3xl mb-4">Fly Jet Luxe Today</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join discerning travelers who choose Jet Luxe for their private aviation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Now <Plane className="w-4 h-4" />
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

export default PrivateJetFinder;
