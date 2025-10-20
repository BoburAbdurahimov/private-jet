import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Leaf, Recycle, Wind, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SustainablePrivateAviation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Sustainability
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Sustainability in Private Aviation: The Future of Eco-Luxury
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how private aviation is embracing sustainability through offsets, SAF, newer fleets, and eco-conscious choices that reduce environmental impact.
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
                <h2 className="font-serif text-3xl mb-6">The Green Revolution in Private Aviation</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Private aviation is leading the way in sustainable luxury travel, with innovative solutions that allow 
                  discerning travelers to enjoy premium experiences while minimizing environmental impact.
                </p>
              </div>

              {/* Sustainable Aviation Fuel */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wind className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Sustainable Aviation Fuel (SAF)</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    SAF reduces carbon emissions by up to 80% compared to conventional jet fuel, made from renewable sources.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Made from waste oils and agricultural residues</li>
                    <li>• 80% reduction in carbon emissions</li>
                    <li>• Drop-in replacement for conventional fuel</li>
                    <li>• No aircraft modifications required</li>
                    <li>• Growing availability worldwide</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Recycle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Carbon Offsetting</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Verified carbon offset programs neutralize flight emissions through verified environmental projects.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Verified carbon offset programs</li>
                    <li>• Reforestation projects</li>
                    <li>• Renewable energy investments</li>
                    <li>• Third-party verification</li>
                    <li>• Transparent reporting</li>
                  </ul>
                </div>
              </div>

              {/* Modern Fleet Technology */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Next-Generation Aircraft</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Electric Aircraft</h4>
                    <p className="text-sm text-muted-foreground mb-2">Zero-emission short-haul flights</p>
                    <p className="text-xs text-muted-foreground">Coming 2025-2030</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Hybrid Technology</h4>
                    <p className="text-sm text-muted-foreground mb-2">Combined electric and fuel systems</p>
                    <p className="text-xs text-muted-foreground">In development</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Efficient Designs</h4>
                    <p className="text-sm text-muted-foreground mb-2">Aerodynamic improvements</p>
                    <p className="text-xs text-muted-foreground">Available now</p>
                  </div>
                </div>
              </div>

              {/* Sustainable Practices */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Operator Initiatives</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Fleet modernization programs</li>
                    <li>• SAF adoption incentives</li>
                    <li>• Carbon offset partnerships</li>
                    <li>• Sustainable ground operations</li>
                    <li>• Green building certifications</li>
                    <li>• Waste reduction programs</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Passenger Choices</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Choose operators with SAF programs</li>
                    <li>• Opt for carbon offset options</li>
                    <li>• Select newer, more efficient aircraft</li>
                    <li>• Combine trips when possible</li>
                    <li>• Choose direct flights</li>
                    <li>• Support sustainable operators</li>
                  </ul>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Environmental Impact Reduction</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Carbon Footprint</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• SAF reduces emissions by 80%</li>
                      <li>• Carbon offsets neutralize remaining impact</li>
                      <li>• Newer aircraft are 20-30% more efficient</li>
                      <li>• Direct flights reduce overall emissions</li>
                      <li>• Optimized routing saves fuel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Waste Reduction</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Biodegradable catering materials</li>
                      <li>• Digital documentation</li>
                      <li>• Reusable service items</li>
                      <li>• Composting programs</li>
                      <li>• Recycling initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Future Innovations */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Emerging Technologies</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Hydrogen-powered aircraft</li>
                    <li>• Solar-assisted flight systems</li>
                    <li>• Advanced battery technology</li>
                    <li>• AI-optimized flight paths</li>
                    <li>• Sustainable materials</li>
                    <li>• Noise reduction technology</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Industry Commitments</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Net-zero emissions by 2050</li>
                    <li>• 10% SAF by 2030</li>
                    <li>• Carbon neutral growth</li>
                    <li>• Sustainable fuel mandates</li>
                    <li>• Green airport initiatives</li>
                    <li>• Environmental reporting standards</li>
                  </ul>
                </div>
              </div>

              {/* Making Sustainable Choices */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">How to Fly More Sustainably</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Choose Green Operators</h4>
                    <p className="text-sm text-muted-foreground">Select operators with strong sustainability programs</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Offset Your Flights</h4>
                    <p className="text-sm text-muted-foreground">Purchase verified carbon offsets for your travel</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Fly Efficiently</h4>
                    <p className="text-sm text-muted-foreground">Choose direct flights and newer aircraft</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Fly Sustainably with JetLuxe</h3>
                <p className="text-muted-foreground mb-6">
                  Experience luxury private aviation with a commitment to sustainability. 
                  Choose JetLuxe for transparent pricing and eco-conscious travel options.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Sustainable Travel <ArrowRight className="w-4 h-4" />
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

export default SustainablePrivateAviation;