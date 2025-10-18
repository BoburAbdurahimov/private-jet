import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAuth } from "@/lib/admin-auth";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";

const SimpleAdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    if (!AdminAuth.isAuthenticated()) {
      navigate("/admin/login");
      return;
    }

    // Load posts
    const allPosts = BlogDataManager.getBlogPosts();
    setPosts(allPosts);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    AdminAuth.logout();
    navigate("/admin/login");
  };

  const getStats = () => {
    const total = posts.length;
    const published = posts.filter(p => p.published).length;
    const draft = total - published;
    return { total, published, draft };
  };

  const stats = getStats();

  if (loading) {
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
          <p>Loading dashboard...</p>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                Admin Dashboard
              </h1>
              <p style={{ color: '#888', margin: '0' }}>
                Manage your blog posts
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => navigate("/")}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #444',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                View Site
              </button>
              <button 
                onClick={handleLogout}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc2626',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px' 
        }}>
          <div style={{ 
            backgroundColor: '#2a2a2a', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #444'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#888' }}>Total Posts</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{stats.total}</div>
          </div>
          
          <div style={{ 
            backgroundColor: '#2a2a2a', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #444'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#888' }}>Published</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>{stats.published}</div>
          </div>
          
          <div style={{ 
            backgroundColor: '#2a2a2a', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #444'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#888' }}>Drafts</h3>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>{stats.draft}</div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{ margin: '0', fontSize: '20px' }}>Blog Posts</h2>
          <button 
            onClick={() => navigate("/admin/posts/new")}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              border: 'none',
              color: '#ffffff',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            + New Post
          </button>
        </div>

        {/* Posts List */}
        <div style={{ 
          backgroundColor: '#2a2a2a', 
          borderRadius: '8px',
          border: '1px solid #444',
          overflow: 'hidden'
        }}>
          {posts.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <p style={{ color: '#888', margin: '0 0 20px 0' }}>No blog posts found.</p>
              <button 
                onClick={() => navigate("/admin/posts/new")}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3b82f6',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Create your first post
              </button>
            </div>
          ) : (
            <div>
              {/* Table Header */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 120px 100px 100px',
                padding: '15px 20px',
                backgroundColor: '#333',
                borderBottom: '1px solid #444',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                <div>Title</div>
                <div>Category</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              {/* Table Rows */}
              {posts.map((post, index) => (
                <div 
                  key={post.id}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 120px 100px 100px',
                    padding: '15px 20px',
                    borderBottom: index < posts.length - 1 ? '1px solid #444' : 'none',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{post.title}</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>{post.excerpt}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{post.category}</div>
                  <div>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: post.published ? '#10b981' : '#f59e0b',
                      color: '#ffffff'
                    }}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#3b82f6',
                        border: 'none',
                        color: '#ffffff',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this post?')) {
                          BlogDataManager.deleteBlogPost(post.id);
                          setPosts(BlogDataManager.getBlogPosts());
                        }
                      }}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#dc2626',
                        border: 'none',
                        color: '#ffffff',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
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

export default SimpleAdminDashboard;
