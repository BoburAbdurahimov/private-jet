import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminAuth } from "@/lib/admin-auth";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";

const SimpleAdminBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    published: false,
    date: new Date().toISOString().split('T')[0]
  });
  
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check authentication
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
          published: post.published,
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
      if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
        setError("Please fill in all required fields");
        setSaving(false);
        return;
      }

      const wordCount = formData.content.split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));

      const postData = {
        ...formData,
        readTime: `${readTime} min read`
      };

      if (isEdit && id) {
        BlogDataManager.updateBlogPost(id, postData);
      } else {
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

  // Authentication guard
  if (!AdminAuth.isAuthenticated()) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#1a1a1a', 
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #333',
            borderTop: '3px solid #ffffff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a', 
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#2a2a2a', 
        borderBottom: '1px solid #444',
        padding: '20px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              onClick={() => navigate("/admin")}
              style={{
                padding: '8px 16px',
                backgroundColor: 'transparent',
                border: '1px solid #444',
                color: '#ffffff',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ← Back to Dashboard
            </button>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                {isEdit ? "Edit Post" : "Create New Post"}
              </h1>
              <p style={{ color: '#888', margin: '0' }}>
                {isEdit ? "Update your blog post" : "Write a new blog post"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {error && (
            <div style={{ 
              padding: '15px', 
              backgroundColor: '#dc2626', 
              color: '#ffffff', 
              borderRadius: '4px',
              border: '1px solid #b91c1c'
            }}>
              {error}
            </div>
          )}

          {/* Basic Information */}
          <div style={{ 
            backgroundColor: '#2a2a2a', 
            padding: '30px', 
            borderRadius: '8px',
            border: '1px solid #444'
          }}>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Basic Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter blog post title"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#333',
                    border: '1px solid #555',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Excerpt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  placeholder="Brief description of the post"
                  rows={3}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#333',
                    border: '1px solid #555',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#333',
                      border: '1px solid #555',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '16px'
                    }}
                  >
                    <option value="">Select category</option>
                    <option value="Innovation">Innovation</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Business">Business</option>
                    <option value="Travel Tips">Travel Tips</option>
                    <option value="Destinations">Destinations</option>
                    <option value="Safety">Safety</option>
                    <option value="Technology">Technology</option>
                    <option value="Industry News">Industry News</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#333',
                      border: '1px solid #555',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#333',
                    border: '1px solid #555',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => handleInputChange("published", e.target.checked)}
                  style={{ transform: 'scale(1.2)' }}
                />
                <label htmlFor="published" style={{ fontWeight: 'bold' }}>
                  Published
                </label>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ 
            backgroundColor: '#2a2a2a', 
            padding: '30px', 
            borderRadius: '8px',
            border: '1px solid #444'
          }}>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Content</h2>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                placeholder="Write your blog post content here..."
                rows={20}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#333',
                  border: '1px solid #555',
                  borderRadius: '4px',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontFamily: 'monospace',
                  resize: 'vertical'
                }}
              />
              <p style={{ fontSize: '12px', color: '#888', margin: '5px 0 0 0' }}>
                You can use markdown formatting. Line breaks will be preserved.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              type="button" 
              onClick={() => navigate("/admin")}
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                border: '1px solid #444',
                color: '#ffffff',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Cancel
            </button>
            
            <button 
              type="submit" 
              disabled={saving}
              style={{
                padding: '12px 24px',
                backgroundColor: saving ? '#666' : '#3b82f6',
                border: 'none',
                color: '#ffffff',
                borderRadius: '4px',
                cursor: saving ? 'not-allowed' : 'pointer',
                fontSize: '16px'
              }}
            >
              {saving ? "Saving..." : (isEdit ? "Update Post" : "Create Post")}
            </button>
          </div>
        </form>
      </main>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SimpleAdminBlogForm;
