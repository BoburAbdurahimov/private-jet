import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessAviationTrends = () => {
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
                  Business
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 15, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    7 min read
                  </div>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6">
                Business Aviation Trends: What Executives Need to Know
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                How private aviation is evolving to meet the demands of modern business travel and productivity in an increasingly connected world.
              </p>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop&crop=center" 
                  alt="Business aviation trends"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p>
                  The business aviation landscape is experiencing unprecedented transformation as executives demand more efficient, flexible, and productive travel solutions. The traditional model of commercial air travel is being challenged by innovative private aviation services that prioritize time, comfort, and productivity.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Productivity Revolution</h2>
                
                <p>
                  Modern business aviation is fundamentally changing how executives think about travel time. What was once lost time is now productive time, with aircraft interiors designed specifically for business efficiency. High-speed internet, conference facilities, and quiet workspaces enable seamless productivity at 40,000 feet.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Flexible Scheduling and On-Demand Services</h3>
                
                <p>
                  The rise of on-demand private aviation services has eliminated the rigid schedules of commercial airlines. Executives can now depart and arrive on their own terms, maximizing both personal and professional efficiency. This flexibility is particularly valuable for time-sensitive business opportunities and emergency situations.
                </p>

                <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Technology Integration</h3>
                
                <p>
                  Business aircraft are becoming flying offices, equipped with the latest communication technology, video conferencing capabilities, and secure data networks. This technological integration ensures that business operations continue seamlessly regardless of location.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Cost-Effective Solutions</h2>
                
                <p>
                  While private aviation has traditionally been associated with high costs, new business models are making it more accessible. Fractional ownership, jet cards, and shared flights are providing cost-effective alternatives that deliver the benefits of private aviation without the full ownership commitment.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Sustainability and Corporate Responsibility</h2>
                
                <p>
                  Modern business aviation is also addressing environmental concerns through sustainable fuel options, carbon offset programs, and more efficient aircraft designs. Companies are increasingly viewing private aviation as part of their corporate responsibility strategy, balancing efficiency needs with environmental stewardship.
                </p>

                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Future Outlook</h2>
                
                <p>
                  Looking ahead, we can expect to see continued innovation in business aviation, with developments in electric and hybrid aircraft, enhanced connectivity, and even more personalized service offerings. The industry is evolving to meet the changing needs of modern business leaders who value time, efficiency, and flexibility above all else.
                </p>
              </div>
            </article>

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 pt-8 border-t border-border">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Business Travel</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Productivity</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Executive Travel</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Technology</span>
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

export default BusinessAviationTrends;
