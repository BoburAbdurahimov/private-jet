import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, DollarSign, Clock, Plane, Calculator, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetCostBreakdown = () => {
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
                Cost Analysis
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                The True Cost of Flying Private: Transparent Price Breakdown
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understand private jet pricing structures, hidden fees, and how to budget for your private aviation needs.
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
                <h2 className="font-serif text-3xl mb-6">Understanding Private Jet Costs</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Private jet pricing can seem complex, but understanding the components helps you make informed decisions 
                  and avoid surprise costs. Here's a complete breakdown of what you're actually paying for.
                </p>
              </div>

              {/* Cost Components */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Hourly Rates</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The base cost is typically calculated by flight hours, with different rates for different aircraft types.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Light Jets</span>
                      <span className="font-semibold">$2,500 - $4,500/hour</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Midsize Jets</span>
                      <span className="font-semibold">$4,000 - $7,000/hour</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Heavy Jets</span>
                      <span className="font-semibold">$6,000 - $12,000/hour</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Plane className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Additional Fees</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Beyond hourly rates, several additional costs can impact your total charter price.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Landing fees and airport charges</li>
                    <li>• Fuel surcharges (if applicable)</li>
                    <li>• Crew expenses and overnight costs</li>
                    <li>• Catering and special requests</li>
                    <li>• Ground transportation</li>
                    <li>• International fees and permits</li>
                  </ul>
                </div>
              </div>

              {/* Cost Factors */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Factors That Affect Pricing</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Route & Distance</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Longer routes may have better hourly rates</li>
                      <li>• International flights include additional fees</li>
                      <li>• Remote destinations cost more</li>
                      <li>• Empty leg positioning affects pricing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Timing & Demand</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Peak travel seasons cost more</li>
                      <li>• Last-minute bookings are expensive</li>
                      <li>• Weekend and holiday surcharges</li>
                      <li>• Weather-related delays add costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sample Cost Breakdown */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Sample Cost Breakdown</h3>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Example: New York to Miami (3-hour flight)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Midsize Jet (3 hours @ $5,500/hour)</span>
                      <span className="font-semibold">$16,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Landing fees</span>
                      <span className="font-semibold">$800</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Crew expenses</span>
                      <span className="font-semibold">$600</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Catering</span>
                      <span className="font-semibold">$400</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="font-semibold">Total Cost</span>
                      <span className="font-semibold text-lg">$18,300</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost-Saving Tips */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Cost-Saving Strategies</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Book empty leg flights for discounts</li>
                    <li>• Consider jet cards for frequent travel</li>
                    <li>• Plan flexible departure times</li>
                    <li>• Share costs with other passengers</li>
                    <li>• Book during off-peak seasons</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Hidden Costs to Watch</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Minimum daily charges</li>
                    <li>• Overnight crew expenses</li>
                    <li>• International permit fees</li>
                    <li>• Weather delay costs</li>
                    <li>• Cancellation penalties</li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Get Transparent Pricing with JetLuxe</h3>
                <p className="text-muted-foreground mb-6">
                  No hidden fees, no surprises. Experience transparent pricing and exceptional service 
                  for your private jet charter needs.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get Your Quote <ArrowRight className="w-4 h-4" />
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

export default PrivateJetCostBreakdown;
