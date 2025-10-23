import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Star, Wind, Shield, Plane, Users, CheckCircle, ArrowRight } from "lucide-react";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";
import SEOHead from "@/components/SEOHead";
import ArticleSchema from "@/components/ArticleSchema";
import BlogCTA from "@/components/BlogCTA";
import AdSense from "@/components/AdSense";
import { marked } from 'marked';

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

  // Render HTML content with beautiful card layouts
  const renderContent = (content: string) => {
    // Strip frontmatter (content between --- markers)
    const strippedContent = content.replace(/^---[\s\S]*?---\n\n/, '');
    
    // Parse markdown to HTML
    const htmlContent = marked(strippedContent);
    
    return (
      <div className="space-y-8">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h1:mt-12 prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-card prose-blockquote:border prose-blockquote:border-border prose-blockquote:rounded-lg prose-blockquote:p-6 prose-blockquote:italic prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-muted prose-pre:border-border prose-pre:p-4 prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:mb-3 prose-li:text-lg prose-li:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={post.seoTitle}
        description={post.seoDescription}
        canonical={`https://managerius.com/blog/${post.id}`}
        ogTitle={post.seoTitle}
        ogImage={post.image}
        coverImage={post.image}
      />
      <ArticleSchema 
        title={post.title}
        description={post.seoDescription}
        coverImage={post.image}
        date={post.date}
        canonical={`https://managerius.com/blog/${post.id}`}
      />
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
              {/* Header Section */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  {post.category}
                </div>
                <h1 className="font-serif text-5xl md:text-6xl mb-6">
                  {post.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-12">
                <img 
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content with Enhanced Styling */}
              <div className="space-y-8">
                {renderContent(post.content)}
                
                {/* Google AdSense In-Article Ad */}
                <div className="my-12 p-4 bg-muted/30 rounded-lg border border-border">
                  <AdSense 
                    adSlot="6098666803"
                    adFormat="fluid"
                    adLayout="in-article"
                    style={{display:'block', textAlign:'center'}}
                  />
                </div>
              </div>

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-serif text-xl mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-muted text-muted-foreground px-3 py-1 text-sm rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <BlogCTA />
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicBlogPost;
