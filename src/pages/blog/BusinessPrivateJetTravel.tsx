import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Shield, Users, Plane, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessPrivateJetTravel = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Business Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Business Travel, Upgraded: Why Executives Choose Private Jets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how private aviation transforms business travel—cutting dead time, protecting confidentiality, and ensuring you arrive ready to perform.
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
                <h2 className="font-serif text-3xl mb-6">The Executive Advantage</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  For business leaders, time is the ultimate luxury. Private jets eliminate the inefficiencies of commercial travel, 
                  allowing executives to maximize productivity and maintain peak performance.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Time Optimization</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Transform travel time into productive work time with private jet efficiency.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• No security lines or waiting</li>
                    <li>• Direct flights to any destination</li>
                    <li>• Arrive 15 minutes before departure</li>
                    <li>• Work productively during flight</li>
                    <li>• Land closer to final destination</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Confidentiality & Security</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Protect sensitive business information and maintain complete privacy during travel.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Private business discussions</li>
                    <li>• Secure document handling</li>
                    <li>• No public exposure</li>
                    <li>• Controlled passenger environment</li>
                    <li>• VIP security protocols</li>
                  </ul>
                </div>
              </div>

              {/* Productivity Features */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">In-Flight Productivity</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Meeting Space</h4>
                    <p className="text-sm text-muted-foreground">Conduct confidential meetings with clients and team members</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Plane className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Work Environment</h4>
                    <p className="text-sm text-muted-foreground">Quiet, comfortable space for focused work and calls</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Time Management</h4>
                    <p className="text-sm text-muted-foreground">Arrive refreshed and ready for important meetings</p>
                  </div>
                </div>
              </div>

              {/* Business Scenarios */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Client Meetings</h3>
                  <p className="text-muted-foreground mb-4">
                    Impress clients and partners with seamless travel experiences that reflect your company's standards.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Arrive on time, every time</li>
                    <li>• Conduct pre-meeting briefings</li>
                    <li>• Maintain professional image</li>
                    <li>• Handle sensitive documents securely</li>
                    <li>• Provide exceptional client experience</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Team Travel</h3>
                  <p className="text-muted-foreground mb-4">
                    Travel with your executive team while maintaining productivity and team cohesion.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Strategic planning sessions</li>
                    <li>• Team building opportunities</li>
                    <li>• Confidential discussions</li>
                    <li>• Bonding and relationship building</li>
                    <li>• Coordinated arrival and departure</li>
                  </ul>
                </div>
              </div>

              {/* Cost-Benefit Analysis */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">ROI of Private Business Travel</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Time Savings</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 3-5 hours saved per trip</li>
                      <li>• Direct flights vs. connections</li>
                      <li>• No airport waiting time</li>
                      <li>• Closer arrival airports</li>
                      <li>• Immediate departure capability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Productivity Gains</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Work during travel time</li>
                      <li>• Arrive refreshed and ready</li>
                      <li>• Maintain business continuity</li>
                      <li>• Handle urgent matters in-flight</li>
                      <li>• Maximize meeting effectiveness</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Business Travel Tips */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Planning Best Practices</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Book flights well in advance for best pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Coordinate with ground transportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Prepare meeting materials in advance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Consider jet cards for frequent travel</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl mb-4">Executive Considerations</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Maintain professional appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Respect crew and other passengers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Keep business discussions confidential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Plan for potential schedule changes</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Elevate Your Business Travel</h3>
                <p className="text-muted-foreground mb-6">
                  Experience the executive advantage with JetLuxe's transparent pricing and exceptional service. 
                  Transform your business travel into a competitive advantage.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Your Business Flight <ArrowRight className="w-4 h-4" />
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

export default BusinessPrivateJetTravel;
