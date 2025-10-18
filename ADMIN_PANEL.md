# Admin Panel Documentation

## Overview
The admin panel provides a complete blog management system for the Jetset website. It allows you to create, edit, delete, and manage blog posts with a user-friendly interface.

## Features

### 🔐 Authentication
- Simple login system with username/password
- Session management with localStorage
- Automatic redirect to login if not authenticated

### 📝 Blog Management
- **Create new posts**: Add title, excerpt, content, category, and featured image
- **Edit existing posts**: Modify any aspect of published or draft posts
- **Delete posts**: Remove posts with confirmation dialog
- **Publish/Unpublish**: Toggle post visibility on the website
- **Categories**: Organize posts with predefined categories

### 📊 Dashboard
- Overview of all blog posts
- Statistics showing total, published, and draft posts
- Quick actions for each post (edit, publish/unpublish, delete)
- Responsive table layout

### 🎨 Content Management
- Rich text editor for blog content
- Markdown support for formatting
- Automatic read time calculation
- Image URL support for featured images
- Category selection from predefined options

## Access

### Login Credentials
- **URL**: `/admin/login`
- **Username**: `admin`
- **Password**: `jetset2025`

### Navigation
- Access via the "Admin" link in the main navigation
- Direct URL: `yoursite.com/admin/login`

## Usage Guide

### Creating a New Post
1. Navigate to Admin Dashboard
2. Click "New Post" button
3. Fill in the required fields:
   - **Title**: The post title
   - **Excerpt**: Brief description (appears on blog listing)
   - **Content**: Full blog post content
   - **Category**: Select from available categories
   - **Featured Image**: URL to the main image
   - **Publish Date**: When the post should appear
4. Toggle "Published" switch to make it live
5. Click "Create Post"

### Editing a Post
1. From the dashboard, click the three-dot menu on any post
2. Select "Edit"
3. Modify any fields as needed
4. Click "Update Post"

### Managing Post Status
- **Published**: Post appears on the website
- **Draft**: Post is saved but not visible to visitors
- Toggle the switch in the form or use the dashboard actions

### Deleting a Post
1. From the dashboard, click the three-dot menu
2. Select "Delete"
3. Confirm the deletion in the dialog

## Technical Details

### Data Storage
- Currently uses localStorage for data persistence
- Data structure includes all post metadata
- Automatic backup of existing posts on first load

### Categories Available
- Innovation
- Luxury
- Business
- Travel Tips
- Destinations
- Safety
- Technology
- Industry News

### Content Formatting
- Supports basic markdown formatting
- Line breaks are preserved
- Headers are automatically styled
- Content is rendered with proper typography

## Security Notes

⚠️ **Important**: This is a demo admin panel with basic security. For production use:

1. Implement proper authentication (JWT tokens, secure sessions)
2. Add password hashing and secure storage
3. Implement role-based access control
4. Add CSRF protection
5. Use a proper database instead of localStorage
6. Add input validation and sanitization
7. Implement rate limiting and security headers

## Future Enhancements

- [ ] Rich text editor with WYSIWYG interface
- [ ] Image upload and management
- [ ] SEO optimization fields
- [ ] Post scheduling
- [ ] Comment system
- [ ] Analytics and metrics
- [ ] Bulk operations
- [ ] Post templates
- [ ] Tag system
- [ ] Search functionality

## Support

For technical support or questions about the admin panel, please refer to the main project documentation or contact the development team.
