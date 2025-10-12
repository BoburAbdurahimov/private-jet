import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "sustainable-private-aviation",
    title: "The Future of Sustainable Private Aviation",
    excerpt: "Exploring eco-friendly innovations in private jet technology and carbon-neutral flight solutions.",
    date: "March 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center",
    category: "Innovation"
  },
  {
    id: "luxury-jet-interiors",
    title: "Luxury Redefined: The Most Exclusive Private Jet Interiors",
    excerpt: "Take a look inside the world's most opulent private aircraft with custom-designed luxury amenities.",
    date: "March 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop&crop=center",
    category: "Luxury"
  },
  {
    id: "business-aviation-trends",
    title: "Business Aviation Trends: What Executives Need to Know",
    excerpt: "How private aviation is evolving to meet the demands of modern business travel and productivity.",
    date: "March 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop&crop=center",
    category: "Business"
  },
  {
    id: "private-jet-etiquette",
    title: "The Art of Private Jet Etiquette",
    excerpt: "Essential guidelines for first-time private jet travelers and seasoned flyers alike.",
    date: "March 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=450&fit=crop&crop=center",
    category: "Travel Tips"
  },
  {
    id: "global-hotspots-2024",
    title: "Global Hotspots: Where the Elite Are Flying in 2024",
    excerpt: "Discover the trending destinations that are attracting private jet travelers this year.",
    date: "March 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=center",
    category: "Destinations"
  },
  {
    id: "private-jet-safety",
    title: "Behind the Scenes: Private Jet Operations and Safety",
    excerpt: "An insider look at the rigorous safety standards and operational excellence in private aviation.",
    date: "March 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=450&fit=crop&crop=center",
    category: "Safety"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in">
              Latest Insights
            </h1>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
              Expert perspectives on private aviation and luxury travel
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.id}`}
                  className="group block border border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-muted overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="group-hover:text-primary transition-colors text-sm font-medium">
                          Read More →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
