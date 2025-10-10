import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const LuxuryJetInteriors = () => {
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
                  Luxury
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 18, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    6 min read
                  </div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Luxury Redefined: The Most Exclusive Private Jet Interiors
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Take a look inside the world's most opulent private aircraft with custom-designed luxury amenities that redefine airborne comfort.
              </p>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&crop=center" 
                  alt="Luxury private jet interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  The world of private aviation has reached new heights of luxury, with interior designers and aircraft manufacturers collaborating to create flying palaces that rival the most exclusive hotels and residences on earth.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Art of Airborne Luxury</h2>
                
                <p>
                  Modern private jet interiors are masterpieces of design and engineering, combining cutting-edge technology with timeless elegance. From hand-stitched leather seating to marble surfaces and gold accents, these aircraft represent the pinnacle of airborne luxury.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Custom Design Elements</h3>
                
                <p>
                  Today's most exclusive private jets feature entirely custom interiors, with every element designed to the owner's specifications. This includes everything from the layout and materials to the entertainment systems and lighting, creating truly unique flying experiences.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Premium Materials and Craftsmanship</h3>
                
                <p>
                  The finest materials from around the world are used in these interiors: Italian leather, French marble, rare woods, and precious metals. Master craftsmen spend months perfecting every detail, ensuring that each surface and fixture meets the highest standards of luxury and durability.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Technology Integration</h2>
                
                <p>
                  Luxury doesn't mean sacrificing functionality. These interiors seamlessly integrate the latest technology, from 4K entertainment systems and high-speed internet to advanced climate control and soundproofing that creates an oasis of tranquility at 40,000 feet.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Future of Luxury Aviation</h2>
                
                <p>
                  As technology advances, we're seeing even more innovative luxury features, including virtual reality entertainment systems, smart glass that can transform from transparent to opaque, and even in-flight spas and gyms. The sky is truly the limit when it comes to airborne luxury.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Luxury</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Interior Design</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Custom Design</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Premium Materials</span>
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

export default LuxuryJetInteriors;
