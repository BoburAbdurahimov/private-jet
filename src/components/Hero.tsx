import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyImage } from "./LazyImage";
import { ManageriusIcon } from "./ManageriusIcon";
import { useSpeedInsights, SpeedInsightsEvents } from "@/hooks/useSpeedInsights";
import heroJet from "@/assets/hero-jet.jpg";

export const Hero = () => {
  const { trackEvent, trackPageView } = useSpeedInsights();

  const handleCTAClick = () => {
    trackEvent(SpeedInsightsEvents.BUSINESS.CTA_CLICK, {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LazyImage 
          src={heroJet} 
          alt="Luxury private jet" 
          className="w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center pt-20">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-muted-foreground">Trusted by 500+ Elite Travelers</span>
        </div>
        
        <ManageriusIcon className="w-8 h-8 mx-auto mb-8 text-accent animate-float" />
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in leading-tight">
          Meet us in the clouds.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
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
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5,000+</div>
            <p className="text-sm text-muted-foreground">Airports Worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
            <p className="text-sm text-muted-foreground">Concierge Service</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99.8%</div>
            <p className="text-sm text-muted-foreground">On-Time Performance</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">2hr</div>
            <p className="text-sm text-muted-foreground">Average Response</p>
          </div>
        </div>
      </div>
    </section>
  );
};
