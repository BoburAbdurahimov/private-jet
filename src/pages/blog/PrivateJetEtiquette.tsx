import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateJetEtiquette = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full">
                  Travel Tips
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 12, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                The Art of Private Jet Etiquette
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Essential guidelines for first-time private jet travelers and seasoned flyers alike.
              </p>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=450&fit=crop&crop=center" 
                  alt="Private jet etiquette"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  Private jet travel represents the pinnacle of luxury and convenience, but it also comes with its own set of unwritten rules and expectations. Whether you're a first-time private jet traveler or a seasoned flyer, understanding proper etiquette ensures a smooth and enjoyable experience for everyone on board.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Arrival and Boarding</h2>
                
                <p>
                  Arrive on time but not too early. Unlike commercial flights, private jets operate on your schedule, but being punctual shows respect for the crew and other passengers. Most private terminals allow you to arrive just 15-30 minutes before departure.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Dress Code</h3>
                
                <p>
                  While there's no strict dress code, smart casual is generally appropriate. Business attire is expected for corporate flights, while resort casual works well for leisure travel. Always consider the destination and occasion when choosing your outfit.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Luggage Considerations</h3>
                
                <p>
                  Private jets have generous baggage allowances, but space is still premium. Pack efficiently and consider that luggage may need to be stored in various compartments. Avoid oversized items unless specifically arranged beforehand.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">In-Flight Etiquette</h2>
                
                <p>
                  Once on board, respect the crew's instructions and the aircraft's systems. Keep your seatbelt fastened when instructed, and be mindful of electronic device usage during takeoff and landing. The crew is there to ensure your safety and comfort.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Social Interaction</h3>
                
                <p>
                  Private jets often bring together business associates, friends, or family. Be respectful of others' space and time. If traveling with business contacts, maintain appropriate professional boundaries while enjoying the relaxed atmosphere.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Dining and Beverages</h2>
                
                <p>
                  Most private jets offer catering services with a wide range of options. Place your order in advance when possible. Be considerate with alcohol consumption, especially on business flights. The crew will ensure your preferences are met while maintaining a professional atmosphere.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Departure and Gratuity</h2>
                
                <p>
                  Upon arrival, gather your belongings promptly and thank the crew. While gratuities aren't mandatory, they're appreciated for exceptional service. Standard practice is $50-100 per crew member for flights over 2 hours.
                </p>

                <p>
                  Remember, private jet travel is about comfort, convenience, and efficiency. Following these guidelines ensures that everyone enjoys the premium experience that private aviation provides.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Travel Tips</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Etiquette</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">First Time</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Luxury Travel</span>
              </div>
            </div>

            {/* Share Section */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
              <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivateJetEtiquette;
