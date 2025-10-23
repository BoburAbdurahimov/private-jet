import { Suspense, lazy } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import AdSense from "@/components/AdSense";
const Marquee = lazy(() => import("@/components/Marquee").then(m => ({ default: m.Marquee })));
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Fleet = lazy(() => import("@/components/Fleet").then(m => ({ default: m.Fleet })));
const Partners = lazy(() => import("@/components/Partners").then(m => ({ default: m.Partners })));
// const BlogSlider = lazy(() => import("@/components/BlogSlider").then(m => ({ default: m.BlogSlider })));
// const QuoteCalculator = lazy(() => import("@/components/QuoteCalculator").then(m => ({ default: m.QuoteCalculator })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Private Jet Charter Services | Luxury Aviation | Managerius"
        description="Premium private jet charter services for luxury travel and business aviation. Experience unparalleled comfort and privacy with our exclusive fleet of private aircraft."
        canonical="https://managerius.com/"
        keywords="private jet charter, luxury aviation, business aviation, private aircraft, jet rental, premium travel"
      />
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="py-20" />}> 
        <Partners />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Marquee />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Fleet />
      </Suspense>
      {/* Google AdSense Ad */}
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <AdSense 
          adSlot="2678296543"
          adFormat="auto"
          fullWidthResponsive={true}
        />
      </div>
      {/* <Suspense fallback={<div className="py-12" />}>
        <BlogSlider />
      </Suspense> */}
      {/* <Suspense fallback={<div className="py-12" />}>
        <QuoteCalculator />
      </Suspense> */}
      <Suspense fallback={<div className="py-12" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
