import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  EyeOff,
  Loader2,
  Tag,
  Calendar,
  Search,
  X,
  Plus,
  Clock,
  Target,
  FileText
} from "lucide-react";
import { AdminAuth } from "@/lib/admin-auth";
import { BlogDataManager, BlogPost, parseMarkdownToHtml } from "@/lib/blog-data";

const CATEGORIES = [
  "Innovation",
  "Luxury", 
  "Business",
  "Travel Tips",
  "Destinations",
  "Safety",
  "Technology",
  "Industry News"
];

const AdminBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    tags: [] as string[],
    published: false,
    scheduled: false,
    scheduledDate: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: [] as string[],
    author: "Managerius Team",
    date: new Date().toISOString().split('T')[0]
  });
  
  const [newTag, setNewTag] = useState("");
  const [newKeyword, setNewKeyword] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Check authentication first
    if (!AdminAuth.isAuthenticated()) {
      navigate("/admin/login");
      return;
    }

    // Load post data if editing
    if (isEdit && id) {
      const post = BlogDataManager.getBlogPost(id);
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          image: post.image,
          category: post.category,
          tags: post.tags || [],
          published: post.published,
          scheduled: post.scheduled || false,
          scheduledDate: post.scheduledDate || "",
          seoTitle: post.seoTitle || "",
          seoDescription: post.seoDescription || "",
          seoKeywords: post.seoKeywords || [],
          author: post.author || "Managerius Team",
          date: post.date
        });
      } else {
        navigate("/admin");
      }
    }
  }, [id, isEdit, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      // Validate required fields
      if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
        setError("Please fill in all required fields");
        setSaving(false);
        return;
      }

      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = formData.content.split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));

      // Parse markdown content to HTML if it contains markdown syntax
      const contentHtml = formData.content.includes('**') || 
                         formData.content.includes('*') || 
                         formData.content.includes('#') || 
                         formData.content.includes('- ') || 
                         formData.content.includes('1. ') ||
                         formData.content.includes('> ') ||
                         formData.content.includes('`') ||
                         formData.content.includes('[')
        ? parseMarkdownToHtml(formData.content)
        : formData.content;

      const postData = {
        ...formData,
        content: contentHtml,
        readTime: `${readTime} min read`
      };

      if (isEdit && id) {
        // Update existing post
        const updated = BlogDataManager.updateBlogPost(id, postData);
        if (!updated) {
          setError("Failed to update post");
          setSaving(false);
          return;
        }
      } else {
        // Create new post
        const slug = formData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        
        BlogDataManager.addBlogPost({
          ...postData,
          id: slug
        });
      }

      navigate("/admin");
    } catch (err) {
      setError("An error occurred while saving the post");
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !formData.seoKeywords.includes(newKeyword.trim())) {
      setFormData(prev => ({
        ...prev,
        seoKeywords: [...prev.seoKeywords, newKeyword.trim()]
      }));
      setNewKeyword("");
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      seoKeywords: prev.seoKeywords.filter(keyword => keyword !== keywordToRemove)
    }));
  };

  // Authentication guard
  if (!AdminAuth.isAuthenticated()) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background admin-panel">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/admin")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {isEdit ? "Edit Post" : "Create New Post"}
                </h1>
                <p className="text-muted-foreground">
                  {isEdit ? "Update your blog post" : "Write a new blog post"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="published" className="text-sm">
                  {formData.published ? "Published" : "Draft"}
                </Label>
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleInputChange("published", checked)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the basic details for your blog post
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter blog post title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  placeholder="Brief description of the post"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleInputChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Publish Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  placeholder="Author name"
                />
              </div>
            </CardContent>
          </Card>

          {/* Tags Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Tags
              </CardTitle>
              <CardDescription>
                Add tags to help categorize and organize your content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X 
                        className="w-3 h-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                SEO Optimization
              </CardTitle>
              <CardDescription>
                Optimize your content for search engines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seoTitle">SEO Title</Label>
                <Input
                  id="seoTitle"
                  value={formData.seoTitle}
                  onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                  placeholder="SEO optimized title (leave empty to use main title)"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.seoTitle.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seoDescription">Meta Description</Label>
                <Textarea
                  id="seoDescription"
                  value={formData.seoDescription}
                  onChange={(e) => handleInputChange("seoDescription", e.target.value)}
                  placeholder="Brief description for search engines"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.seoDescription.length}/160 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label>SEO Keywords</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a keyword..."
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                  />
                  <Button type="button" onClick={addKeyword} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                {formData.seoKeywords.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.seoKeywords.map((keyword, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        {keyword}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-destructive" 
                          onClick={() => removeKeyword(keyword)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Publishing Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Publishing Options
              </CardTitle>
              <CardDescription>
                Control when and how your content is published
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="published">Published</Label>
                  <p className="text-sm text-muted-foreground">
                    Make this post visible to visitors
                  </p>
                </div>
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleInputChange("published", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="scheduled">Scheduled</Label>
                  <p className="text-sm text-muted-foreground">
                    Schedule this post for future publication
                  </p>
                </div>
                <Switch
                  id="scheduled"
                  checked={formData.scheduled}
                  onCheckedChange={(checked) => handleInputChange("scheduled", checked)}
                />
              </div>

              {formData.scheduled && (
                <div className="space-y-2">
                  <Label htmlFor="scheduledDate">Schedule Date & Time</Label>
                  <Input
                    id="scheduledDate"
                    type="datetime-local"
                    value={formData.scheduledDate}
                    onChange={(e) => handleInputChange("scheduledDate", e.target.value)}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Content
              </CardTitle>
              <CardDescription>
                Write your blog post content. You can use markdown formatting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  placeholder="Write your blog post content here... You can use markdown formatting or HTML."
                  rows={20}
                  className="font-mono text-sm"
                  required
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div>
                    <p>You can use markdown formatting or HTML. Supported features:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>**Bold text** or &lt;strong&gt;text&lt;/strong&gt;</li>
                      <li>*Italic text* or &lt;em&gt;text&lt;/em&gt;</li>
                      <li># Heading 1, ## Heading 2, ### Heading 3</li>
                      <li>- Bullet lists or &lt;ul&gt;&lt;li&gt;items&lt;/li&gt;&lt;/ul&gt;</li>
                      <li>1. Numbered lists or &lt;ol&gt;&lt;li&gt;items&lt;/li&gt;&lt;/ol&gt;</li>
                      <li>&gt; Blockquotes or &lt;blockquote&gt;text&lt;/blockquote&gt;</li>
                      <li>`Code` or &lt;code&gt;text&lt;/code&gt;</li>
                      <li>[Links](url) or &lt;a href="url"&gt;text&lt;/a&gt;</li>
                    </ul>
                  </div>
                  <p>{formData.content.length} characters</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/admin")}
            >
              Cancel
            </Button>
            
            <div className="flex items-center gap-2">
              <Button 
                type="submit" 
                disabled={saving}
                className="min-w-[120px]"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {isEdit ? "Update Post" : "Create Post"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AdminBlogForm;
