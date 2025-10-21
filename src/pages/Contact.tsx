import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact Private Jet Charter | Book Your Flight | Managerius"
        description="Contact our private jet charter experts for luxury aviation services. Book your private flight with personalized service and premium aircraft."
        canonical="https://managerius.com/contact"
      />
      <Navigation />
      <main className="pt-32 pb-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
