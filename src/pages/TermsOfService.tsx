import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { FileText, Scale, AlertTriangle, Shield } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Terms of Service - Managerius"
        description="Read the terms and conditions for using Managerius private aviation services."
        canonical="https://managerius.com/terms-of-service"
      />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Terms of Service
              </div>
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These terms govern your use of Managerius private aviation services and website.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Managerius services, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Service Description
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Managerius provides private aviation services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Private jet charter services</li>
                  <li>Business aviation solutions</li>
                  <li>Leisure travel arrangements</li>
                  <li>Concierge services</li>
                  <li>Flight coordination and support</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the rights and privacy of other users</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Pay all fees and charges in a timely manner</li>
                  <li>Follow all safety instructions and guidelines</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Booking and Cancellation Policy
                </h2>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Booking Requirements</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Valid identification required for all passengers</li>
                      <li>Advance booking recommended (minimum 24-48 hours)</li>
                      <li>Payment terms vary by service type</li>
                      <li>Special requirements must be communicated in advance</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Cancellation Policy</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Cancellations within 24 hours may incur charges</li>
                      <li>Weather-related cancellations are handled case-by-case</li>
                      <li>Refund processing takes 5-10 business days</li>
                      <li>Force majeure events may affect cancellation terms</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms and conditions:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>All prices are quoted in USD unless otherwise specified</li>
                  <li>Payment methods accepted: credit cards, wire transfers, corporate accounts</li>
                  <li>Additional fees may apply for special services or requirements</li>
                  <li>Disputed charges must be reported within 30 days</li>
                  <li>Late payment fees may apply to overdue accounts</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Managerius provides services through third-party operators. While we strive to ensure the highest quality 
                  service, our liability is limited to the cost of the services provided. We are not responsible for delays, 
                  cancellations, or other issues beyond our direct control.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on the Managerius website, including text, graphics, logos, and software, is the property of 
                  Managerius and is protected by copyright and other intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without written permission.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Privacy and Data Protection
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, 
                  and protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these terms or our services will be resolved through binding arbitration 
                  in accordance with the rules of the American Arbitration Association. The arbitration will be conducted 
                  in Los Angeles, California.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Modifications to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Managerius reserves the right to modify these terms at any time. Changes will be posted on this page 
                  with an updated revision date. Continued use of our services after changes constitutes acceptance of 
                  the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Legal Department:</strong> hello@managerius.com<br />
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

export default TermsOfService;
