import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Shield, Lock, Eye, Users, Database } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Privacy Policy - Managerius"
        description="Learn how Managerius collects, uses, and protects your personal information."
        canonical="https://managerius.com/privacy-policy"
      />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </div>
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how Managerius collects, uses, and protects your information.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us and information we collect automatically when you use our services.
                </p>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Travel preferences and requirements</li>
                      <li>Payment information (processed securely by third parties)</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Usage Information</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Website usage patterns and preferences</li>
                      <li>Device information and browser type</li>
                      <li>IP address and location data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Process and fulfill your travel requests</li>
                  <li>Communicate with you about your bookings</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our website and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Information Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data centers and infrastructure</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> With trusted partners who assist in providing our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                  <li><strong>Consent:</strong> When you have given explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. 
                  When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate 
                  safeguards are in place to protect your information in accordance with this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
                  the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Privacy Officer:</strong> hello@managerius.com<br />
                    <strong>Phone:</strong> +19295674215<br />
                    <strong>Address:</strong> 63 N. Burritt Ave Room 100 East Buffalo, WY 82834 United States
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
