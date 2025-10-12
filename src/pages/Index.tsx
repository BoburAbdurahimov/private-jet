import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Partners } from "@/components/Partners";
import { BlogSlider } from "@/components/BlogSlider";
// import { QuoteCalculator } from "@/components/QuoteCalculator";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Managerius - Premium Private Aviation Services"
        description="Experience unparalleled luxury with Managerius' exclusive private jet charter services. Travel in comfort, style, and privacy to destinations worldwide."
        keywords="private jet, charter, aviation, luxury travel, business aviation, private aircraft, jet rental"
      />
      <Navigation />
      <Hero />
      <Partners />
      <Marquee />
      <Services />
      <Fleet />
      <BlogSlider />
      {/* <QuoteCalculator /> */}
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
