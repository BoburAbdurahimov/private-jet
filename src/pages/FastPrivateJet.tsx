import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Plane, Zap, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FastPrivateJet = () => {
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
                Fast Private Jet
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Quick quotes and instant booking for private jet charters worldwide. Speed meets luxury.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.fastprivatejet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Fast Private Jet <ArrowRight className="w-4 h-4" />
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
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Quick Quotes</h3>
                <p className="text-muted-foreground text-sm">
                  Get instant pricing for your private jet charter in seconds, not hours
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Instant Booking</h3>
                <p className="text-muted-foreground text-sm">
                  Secure your private jet with just a few clicks and immediate confirmation
                </p>
              </div>
              <div className="text-center p-6 border border-border bg-card rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">Global Access</h3>
                <p className="text-muted-foreground text-sm">
                  Worldwide coverage with 24/7 availability for your urgent travel needs
                </p>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-card border border-border rounded-lg p-8 mb-16">
              <h2 className="font-serif text-3xl mb-6 text-center">Speed Without Compromise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4">Lightning-Fast Service</h3>
                  <p className="text-muted-foreground mb-4">
                    When time is of the essence, Fast Private Jet delivers. Get quotes and book flights in record time.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 60-second quotes</li>
                    <li>• Same-day departures</li>
                    <li>• Emergency flights</li>
                    <li>• Last-minute bookings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4">Reliable Operations</h3>
                  <p className="text-muted-foreground mb-4">
                    Fast doesn't mean rushed. Our streamlined process ensures reliability and safety every time.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Verified operators</li>
                    <li>• Safety first approach</li>
                    <li>• Real-time tracking</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-serif text-lg mb-2">Request Quote</h3>
                <p className="text-muted-foreground text-sm">Enter your travel details and get instant pricing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-serif text-lg mb-2">Compare Options</h3>
                <p className="text-muted-foreground text-sm">Review available aircraft and select your preferred option</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-serif text-lg mb-2">Book Instantly</h3>
                <p className="text-muted-foreground text-sm">Secure your flight with immediate confirmation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-serif text-lg mb-2">Fly Fast</h3>
                <p className="text-muted-foreground text-sm">Depart on schedule with our streamlined service</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
              <h2 className="font-serif text-3xl mb-4">Need a Jet Fast? We've Got You Covered</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of travelers who trust Fast Private Jet for their urgent and last-minute private aviation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.fastprivatejet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get Quick Quote <Plane className="w-4 h-4" />
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

export default FastPrivateJet;
