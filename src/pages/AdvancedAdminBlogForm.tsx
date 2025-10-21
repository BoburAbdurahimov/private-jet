import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminAuth } from "@/lib/admin-auth";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";

const AdvancedAdminBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const editorRef = useRef<HTMLDivElement>(null);
  
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
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");

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
        if (editorRef.current) {
          editorRef.current.innerHTML = post.content;
        }
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
      if (!formData.title.trim() || !formData.excerpt.trim()) {
        setError("Please fill in title and excerpt");
        setSaving(false);
        return;
      }

      // Get content from rich text editor
      const content = editorRef.current?.innerHTML || formData.content;
      
      const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));

      const postData = {
        ...formData,
        content: content,
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

  // Rich text editor functions
  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const insertImage = () => {
    if (imageUrl.trim()) {
      execCommand('insertHTML', `<img src="${imageUrl}" alt="Blog post image" width="800" height="450" style="max-width: 100%; height: auto; margin: 10px 0; border-radius: 8px;" />`);
      setImageUrl("");
      setShowImageDialog(false);
    }
  };

  const insertLink = () => {
    if (linkUrl.trim() && linkText.trim()) {
      execCommand('insertHTML', `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">${linkText}</a>`);
      setLinkUrl("");
      setLinkText("");
      setShowLinkDialog(false);
    }
  };

  const insertHeading = (level: number) => {
    execCommand('formatBlock', `h${level}`);
  };

  const insertList = (ordered: boolean) => {
    execCommand(ordered ? 'insertOrderedList' : 'insertUnorderedList');
  };

  const insertQuote = () => {
    execCommand('insertHTML', '<blockquote style="border-left: 4px solid #3b82f6; padding-left: 16px; margin: 16px 0; font-style: italic; color: #666;">Quote text here</blockquote>');
  };

  const insertCode = () => {
    execCommand('insertHTML', '<pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 16px 0;"><code>Code here</code></pre>');
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
                {isEdit ? "Update your blog post" : "Write a new blog post with rich formatting"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
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

          {/* Rich Text Editor */}
          <div style={{ 
            backgroundColor: '#2a2a2a', 
            padding: '30px', 
            borderRadius: '8px',
            border: '1px solid #444'
          }}>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Content Editor</h2>
            
            {/* Toolbar */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px', 
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: '#333',
              borderRadius: '8px',
              border: '1px solid #555'
            }}>
              {/* Text Formatting */}
              <button type="button" onClick={() => execCommand('bold')} className="toolbar-button">
                <strong>B</strong>
              </button>
              <button type="button" onClick={() => execCommand('italic')} className="toolbar-button">
                <em>I</em>
              </button>
              <button type="button" onClick={() => execCommand('underline')} className="toolbar-button">
                <u>U</u>
              </button>
              <button type="button" onClick={() => execCommand('strikeThrough')} className="toolbar-button">
                <s>S</s>
              </button>
              
              <div className="toolbar-separator"></div>
              
              {/* Headings */}
              <button type="button" onClick={() => insertHeading(1)} className="toolbar-button">
                H1
              </button>
              <button type="button" onClick={() => insertHeading(2)} className="toolbar-button">
                H2
              </button>
              <button type="button" onClick={() => insertHeading(3)} className="toolbar-button">
                H3
              </button>
              
              <div className="toolbar-separator"></div>
              
              {/* Lists */}
              <button type="button" onClick={() => insertList(false)} className="toolbar-button">
                • List
              </button>
              <button type="button" onClick={() => insertList(true)} className="toolbar-button">
                1. List
              </button>
              
              <div className="toolbar-separator"></div>
              
              {/* Special Elements */}
              <button type="button" onClick={() => setShowImageDialog(true)} className="toolbar-button">
                🖼️ Image
              </button>
              <button type="button" onClick={() => setShowLinkDialog(true)} className="toolbar-button">
                🔗 Link
              </button>
              <button type="button" onClick={insertQuote} className="toolbar-button">
                " Quote
              </button>
              <button type="button" onClick={insertCode} className="toolbar-button">
                &lt;/&gt; Code
              </button>
              
              <div className="toolbar-separator"></div>
              
              {/* Alignment */}
              <button type="button" onClick={() => execCommand('justifyLeft')} className="toolbar-button">
                ←
              </button>
              <button type="button" onClick={() => execCommand('justifyCenter')} className="toolbar-button">
                ↔
              </button>
              <button type="button" onClick={() => execCommand('justifyRight')} className="toolbar-button">
                →
              </button>
            </div>
            
            {/* Editor */}
            <div
              ref={editorRef}
              contentEditable
              className="rich-text-editor"
              onInput={(e) => {
                const content = (e.target as HTMLDivElement).innerHTML;
                setFormData(prev => ({ ...prev, content }));
              }}
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
            
            <p style={{ fontSize: '12px', color: '#888', margin: '10px 0 0 0' }}>
              Use the toolbar above to format your text, add images, links, and more. You can also paste content from other sources.
            </p>
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

      {/* Image Dialog */}
      {showImageDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#2a2a2a',
            padding: '30px',
            borderRadius: '8px',
            border: '1px solid #444',
            minWidth: '400px'
          }}>
            <h3 style={{ margin: '0 0 20px 0' }}>Insert Image</h3>
            <input
              type="url"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '20px'
              }}
            />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowImageDialog(false);
                  setImageUrl("");
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #444',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={insertImage}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Link Dialog */}
      {showLinkDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#2a2a2a',
            padding: '30px',
            borderRadius: '8px',
            border: '1px solid #444',
            minWidth: '400px'
          }}>
            <h3 style={{ margin: '0 0 20px 0' }}>Insert Link</h3>
            <input
              type="url"
              placeholder="Enter URL"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '15px'
              }}
            />
            <input
              type="text"
              placeholder="Link text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '20px'
              }}
            />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowLinkDialog(false);
                  setLinkUrl("");
                  setLinkText("");
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #444',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={insertLink}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};


export default AdvancedAdminBlogForm;
