import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Plane, Globe, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const VilliersJets = () => {
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
                Villiers Jets
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the world's most comprehensive private jet charter service with access to over 10,000 aircraft worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://villiersjets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Villiers Jets <ArrowRight className="w-4 h-4" />
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
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Global Network</h3>
                <p className="text-muted-foreground text-sm">
                  Access to over 10,000 aircraft across 6 continents with 24/7 availability
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Instant Quotes</h3>
                <p className="text-muted-foreground text-sm">
                  Get immediate pricing and availability for your private jet charter needs
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">24/7 Service</h3>
                <p className="text-muted-foreground text-sm">
                  Round-the-clock support from experienced aviation professionals
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">Why Choose Villiers Jets?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4">Comprehensive Fleet</h3>
                  <p className="text-muted-foreground mb-4">
                    From light jets for short hops to heavy jets for intercontinental travel, Villiers Jets offers the perfect aircraft for every journey.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Light Jets for regional travel</li>
                    <li>• Mid-size jets for business trips</li>
                    <li>• Heavy jets for long-haul flights</li>
                    <li>• Ultra-long range aircraft</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4">Transparent Pricing</h3>
                  <p className="text-muted-foreground mb-4">
                    No hidden fees or surprises. Get clear, upfront pricing for your private jet charter with full transparency.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All-inclusive pricing</li>
                    <li>• No hidden fees</li>
                    <li>• Price matching guarantee</li>
                    <li>• Flexible payment options</li>
                  </ul>
                </div>
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
                  to="/jet-luxe"
                  className="group block p-6 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">Jet Luxe</h3>
                  <p className="text-sm text-muted-foreground">Premium private aviation with transparent pricing</p>
                </Link>
                
                <Link
                  to="/fast-private-jet"
                  className="group block p-6 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">Fast Private Jet</h3>
                  <p className="text-sm text-muted-foreground">Quick quotes and instant booking worldwide</p>
                </Link>
                
                <Link
                  to="/air-acer"
                  className="group block p-6 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">Air Acer</h3>
                  <p className="text-sm text-muted-foreground">Luxury solutions for business and leisure</p>
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
              <h2 className="font-serif text-3xl mb-4">Ready to Experience Premium Private Aviation?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied clients who trust Villiers Jets for their private aviation needs. Get your instant quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://villiersjets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get Instant Quote <Plane className="w-4 h-4" />
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

export default VilliersJets;
