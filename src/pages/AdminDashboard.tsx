import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  MoreHorizontal,
  LogOut,
  BarChart3,
  Search,
  Filter,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  Tag,
  Download,
  Upload
} from "lucide-react";
import { AdminAuth } from "@/lib/admin-auth";
import { BlogDataManager, BlogPost } from "@/lib/blog-data";
import { format } from "date-fns";

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; post: BlogPost | null }>({
    open: false,
    post: null
  });
  const [bulkActions, setBulkActions] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication first
    if (!AdminAuth.isAuthenticated()) {
      navigate("/admin/login");
      return;
    }
    
    // Load blog posts
    loadPosts();
  }, [navigate]);

  useEffect(() => {
    // Filter posts based on search and filters
    let filtered = posts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(post => post.category === categoryFilter);
    }

    // Status filter
    if (statusFilter !== "all") {
      if (statusFilter === "published") {
        filtered = filtered.filter(post => post.published);
      } else if (statusFilter === "draft") {
        filtered = filtered.filter(post => !post.published);
      } else if (statusFilter === "scheduled") {
        filtered = filtered.filter(post => post.scheduled);
      }
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, categoryFilter, statusFilter]);

  const loadPosts = () => {
    const allPosts = BlogDataManager.getBlogPosts();
    setPosts(allPosts);
  };

  const handleLogout = () => {
    AdminAuth.logout();
    navigate("/admin/login");
  };

  const handleDelete = (post: BlogPost) => {
    setDeleteDialog({ open: true, post });
  };

  const confirmDelete = () => {
    if (deleteDialog.post) {
      BlogDataManager.deleteBlogPost(deleteDialog.post.id);
      loadPosts();
      setDeleteDialog({ open: false, post: null });
    }
  };

  const togglePublished = (post: BlogPost) => {
    BlogDataManager.updateBlogPost(post.id, { published: !post.published });
    loadPosts();
  };

  const getStats = () => {
    const total = posts.length;
    const published = posts.filter(p => p.published).length;
    const draft = posts.filter(p => !p.published).length;
    const scheduled = posts.filter(p => p.scheduled).length;
    const totalViews = posts.reduce((sum, post) => sum + post.views, 0);
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
    const avgViews = total > 0 ? Math.round(totalViews / total) : 0;
    
    return { total, published, draft, scheduled, totalViews, totalLikes, avgViews };
  };

  const handleBulkAction = (action: string) => {
    if (bulkActions.length === 0) return;
    
    const selectedPosts = posts.filter(post => bulkActions.includes(post.id));
    
    switch (action) {
      case 'publish':
        selectedPosts.forEach(post => {
          BlogDataManager.updateBlogPost(post.id, { published: true });
        });
        break;
      case 'unpublish':
        selectedPosts.forEach(post => {
          BlogDataManager.updateBlogPost(post.id, { published: false });
        });
        break;
      case 'delete':
        selectedPosts.forEach(post => {
          BlogDataManager.deleteBlogPost(post.id);
        });
        break;
    }
    
    setBulkActions([]);
    loadPosts();
  };

  const toggleBulkSelection = (postId: string) => {
    setBulkActions(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const selectAll = () => {
    setBulkActions(filteredPosts.map(post => post.id));
  };

  const clearSelection = () => {
    setBulkActions([]);
  };

  const stats = getStats();

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
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #333', padding: '1rem 0' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#ffffff' }}>Admin Dashboard</h1>
              <p style={{ color: '#888888' }}>Manage your blog posts</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate("/")}>
                View Site
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: '#ffffff' }}>Total Posts</CardTitle>
              <BarChart3 className="h-4 w-4" style={{ color: '#888888' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" style={{ color: '#ffffff' }}>{stats.total}</div>
              <p className="text-xs" style={{ color: '#888888' }}>
                {stats.published} published, {stats.draft} drafts
              </p>
            </CardContent>
          </Card>
          
          <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: '#ffffff' }}>Total Views</CardTitle>
              <TrendingUp className="h-4 w-4" style={{ color: '#888888' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" style={{ color: '#3b82f6' }}>{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs" style={{ color: '#888888' }}>
                {stats.avgViews} avg per post
              </p>
            </CardContent>
          </Card>
          
          <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: '#ffffff' }}>Total Likes</CardTitle>
              <Users className="h-4 w-4" style={{ color: '#888888' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" style={{ color: '#8b5cf6' }}>{stats.totalLikes}</div>
              <p className="text-xs" style={{ color: '#888888' }}>
                Across all posts
              </p>
            </CardContent>
          </Card>
          
          <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" style={{ color: '#ffffff' }}>Scheduled</CardTitle>
              <Calendar className="h-4 w-4" style={{ color: '#888888' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" style={{ color: '#eab308' }}>{stats.scheduled}</div>
              <p className="text-xs" style={{ color: '#888888' }}>
                Posts scheduled
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4" style={{ color: '#888888' }} />
                  <Input
                    placeholder="Search posts, tags, or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    style={{ backgroundColor: '#2a2a2a', border: '1px solid #444', color: '#ffffff' }}
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Innovation">Innovation</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Travel Tips">Travel Tips</SelectItem>
                    <SelectItem value="Destinations">Destinations</SelectItem>
                    <SelectItem value="Safety">Safety</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Industry News">Industry News</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions and Bulk Operations */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Blog Posts</h2>
            {bulkActions.length > 0 && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{bulkActions.length} selected</Badge>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleBulkAction('publish')}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Publish
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleBulkAction('unpublish')}
                >
                  <EyeOff className="w-4 h-4 mr-1" />
                  Unpublish
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={() => handleBulkAction('delete')}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={clearSelection}
                >
                  Clear
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={selectAll}
            >
              Select All
            </Button>
            <Button onClick={() => navigate("/admin/posts/new")}>
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>

        {/* Posts Table */}
        <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
          <CardContent className="p-0">
            <Table style={{ color: '#ffffff' }}>
              <TableHeader>
                <TableRow style={{ backgroundColor: '#2a2a2a' }}>
                  <TableHead className="w-[50px]">
                    <input
                      type="checkbox"
                      checked={bulkActions.length === filteredPosts.length && filteredPosts.length > 0}
                      onChange={(e) => e.target.checked ? selectAll() : clearSelection()}
                      className="rounded"
                    />
                  </TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Stats</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={bulkActions.includes(post.id)}
                        onChange={() => toggleBulkSelection(post.id)}
                        className="rounded"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold line-clamp-1">{post.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {post.excerpt}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          by {post.author}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{post.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        {post.scheduled && (
                          <Badge variant="outline" className="text-xs">
                            Scheduled
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="w-3 h-3" />
                          {post.likes}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {format(new Date(post.date), "MMM dd, yyyy")}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => navigate(`/admin/posts/${post.id}/edit`)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => togglePublished(post)}>
                            {post.published ? (
                              <>
                                <EyeOff className="w-4 h-4 mr-2" />
                                Unpublish
                              </>
                            ) : (
                              <>
                                <Eye className="w-4 h-4 mr-2" />
                                Publish
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(post)}
                            className="text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {filteredPosts.length === 0 && posts.length > 0 && (
          <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
            <CardContent className="text-center py-12">
              <p style={{ color: '#888888' }} className="mb-4">No posts match your current filters.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setStatusFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {posts.length === 0 && (
          <Card style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#ffffff' }}>
            <CardContent className="text-center py-12">
              <p style={{ color: '#888888' }} className="mb-4">No blog posts found.</p>
              <Button onClick={() => navigate("/admin/posts/new")}>
                <Plus className="w-4 h-4 mr-2" />
                Create your first post
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ open, post: null })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deleteDialog.post?.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
