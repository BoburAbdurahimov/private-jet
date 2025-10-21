import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";
import SEOHead from "@/components/SEOHead";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear and reinitialize blog data to ensure latest posts are loaded
    BlogDataManager.clearAndReinitialize();
    // Load published blog posts
    const publishedPosts = BlogDataManager.getPublishedPosts();
    setBlogPosts(publishedPosts);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <SEOHead 
          title="Private Jet Blog | Aviation Insights | Managerius"
          description="Expert insights on private jet travel, aviation trends, and luxury travel. Discover the latest in private aviation and business travel."
          canonical="https://managerius.com/blog"
        />
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center">
              <div className="animate-pulse">
                <div className="h-16 bg-muted rounded mb-6"></div>
                <div className="h-6 bg-muted rounded mb-12 w-1/2 mx-auto"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border border-border bg-card overflow-hidden">
                      <div className="aspect-video bg-muted"></div>
                      <div className="p-6 space-y-3">
                        <div className="h-6 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Private Jet Blog | Aviation Insights | Managerius"
        description="Expert insights on private jet travel, aviation trends, and luxury travel. Discover the latest in private aviation and business travel."
        canonical="https://managerius.com/blog"
      />
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

            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group block border border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-muted overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        width={400}
                        height={225}
                        loading="lazy"
                        decoding="async"
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
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
