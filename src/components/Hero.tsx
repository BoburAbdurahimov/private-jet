import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyImage } from "./LazyImage";
import { ManageriusIcon } from "./ManageriusIcon";
import heroJet from "@/assets/hero-jet.jpg";

export const Hero = () => {
  // Temporarily disabled speed insights
  const trackEvent = (event: string, properties?: Record<string, any>) => {};
  const trackPageView = () => {};

  const handleCTAClick = () => {
    trackEvent('cta_click', {
      button: 'book-flight',
      location: 'hero',
      page: 'homepage'
    });
  };

  const handleVideoClick = () => {
    trackEvent('video_play', {
      video: 'hero-video',
      location: 'hero'
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroJet}
          alt="Luxury private jet"
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          onError={(e) => {
            console.log('Image failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center pt-20">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-white/80">Trusted by 500+ Elite Travelers</span>
        </div>
        
        <ManageriusIcon className="w-8 h-8 mx-auto mb-8 text-white animate-float" />
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in leading-tight text-white">
          Meet us in the clouds.
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in">
          Experience unparalleled luxury with our exclusive private jet charter service.
          Travel in comfort, style, and privacy to destinations worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <a href="https://valens.jetluxe.com/affiliate/managerius" className="cta-track" onClick={handleCTAClick}>
            <Button variant="hero" size="hero" className="group">
              Book Your Flight
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          {/* <Button variant="outline" size="hero" className="group">
            <Play className="w-4 h-4 mr-2" />
            Watch Our Story
          </Button> */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">5,000+</div>
            <p className="text-sm text-white/70">Airports Worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
            <p className="text-sm text-white/70">Concierge Service</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.8%</div>
            <p className="text-sm text-white/70">On-Time Performance</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">2hr</div>
            <p className="text-sm text-white/70">Average Response</p>
          </div>
        </div>
      </div>
    </section>
  );
};
