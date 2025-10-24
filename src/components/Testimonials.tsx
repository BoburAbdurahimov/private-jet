import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ManageriusIcon } from "./ManageriusIcon";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, Tech Innovations",
    location: "San Francisco, CA",
    content: "Elysium Jets has completely transformed how we do business travel. The efficiency and luxury they provide is unmatched. Our team can now attend meetings across the globe without the stress of commercial airlines.",
    rating: 5,
    avatar: "/assets/placeholder-avatar.svg",
    trip: "San Francisco to Tokyo"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Investment Banker",
    location: "New York, NY",
    content: "The level of service is extraordinary. From the moment I book until I land, every detail is handled perfectly. The crew is professional, the aircraft immaculate, and the experience is worth every penny.",
    rating: 5,
    avatar: "/assets/placeholder-avatar.svg",
    trip: "New York to London"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Luxury Travel Consultant",
    location: "Monaco",
    content: "As someone in the luxury travel industry, I have high standards. Elysium Jets exceeds them consistently. Their attention to detail and commitment to excellence is what sets them apart.",
    rating: 5,
    avatar: "/assets/placeholder-avatar.svg",
    trip: "Monaco to Dubai"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Film Producer",
    location: "Los Angeles, CA",
    content: "For our film productions, time is everything. Elysium Jets gets us where we need to be, when we need to be there, in complete comfort. It's become an essential part of our operations.",
    rating: 5,
    avatar: "/assets/placeholder-avatar.svg",
    trip: "Los Angeles to Vancouver"
  },
  {
    id: 5,
    name: "Isabella Martinez",
    role: "Art Collector",
    location: "Madrid, Spain",
    content: "The privacy and security Elysium Jets provides is invaluable when transporting valuable artwork. Their discretion and professionalism give me complete peace of mind.",
    rating: 5,
    avatar: "/assets/placeholder-avatar.svg",
    trip: "Madrid to New York"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Private Equity Partner",
    location: "London, UK",
    content: "The convenience of private aviation has revolutionized our business operations. We can now conduct multiple meetings across continents in a single day. Elysium Jets makes the impossible possible.",
    rating: 5,
    avatar: "/assets/placeholder-avatar.svg",
    trip: "London to Singapore"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    ));
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ManageriusIcon className="w-4 h-4" />
              Client Stories
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why discerning travelers choose Managerius for their most important journeys.
            </p>
          </div>

          <div className="relative">
            <Card className="border-border bg-card overflow-hidden">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                        <AvatarFallback>
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-primary">Recent Trip</p>
                      <p className="text-muted-foreground">{testimonials[currentIndex].trip}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Quote className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground font-medium">Trusted by industry leaders worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
                <p className="text-muted-foreground">Successful Flights</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <p className="text-muted-foreground">On-Time Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
