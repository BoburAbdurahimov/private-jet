import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";

const DynamicBlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      const blogPost = BlogDataManager.getBlogPost(id);
      if (blogPost && blogPost.published) {
        setPost(blogPost);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-6 bg-muted rounded w-32 mb-8"></div>
                <div className="h-16 bg-muted rounded mb-6"></div>
                <div className="h-6 bg-muted rounded mb-8 w-1/2"></div>
                <div className="aspect-video bg-muted rounded-lg mb-8"></div>
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-4 bg-muted rounded"></div>
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

  if (notFound || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Render HTML content safely
  const renderContent = (content: string) => {
    return (
      <div 
        className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-code:bg-muted prose-code:text-foreground prose-pre:bg-muted prose-pre:border-border"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <article className="prose prose-lg max-w-none">
              <div className="mb-8">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-lg text-muted-foreground leading-relaxed">
                {renderContent(post.content)}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicBlogPost;
