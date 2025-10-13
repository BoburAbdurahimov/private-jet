import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Award, Globe, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ManageriusIcon } from "./ManageriusIcon";

const partners = [
  {
    id: "jet-luxe",
    name: "Jet Luxe",
    description: "Premium private aviation with transparent pricing and exceptional service.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 5.0,
    features: ["Transparent Pricing", "Luxury Service", "Premium Fleet"],
    link: "/jet-luxe"
  },
  {
    id: "villiers-jets",
    name: "Villiers Jets",
    description: "Global private jet charter with access to 10,000+ aircraft worldwide.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    features: ["Global Network", "24/7 Service", "Instant Quotes"],
    link: "/villiers-jets"
  },
  {
    id: "fast-private-jet",
    name: "Fast Private Jet",
    description: "Quick quotes and instant booking for private jet charters worldwide.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    features: ["Quick Quotes", "Instant Booking", "Global Coverage"],
    link: "/fast-private-jet"
  },
  {
    id: "private-jet-finder",
    name: "Private Jet Finder",
    description: "Compare and book from trusted private jet operators worldwide.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    features: ["Compare Options", "Trusted Operators", "Best Prices"],
    link: "/private-jet-finder"
  },
  {
    id: "air-acer",
    name: "Air Acer",
    description: "Luxury private aviation with personalized service and premium amenities.",
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    features: ["Personalized Service", "Premium Amenities", "VIP Treatment"],
    link: "/air-acer"
  }
];

export const Partners = () => {
  return (
    <section id="partners" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ManageriusIcon className="w-4 h-4" />
              Trusted Partners
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our Premium Partner Network
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              We've carefully curated partnerships with the world's most trusted private aviation providers. 
              Each partner brings unique expertise and exceptional service to ensure your journey exceeds expectations.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner) => (
              <Card key={partner.id} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border bg-card">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                      {partner.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{partner.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {partner.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link to={partner.link}>
                        <Button variant="outline" size="sm" className="w-full hover:border-primary hover:text-black transition-colors">
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-border bg-card rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">Global Coverage</h3>
              <p className="text-muted-foreground text-sm">
                Access to private jets and airports worldwide through our extensive partner network
              </p>
            </div>
            <div className="text-center p-6 border border-border bg-card rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">Vetted Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Every partner is carefully selected for their safety record and service excellence
              </p>
            </div>
            <div className="text-center p-6 border border-border bg-card rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Round-the-clock assistance from our team and partner network for any travel needs
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
            <h3 className="font-serif text-2xl mb-4">Ready to Experience Premium Aviation?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our expert team connect you with the perfect partner for your next private jet journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partners">
                <Button variant="hero" size="hero">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button variant="outline" size="hero">
                  View All Partners
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
