import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search, Phone, CreditCard, Plane, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowToCharterPrivateJet = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Plane className="w-4 h-4" />
                Charter Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                How to Charter a Private Jet: Step-by-Step Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive, no-nonsense guide to booking your first private jet charter—from initial inquiry to wheels-up.
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
                <h2 className="font-serif text-3xl mb-6">The Complete Charter Process</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Chartering a private jet doesn't have to be complicated. Follow this step-by-step process 
                  to ensure a smooth booking experience and successful flight.
                </p>
              </div>

              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="font-serif text-2xl">Define Your Requirements</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Start by clearly defining your travel needs to get accurate quotes and recommendations.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Departure and arrival airports</li>
                    <li>• Travel dates and preferred times</li>
                    <li>• Number of passengers</li>
                    <li>• Special requirements (pets, cargo, etc.)</li>
                    <li>• Budget considerations</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="font-serif text-2xl">Research & Compare Options</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Use comparison platforms or work with brokers to find the best aircraft and pricing for your route.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Compare multiple operators</li>
                    <li>• Check aircraft availability</li>
                    <li>• Review safety certifications</li>
                    <li>• Compare pricing structures</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="font-serif text-2xl">Request Quotes</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Contact operators or brokers with your requirements to receive detailed quotes and proposals.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide detailed specifications</li>
                    <li>• Request all-inclusive pricing</li>
                    <li>• Ask about additional fees</li>
                    <li>• Clarify cancellation policies</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h3 className="font-serif text-2xl">Review & Negotiate</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Carefully review all proposals, compare terms, and negotiate the best deal for your needs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Compare total costs</li>
                    <li>• Review contract terms</li>
                    <li>• Negotiate pricing if appropriate</li>
                    <li>• Confirm all inclusions</li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <h3 className="font-serif text-2xl">Book & Pay</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Once you've selected your preferred option, complete the booking process and secure payment.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Sign charter agreement</li>
                    <li>• Make required deposits</li>
                    <li>• Provide passenger details</li>
                    <li>• Confirm payment methods</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      6
                    </div>
                    <h3 className="font-serif text-2xl">Pre-Flight Preparation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Complete final preparations including passenger manifests, special requests, and travel documents.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Submit passenger manifests</li>
                    <li>• Arrange ground transportation</li>
                    <li>• Confirm special requests</li>
                    <li>• Review travel documents</li>
                  </ul>
                </div>
              </div>

              {/* Aircraft Types */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Understanding Aircraft Types</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Light Jets</h4>
                    <p className="text-sm text-muted-foreground mb-2">2-6 passengers</p>
                    <p className="text-sm text-muted-foreground">Best for short trips, cost-effective</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Midsize Jets</h4>
                    <p className="text-sm text-muted-foreground mb-2">6-8 passengers</p>
                    <p className="text-sm text-muted-foreground">Balanced range and comfort</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Heavy Jets</h4>
                    <p className="text-sm text-muted-foreground mb-2">8-12 passengers</p>
                    <p className="text-sm text-muted-foreground">Long-range, maximum comfort</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Ready to Book Your First Charter?</h3>
                <p className="text-muted-foreground mb-6">
                  Experience transparent pricing and exceptional service with JetLuxe. 
                  Get started with your private jet charter today.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Start Your Charter <ArrowRight className="w-4 h-4" />
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

export default HowToCharterPrivateJet;
