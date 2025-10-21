import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Users, Luggage, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetEtiquette = () => {
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
                Etiquette Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Private Jet Etiquette 101: Fly Like a Pro
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master the art of private jet travel with proper etiquette—from arrival to departure and everything in between.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published December 19, 2024</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h2 className="font-serif text-3xl mb-6">The Art of Private Jet Travel</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Private jet travel comes with its own set of unwritten rules and expectations. Understanding proper etiquette 
                  ensures a smooth, enjoyable experience for everyone on board.
                </p>
              </div>

              {/* Arrival & Boarding */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Arrival & Timing</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Punctuality is crucial in private aviation. Arrive on time but not too early.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Arrive 15-20 minutes before departure</li>
                    <li>• Notify crew of any delays immediately</li>
                    <li>• Be ready to board when called</li>
                    <li>• Respect other passengers' time</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Boarding Etiquette</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Boarding a private jet is different from commercial flights. Follow these guidelines.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Greet the crew professionally</li>
                    <li>• Wait for the host to seat you</li>
                    <li>• Keep conversations appropriate</li>
                    <li>• Respect personal space</li>
                  </ul>
                </div>
              </div>

              {/* Dress Code */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Dress Code Guidelines</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Business Travel</h4>
                    <p className="text-sm text-muted-foreground">Business casual to formal attire</p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Blazers and dress shirts</li>
                      <li>• Professional dresses</li>
                      <li>• Polished shoes</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Leisure Travel</h4>
                    <p className="text-sm text-muted-foreground">Smart casual to resort wear</p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Polo shirts and chinos</li>
                      <li>• Sundresses and linen</li>
                      <li>• Comfortable loafers</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Formal Events</h4>
                    <p className="text-sm text-muted-foreground">Black tie or formal attire</p>
                    <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                      <li>• Tuxedos and evening gowns</li>
                      <li>• Formal accessories</li>
                      <li>• Appropriate footwear</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Luggage & Personal Items */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Luggage className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Luggage Guidelines</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Pack efficiently and lightly</li>
                    <li>• Avoid oversized bags</li>
                    <li>• Label all luggage clearly</li>
                    <li>• Keep valuables in carry-on</li>
                    <li>• Respect weight limits</li>
                    <li>• Pack weather-appropriate items</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Pet Travel</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Notify crew about pets in advance</li>
                    <li>• Bring necessary documentation</li>
                    <li>• Keep pets calm and controlled</li>
                    <li>• Respect other passengers</li>
                    <li>• Follow airline pet policies</li>
                    <li>• Bring pet supplies and comfort items</li>
                  </ul>
                </div>
              </div>

              {/* Onboard Behavior */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Onboard Behavior</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Do's</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Be respectful to crew and passengers</li>
                      <li>• Keep conversations appropriate</li>
                      <li>• Follow crew instructions</li>
                      <li>• Use headphones for entertainment</li>
                      <li>• Keep the cabin clean and tidy</li>
                      <li>• Be mindful of noise levels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Don'ts</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Don't be overly demanding</li>
                      <li>• Avoid controversial or offensive topics</li>
                      <li>• Don't interfere with crew duties</li>
                      <li>• Avoid excessive alcohol consumption</li>
                      <li>• Don't leave personal items scattered</li>
                      <li>• Avoid loud phone conversations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Special Considerations */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Business Meetings</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Prepare materials in advance</li>
                    <li>• Respect meeting time limits</li>
                    <li>• Use appropriate technology</li>
                    <li>• Maintain confidentiality</li>
                    <li>• Follow up on action items</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Family Travel</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Supervise children appropriately</li>
                    <li>• Bring entertainment for kids</li>
                    <li>• Respect other passengers</li>
                    <li>• Plan for children's needs</li>
                    <li>• Communicate with crew about special requirements</li>
                  </ul>
                </div>
              </div>

              {/* Tipping Guidelines */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Tipping Etiquette</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Flight Crew</h4>
                    <p className="text-sm text-muted-foreground mb-2">$50-100 per crew member</p>
                    <p className="text-xs text-muted-foreground">For exceptional service</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Ground Crew</h4>
                    <p className="text-sm text-muted-foreground mb-2">$20-50 per person</p>
                    <p className="text-xs text-muted-foreground">For luggage assistance</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Concierge</h4>
                    <p className="text-sm text-muted-foreground mb-2">$25-100</p>
                    <p className="text-xs text-muted-foreground">For special arrangements</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Fly with Confidence and Style</h3>
                <p className="text-muted-foreground mb-6">
                  Experience private aviation with JetLuxe's transparent pricing and exceptional service. 
                  Your journey begins with proper preparation and ends with unforgettable memories.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-colors shadow-lg"
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    textDecoration: 'none',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                  }}
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

export default PrivateJetEtiquette;