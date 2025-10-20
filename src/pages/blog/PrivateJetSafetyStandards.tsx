import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Shield, CheckCircle, AlertTriangle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetSafetyStandards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Safety Guide
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">
                Private Jet Safety Standards: What Really Matters
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Safety first: Learn about the certifications, audits, and standards that ensure your private jet flight is as safe as possible.
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
                <h2 className="font-serif text-3xl mb-6">Safety: The Foundation of Private Aviation</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Private aviation maintains some of the highest safety standards in the industry. Understanding these standards 
                  helps you make informed decisions and fly with confidence.
                </p>
              </div>

              {/* Key Safety Certifications */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Operator Certifications</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    All legitimate private jet operators must maintain specific certifications and undergo regular audits.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Part 135 certification (US operators)</li>
                    <li>• EASA certification (European operators)</li>
                    <li>• IS-BAO safety standards</li>
                    <li>• ARGUS safety ratings</li>
                    <li>• Wyvern safety audits</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Crew Qualifications</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Private jet crews undergo rigorous training and must meet strict experience requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Minimum flight hours requirements</li>
                    <li>• Type-specific training</li>
                    <li>• Regular proficiency checks</li>
                    <li>• Medical certifications</li>
                    <li>• Recurrent training programs</li>
                  </ul>
                </div>
              </div>

              {/* Safety Audits */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Third-Party Safety Audits</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">ARGUS</h4>
                    <p className="text-sm text-muted-foreground mb-2">Platinum, Gold, Silver ratings</p>
                    <p className="text-sm text-muted-foreground">Comprehensive safety evaluations</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">Wyvern</h4>
                    <p className="text-sm text-muted-foreground mb-2">Safety audits and ratings</p>
                    <p className="text-sm text-muted-foreground">Operator safety assessments</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h4 className="font-semibold mb-2">IS-BAO</h4>
                    <p className="text-sm text-muted-foreground mb-2">International standards</p>
                    <p className="text-sm text-muted-foreground">Global safety protocols</p>
                  </div>
                </div>
              </div>

              {/* Questions to Ask */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Questions to Ask</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li>• What safety certifications do you hold?</li>
                    <li>• What is your ARGUS or Wyvern rating?</li>
                    <li>• How many hours do your pilots have?</li>
                    <li>• What is your safety record?</li>
                    <li>• Do you have insurance coverage?</li>
                    <li>• What maintenance standards do you follow?</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl">Red Flags to Avoid</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li>• Unwilling to provide safety documentation</li>
                    <li>• No third-party safety ratings</li>
                    <li>• Unclear pilot qualifications</li>
                    <li>• No insurance verification</li>
                    <li>• Pressure to book without details</li>
                    <li>• Unusually low pricing without explanation</li>
                  </ul>
                </div>
              </div>

              {/* Maintenance Standards */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Aircraft Maintenance Standards</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Regular Inspections</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Daily pre-flight inspections</li>
                      <li>• Scheduled maintenance programs</li>
                      <li>• Annual comprehensive inspections</li>
                      <li>• Engine overhaul schedules</li>
                      <li>• Avionics system checks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Documentation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Complete maintenance logs</li>
                      <li>• Pilot training records</li>
                      <li>• Safety audit reports</li>
                      <li>• Insurance certificates</li>
                      <li>• Regulatory compliance records</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Safety Statistics */}
              <div className="bg-card border border-border rounded-lg p-8 mb-12">
                <h3 className="font-serif text-2xl mb-6">Private Aviation Safety Record</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                    <p className="text-sm text-muted-foreground">On-time safety record</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Safety monitoring</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Certified operators</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl mb-4">Fly with Certified Safety Standards</h3>
                <p className="text-muted-foreground mb-6">
                  Choose JetLuxe for transparent pricing and operators that meet the highest safety standards. 
                  Your safety is our priority.
                </p>
                <a
                  href="https://valens.jetluxe.com/affiliate/managerius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book with Confidence <ArrowRight className="w-4 h-4" />
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

export default PrivateJetSafetyStandards;
