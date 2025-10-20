import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, Calendar, Plane, Star, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetDestinations2025 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Travel Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Top Luxury Destinations by Private Jet in 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover 12 stunning destinations perfect for private jet travel—from tropical paradises to cultural capitals.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published December 19, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h2 className="font-serif text-3xl mb-6">The World Awaits</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Private jets open up a world of possibilities, allowing you to reach exclusive destinations 
                  with ease and comfort. Here are the top luxury destinations for 2025.
                </p>
              </div>

              {/* Tropical Destinations */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl mb-6">Tropical Paradises</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">St. Barts, Caribbean</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Exclusive island with pristine beaches and luxury resorts.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Dec-Apr
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        TFFJ Airport
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">Maldives</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Overwater bungalows and crystal-clear waters.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Nov-Apr
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        MLE Airport
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">French Riviera</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Cannes, Nice, and Monaco's glamorous coastline.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: May-Sep
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        NCE Airport
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">Aspen, Colorado</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">World-class skiing and luxury mountain retreats.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Dec-Mar
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        ASE Airport
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Destinations */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl mb-6">Cultural Capitals</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">Tokyo, Japan</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Modern luxury meets ancient traditions.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Mar-May, Sep-Nov
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        NRT/HND Airports
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">Dubai, UAE</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Ultra-modern luxury and world-class shopping.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Nov-Mar
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        DXB Airport
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">London, UK</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Historic charm meets contemporary luxury.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: May-Sep
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        LHR/LGW Airports
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">New York, USA</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">The ultimate urban luxury experience.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Apr-Jun, Sep-Nov
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        JFK/LGA Airports
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adventure Destinations */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl mb-6">Adventure & Exclusivity</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">Patagonia, Chile</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Untamed wilderness and luxury eco-lodges.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Nov-Mar
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        SCL Airport
                      </span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">Safari, Kenya</h4>
                    </div>
                    <p className="text-muted-foreground mb-3">Luxury tented camps and wildlife encounters.</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Best: Jul-Oct
                      </span>
                      <span className="flex items-center gap-1">
                        <Plane className="w-4 h-4" />
                        NBO Airport
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planning Tips */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Planning Your Luxury Getaway</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Best Practices</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Book accommodations well in advance</li>
                      <li>• Consider seasonal weather patterns</li>
                      <li>• Plan for local customs and requirements</li>
                      <li>• Arrange ground transportation</li>
                      <li>• Check visa and entry requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Private Jet Advantages</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Access to smaller, exclusive airports</li>
                      <li>• Flexible departure times</li>
                      <li>• Direct flights to remote destinations</li>
                      <li>• Privacy and comfort en route</li>
                      <li>• Customized in-flight experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Start Planning Your 2025 Adventure</h3>
                <p className="text-muted-foreground mb-6">
                  Experience these incredible destinations with JetLuxe's transparent pricing and exceptional service. 
                  Your luxury journey begins here.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Plan Your Trip <ArrowRight className="w-4 h-4" />
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

export default PrivateJetDestinations2025;
