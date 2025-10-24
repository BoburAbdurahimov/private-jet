import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { ManageriusIcon } from "./ManageriusIcon";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "sustainable-private-aviation",
    title: "The Future of Sustainable Private Aviation",
    excerpt: "Exploring eco-friendly innovations in private jet technology and carbon-neutral flight solutions.",
    date: "March 20, 2025",
    readTime: "8 min read",
    image: "/assets/jet-interior.jpg",
    category: "Innovation"
  },
  {
    id: "luxury-jet-interiors",
    title: "Luxury Redefined: The Most Exclusive Private Jet Interiors",
    excerpt: "Take a look inside the world's most opulent private aircraft with custom-designed luxury amenities.",
    date: "March 18, 2025",
    readTime: "6 min read",
    image: "/assets/jet-interior.jpg",
    category: "Luxury"
  },
  {
    id: "business-aviation-trends",
    title: "Business Aviation Trends: What Executives Need to Know",
    excerpt: "How private aviation is evolving to meet the demands of modern business travel and productivity.",
    date: "March 15, 2025",
    readTime: "7 min read",
    image: "/assets/jet-interior.jpg",
    category: "Business"
  },
  {
    id: "private-jet-etiquette",
    title: "The Art of Private Jet Etiquette",
    excerpt: "Essential guidelines for first-time private jet travelers and seasoned flyers alike.",
    date: "March 12, 2025",
    readTime: "5 min read",
    image: "/assets/jet-engine.jpg",
    category: "Travel Tips"
  },
  {
    id: "global-hotspots-2024",
    title: "Global Hotspots: Where the Elite Are Flying in 2024",
    excerpt: "Discover the trending destinations that are attracting private jet travelers this year.",
    date: "March 10, 2025",
    readTime: "9 min read",
    image: "/assets/jet-interior.jpg",
    category: "Destinations"
  },
  {
    id: "private-jet-safety",
    title: "Behind the Scenes: Private Jet Operations and Safety",
    excerpt: "An insider look at the rigorous safety standards and operational excellence in private aviation.",
    date: "March 8, 2025",
    readTime: "6 min read",
    image: "/assets/jet-engine.jpg",
    category: "Safety"
  }
];

export const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const postsPerView = 3;
  const maxIndex = blogPosts.length - postsPerView;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextPost = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevPost = () => {
    setCurrentIndex((prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    ));
    setIsAutoPlaying(false);
  };

  const goToPost = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="blog" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ManageriusIcon className="w-4 h-4" />
              Latest Insights
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Expert Perspectives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest trends, insights, and expert advice in private aviation and luxury travel.
            </p>
          </div>

          <div className="relative">
            {/* Blog Posts Grid */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / postsPerView)}%)` }}
              >
                {blogPosts.map((post, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <Card className="group border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          width={400}
                          height={225}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm" className="w-full hover:border-primary hover:text-primary transition-colors">
                            Read Article
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPost}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPost(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextPost}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* View All Blog Posts Button */}
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
