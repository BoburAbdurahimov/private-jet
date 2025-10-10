import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Shield, Cookie, Settings, Eye } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cookie Policy - Managerius"
        description="Learn about how Managerius uses cookies and similar technologies to enhance your browsing experience."
        keywords="cookie policy, privacy, data protection, Managerius"
      />
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cookie className="w-4 h-4" />
                Cookie Policy
              </div>
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Cookie Policy
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This Cookie Policy explains how Managerius uses cookies and similar technologies when you visit our website.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: December 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  What Are Cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and enabling certain 
                  functionality on our site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies are necessary for the website to function properly. They cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Authentication and security cookies</li>
                      <li>Session management cookies</li>
                      <li>Load balancing cookies</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Google Analytics cookies</li>
                      <li>Page load time tracking</li>
                      <li>User behavior analysis</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies enable enhanced functionality and personalization.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Language preferences</li>
                      <li>Theme settings (dark/light mode)</li>
                      <li>Form data retention</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  How to Manage Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them. Check your browser's help section for instructions.</li>
                  <li><strong>Opt-out Tools:</strong> You can opt out of analytics cookies using tools like Google Analytics Opt-out Browser Add-on.</li>
                  <li><strong>Cookie Consent:</strong> When you first visit our site, you can choose which types of cookies to accept.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites and services that set their own cookies. 
                  We do not control these cookies and recommend reviewing the privacy policies of these third parties.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with 
                  an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Cookie Policy, please contact us at:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>Email:</strong> hello@managerius.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> Los Angeles, California
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

export default CookiePolicy;
