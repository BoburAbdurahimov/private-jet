import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalHotspots2024 = () => {
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
                  Destinations
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 10, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    9 min read
                  </div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Global Hotspots: Where the Elite Are Flying in 2024
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Discover the trending destinations that are attracting private jet travelers this year.
              </p>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=center" 
                  alt="Global destinations for private jet travel"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  As private aviation continues to evolve, so do the destinations that attract the world's most discerning travelers. From emerging luxury hotspots to revived classic destinations, 2024 presents an exciting landscape of global destinations perfect for private jet access.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">European Renaissance</h2>
                
                <p>
                  Europe continues to be a favorite among private jet travelers, with several destinations experiencing renewed popularity. The French Riviera remains the gold standard, while emerging destinations like Montenegro's Adriatic coast and Iceland's luxury retreats are gaining traction.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Sardinia, Italy</h3>
                
                <p>
                  This Mediterranean gem has become the new playground for the ultra-wealthy. With pristine beaches, world-class golf courses, and exclusive resorts like Costa Smeralda, Sardinia offers the perfect blend of natural beauty and luxury amenities.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Courchevel, France</h3>
                
                <p>
                  Beyond its winter appeal, Courchevel has developed into a year-round luxury destination. Summer brings hiking, golf, and wellness retreats, while the exclusive chalets and restaurants maintain their world-class standards throughout the seasons.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Caribbean Excellence</h2>
                
                <p>
                  The Caribbean remains a perennial favorite, with private islands and exclusive resorts continuing to set the standard for tropical luxury. New developments in the Bahamas and Turks & Caicos are particularly noteworthy this year.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Mustique, St. Vincent</h3>
                
                <p>
                  This exclusive island continues to attract celebrities and business leaders seeking ultimate privacy. With limited accommodations and strict access controls, Mustique offers an unparalleled sense of exclusivity in the Caribbean.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Asian Luxury Markets</h2>
                
                <p>
                  Asia's luxury travel market continues to expand, with destinations like the Maldives, Bhutan, and emerging hotspots in Vietnam and Cambodia attracting private jet travelers seeking authentic experiences combined with luxury accommodations.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Maldives Private Islands</h3>
                
                <p>
                  The trend toward private island resorts in the Maldives continues to grow, with new ultra-luxury properties offering complete privacy and personalized service. These destinations are perfect for multi-generational family trips or exclusive corporate retreats.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">African Safari Renaissance</h2>
                
                <p>
                  Luxury safari experiences in Africa are experiencing a renaissance, with new camps and lodges offering unprecedented levels of comfort and service. Countries like Rwanda, Botswana, and South Africa are leading this luxury safari revolution.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Future of Private Jet Destinations</h2>
                
                <p>
                  Looking ahead, we can expect to see continued growth in eco-luxury destinations, wellness retreats, and cultural immersion experiences. The emphasis is shifting toward authentic, meaningful travel that combines luxury with purpose and sustainability.
                </p>

                <p>
                  These destinations represent just a glimpse into the world of private jet travel in 2024. The common thread is a commitment to exceptional service, unique experiences, and the kind of exclusivity that only private aviation can provide.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Destinations</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Luxury Travel</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Global</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Trends</span>
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

export default GlobalHotspots2024;
