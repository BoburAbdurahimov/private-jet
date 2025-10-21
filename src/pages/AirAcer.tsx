import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Plane, Briefcase, Users, Star, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const AirAcer = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Air Acer | Private Jet Charter Partner | Managerius"
        description="Discover Air Acer's premium private jet charter services through our trusted partner network. Luxury aviation solutions for business and leisure travel."
        canonical="https://managerius.com/air-acer"
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
                Air Acer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Luxury private jet solutions for business and leisure travel. Tailored aviation experiences that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://airacer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Air Acer <ArrowRight className="w-4 h-4" />
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
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Business Travel</h3>
                <p className="text-muted-foreground text-sm">
                  Optimized business jet solutions designed for executive efficiency and productivity
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Leisure Charter</h3>
                <p className="text-muted-foreground text-sm">
                  Unforgettable leisure experiences with luxury amenities and personalized service
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Tailored aviation solutions designed specifically for your unique travel requirements
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">The Air Acer Advantage</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4">Business Excellence</h3>
                  <p className="text-muted-foreground mb-4">
                    Maximize your productivity with our business-focused aviation solutions designed for today's executives.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Executive cabin layouts</li>
                    <li>• In-flight meeting capabilities</li>
                    <li>• Priority departure slots</li>
                    <li>• Business concierge services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4">Leisure Luxury</h3>
                  <p className="text-muted-foreground mb-4">
                    Create unforgettable memories with our luxury leisure travel experiences tailored to your desires.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Luxury cabin configurations</li>
                    <li>• Gourmet dining options</li>
                    <li>• Entertainment systems</li>
                    <li>• Destination concierge</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Corporate Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive corporate aviation programs designed for businesses of all sizes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Corporate jet cards</li>
                  <li>• Fleet management</li>
                  <li>• Executive travel programs</li>
                  <li>• Multi-aircraft solutions</li>
                </ul>
              </div>
              <div className="border border-border bg-card rounded-lg p-6">
                <h3 className="font-serif text-xl mb-4">Personal Luxury</h3>
                <p className="text-muted-foreground mb-4">
                  Exclusive personal aviation services for discerning individuals and families.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Private jet ownership</li>
                  <li>• Fractional ownership</li>
                  <li>• Luxury vacation charters</li>
                  <li>• Special event flights</li>
                </ul>
              </div>
            </div>

            {/* Fleet Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">Our Premium Fleet</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-2">Light Jets</h3>
                  <p className="text-muted-foreground text-sm">Perfect for short to medium-haul business trips</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-2">Mid-Size Jets</h3>
                  <p className="text-muted-foreground text-sm">Ideal for transcontinental business travel</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-2">Heavy Jets</h3>
                  <p className="text-muted-foreground text-sm">Luxury intercontinental travel with maximum comfort</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
              <h2 className="font-serif text-3xl mb-4">Experience Tailored Aviation Excellence</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether for business or leisure, Air Acer delivers customized private aviation solutions that perfectly match your needs and exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://airacer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore Solutions <Plane className="w-4 h-4" />
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

export default AirAcer;
