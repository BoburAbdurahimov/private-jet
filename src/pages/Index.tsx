import { Suspense, lazy } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
const Marquee = lazy(() => import("@/components/Marquee"));
const Services = lazy(() => import("@/components/Services"));
const Fleet = lazy(() => import("@/components/Fleet"));
const Partners = lazy(() => import("@/components/Partners"));
const BlogSlider = lazy(() => import("@/components/BlogSlider"));
// const QuoteCalculator = lazy(() => import("@/components/QuoteCalculator"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
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
      <Suspense fallback={<div className="py-12" />}>
        <BlogSlider />
      </Suspense>
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
