import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, CreditCard, Calendar, DollarSign, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const JetCardVsCharter = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CreditCard className="w-4 h-4" />
                Comparison Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Jet Card vs On-Demand Charter: Which One Saves More?
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Compare jet cards vs. on-demand charter: cost, flexibility, blackout dates, and commitment—choose what fits your travel needs.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published December 19, 2024</span>
                <span>•</span>
                <span>7 min read</span>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h2 className="font-serif text-3xl mb-6">Understanding Your Options</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Choosing between jet cards and on-demand charter depends on your travel frequency, flexibility needs, 
                  and budget considerations. Here's a comprehensive comparison to help you decide.
                </p>
              </div>

              {/* Jet Cards Overview */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Jet Cards</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Prepaid flight hours that offer predictable pricing and guaranteed availability.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Prepaid flight hours</li>
                    <li>• Fixed hourly rates</li>
                    <li>• Guaranteed availability</li>
                    <li>• No fuel surcharges</li>
                    <li>• Priority booking</li>
                    <li>• Expiration dates apply</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">On-Demand Charter</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Book flights as needed with flexible scheduling and no long-term commitments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Book as needed</li>
                    <li>• Market-based pricing</li>
                    <li>• Maximum flexibility</li>
                    <li>• No expiration dates</li>
                    <li>• Compare multiple operators</li>
                    <li>• No minimum commitments</li>
                  </ul>
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Cost Analysis</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Jet Card Costs</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Initial deposit: $100,000 - $500,000</li>
                      <li>• Hourly rates: $3,000 - $8,000</li>
                      <li>• No fuel surcharges</li>
                      <li>• Fixed pricing for 12-24 months</li>
                      <li>• Unused hours may expire</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Charter Costs</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pay per flight only</li>
                      <li>• Hourly rates: $2,500 - $12,000</li>
                      <li>• Fuel surcharges may apply</li>
                      <li>• Market-based pricing</li>
                      <li>• No unused hour penalties</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Flexibility Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Jet Card Flexibility</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Limited to specific operators</li>
                    <li>• Blackout dates may apply</li>
                    <li>• Advance booking required</li>
                    <li>• Fleet limitations</li>
                    <li>• Geographic restrictions</li>
                    <li>• Minimum hour requirements</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Charter Flexibility</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Choose any operator</li>
                    <li>• No blackout dates</li>
                    <li>• Last-minute bookings possible</li>
                    <li>• Full fleet access</li>
                    <li>• Global coverage</li>
                    <li>• No minimum commitments</li>
                  </ul>
                </div>
              </div>

              {/* When to Choose Each */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">When to Choose Each Option</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Choose Jet Cards If:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You fly 25+ hours annually</li>
                      <li>• You prefer predictable costs</li>
                      <li>• You book well in advance</li>
                      <li>• You want guaranteed availability</li>
                      <li>• You have consistent travel patterns</li>
                      <li>• You want to avoid fuel surcharges</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Choose Charter If:</h4>
                    <li>• You fly less than 25 hours annually</li>
                    <li>• You need maximum flexibility</li>
                    <li>• You book last-minute frequently</li>
                    <li>• You want to compare options</li>
                    <li>• You have irregular travel patterns</li>
                    <li>• You want no long-term commitments</li>
                  </ul>
                </div>
              </div>

              {/* Hidden Costs */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Jet Card Hidden Costs</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Unused hour expiration</li>
                    <li>• Minimum hour requirements</li>
                    <li>• Peak season surcharges</li>
                    <li>• Cancellation penalties</li>
                    <li>• Fleet upgrade fees</li>
                    <li>• International surcharges</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Charter Hidden Costs</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Fuel surcharges</li>
                    <li>• Landing fees</li>
                    <li>• Crew expenses</li>
                    <li>• Overnight charges</li>
                    <li>• Weather delay costs</li>
                    <li>• Last-minute premium pricing</li>
                  </ul>
                </div>
              </div>

              {/* Decision Matrix */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Decision Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Factor</th>
                        <th className="text-center p-3">Jet Card</th>
                        <th className="text-center p-3">Charter</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Cost Predictability</td>
                        <td className="text-center p-3">High</td>
                        <td className="text-center p-3">Low</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Flexibility</td>
                        <td className="text-center p-3">Medium</td>
                        <td className="text-center p-3">High</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Availability</td>
                        <td className="text-center p-3">High</td>
                        <td className="text-center p-3">Medium</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Commitment</td>
                        <td className="text-center p-3">High</td>
                        <td className="text-center p-3">None</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Best For</td>
                        <td className="text-center p-3">Frequent flyers</td>
                        <td className="text-center p-3">Occasional flyers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Find Your Perfect Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need a jet card or on-demand charter, JetLuxe offers transparent pricing 
                  and exceptional service to meet your private aviation needs.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Explore Your Options <ArrowRight className="w-4 h-4" />
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

export default JetCardVsCharter;
