import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink, Star, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const affiliates = [
  {
    name: "Air Acer",
    url: "https://airacer.com/",
    description: "Luxury private jet solutions for business and leisure travel",
    category: "Business Aviation",
    rating: "4.9",
    specialties: ["Business Travel", "Leisure Charter", "Custom Solutions"],
    landingPage: "/air-acer"
  },
  {
    name: "Private Jet Finder",
    url: "https://privatejetfinder.com",
    description: "Compare and book private jets from trusted operators worldwide",
    category: "Comparison Platform",
    rating: "4.7",
    specialties: ["Compare Prices", "Trusted Operators", "Best Deals"],
    landingPage: "/private-jet-finder"
  }
];

const Affiliates = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in">
              Our Partners
            </h1>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
              Explore our trusted network of premium private aviation partners
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {affiliates.map((affiliate, index) => (
                <a
                  key={index}
                  href={affiliate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-serif text-2xl group-hover:text-primary transition-colors">
                          {affiliate.name}
                        </h2>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{affiliate.rating}</span>
                        </div>
                      </div>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 text-xs font-medium rounded-full mb-3">
                        {affiliate.category}
                      </span>
                      <p className="text-muted-foreground mb-4">
                        {affiliate.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {affiliate.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        Global Network
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Premium Service
                      </div>
                    </div>
                    <Link
                      to={affiliate.landingPage}
                      className="flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Affiliates;
