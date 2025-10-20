# Managerius CMS Documentation

## Overview
This documentation covers the Content Management System (CMS) implementation for Managerius blog posts, including content models, validation rules, and publishing workflows.

## Content Model

### BlogPost Schema Fields

#### Core Content Fields
- **title** (string, required): SEO-optimized blog post title
- **slug** (string, required): Unique URL-friendly identifier
- **description** (string, required): Meta description for SEO (max 160 chars)
- **coverImage** (string): URL to featured image
- **body** (string, required): Main content in markdown/rich text format
- **date** (string): Publication date in ISO format

#### SEO Fields
- **primaryKeyword** (string, required): Main SEO keyword
- **secondaryKeywords** (string[]): Additional SEO keywords
- **tags** (string[]): Content categorization tags
- **ogTitle** (string): Open Graph title for social sharing
- **ogImage** (string): Open Graph image URL
- **canonical** (string): Canonical URL for SEO

#### Content Structure Fields
- **h1Count** (number): Number of H1 headings (should be 1)
- **h2Count** (number): Number of H2 headings
- **h3Count** (number): Number of H3 headings

#### SEO Checklist Fields
- **primaryKeywordInTitle** (boolean): Keyword appears in title
- **primaryKeywordInMeta** (boolean): Keyword appears in meta description
- **primaryKeywordInH1** (boolean): Keyword appears in H1
- **primaryKeywordInFirst100** (boolean): Keyword in first 100 words
- **primaryKeywordInAltText** (boolean): Keyword in image alt text
- **primaryKeywordInSubheader** (boolean): Keyword in sub-headers

#### Link Fields
- **internalLinks** (number): Count of internal links to other posts
- **externalLinks** (number): Count of external authority links
- **ctaCount** (number): Count of CTAs to Managerius.com

#### Publishing Status
- **published** (boolean): Is published
- **scheduled** (boolean): Is scheduled for later
- **draft** (boolean): Is draft

#### Analytics
- **views** (number): Page views
- **likes** (number): Social engagement
- **shares** (number): Social shares

#### Metadata
- **author** (string): Author name
- **createdAt** (string): Creation timestamp
- **updatedAt** (string): Last update timestamp
- **publishedAt** (string): Publication timestamp

## Publishing Checklist

### Required Before Publishing

#### URL & Structure
- [ ] URL slug contains primary keyword
- [ ] Exactly 1 H1 heading
- [ ] H2/H3 headings reflect content outline

#### Primary Keyword Placement
- [ ] Primary keyword in title
- [ ] Primary keyword in meta description
- [ ] Primary keyword in H1 heading
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in alt text (if applicable)
- [ ] Primary keyword in one sub-header

#### Links
- [ ] 1-2 internal links to other Managerius posts
- [ ] 1 external authority link (non-competitor)
- [ ] 1 strong CTA to Managerius.com

#### Technical
- [ ] Open Graph preview tested (image + title)
- [ ] URL submitted to Google Search Console

## Content Validation Rules

### Word Count
- **Minimum**: 500 words
- **Maximum**: 3,000 words
- **Recommended**: 1,000-2,000 words

### Keyword Density
- **Minimum**: 0.5%
- **Maximum**: 3.0%
- **Recommended**: 1-2%

### Image Requirements
- **Minimum Width**: 800px
- **Minimum Height**: 450px
- **Maximum File Size**: 5MB
- **Format**: JPG, PNG, WebP

### Required Fields
- title
- slug
- description
- body
- primaryKeyword

## Content Quality Assessment

### Scoring System (0-10 points)
1. **H1 Count Correct** (1 point)
2. **Primary Keyword in Title** (1 point)
3. **Primary Keyword in Meta** (1 point)
4. **Primary Keyword in H1** (1 point)
5. **Primary Keyword in First 100 Words** (1 point)
6. **Has Internal Links** (1 point)
7. **Has External Authority Link** (1 point)
8. **Has Strong CTA** (1 point)
9. **Word Count ≥ 500** (1 point)
10. **Word Count ≥ 1000** (1 point)

### Quality Grades
- **A+ (90-100%)**: Excellent, ready for publication
- **A (80-89%)**: Very good, minor optimizations needed
- **B (70-79%)**: Good content, several SEO optimizations needed
- **C (60-69%)**: Content needs significant SEO improvements
- **D (0-59%)**: Content requires major optimization

## Publishing Workflow

### Pre-Publishing Steps
1. **Content Structure**: Ensure proper heading hierarchy
2. **SEO Optimization**: Optimize keyword placement and density
3. **Internal Linking**: Add 1-2 internal links to other posts
4. **External Linking**: Add 1 external authority link
5. **CTA Placement**: Add strong CTA to Managerius.com

### Post-Publishing Tasks
1. Test Open Graph preview on social media
2. Submit URL to Google Search Console
3. Share on social media channels
4. Monitor analytics for performance
5. Update internal linking from other posts
6. Submit to relevant directories if applicable

## Components

### ContentEditor
- Full-featured content editor with real-time validation
- Publishing checklist sidebar
- SEO optimization suggestions
- Content statistics and quality assessment

### PublishingDashboard
- Publishing readiness score
- Step-by-step publishing checklist
- Content quality assessment
- Post-publishing task management

### ContentValidator
- Real-time content validation
- SEO optimization suggestions
- Content quality scoring
- Publishing readiness assessment

## Usage Examples

### Creating a New Blog Post
```typescript
import { BlogPostSchema } from '@/types/cms';
import ContentEditor from '@/components/ContentEditor';

const newPost: BlogPostSchema = {
  title: "Your Blog Post Title",
  slug: "your-blog-post-slug",
  description: "Meta description here...",
  // ... other required fields
};
```

### Validating Content
```typescript
import { validateBlogPost } from '@/utils/contentValidator';

const validation = validateBlogPost(post);
if (!validation.isValid) {
  console.log('Validation errors:', validation.errors);
}
```

### Generating Publishing Checklist
```typescript
import { generatePublishingChecklist } from '@/utils/contentValidator';

const checklist = generatePublishingChecklist(post);
console.log('Publishing readiness:', checklist);
```

## Best Practices

### Content Creation
1. **Research Keywords**: Use tools like Google Keyword Planner
2. **Write for Users**: Focus on providing value to readers
3. **Optimize for SEO**: Follow the publishing checklist
4. **Include Visuals**: Use high-quality images and graphics
5. **Internal Linking**: Link to other relevant posts

### SEO Optimization
1. **Keyword Research**: Find relevant, low-competition keywords
2. **Title Optimization**: Include primary keyword naturally
3. **Meta Descriptions**: Write compelling, keyword-rich descriptions
4. **Heading Structure**: Use proper H1, H2, H3 hierarchy
5. **Content Length**: Aim for 1,000-2,000 words

### Publishing Process
1. **Content Review**: Check all publishing checklist items
2. **Quality Assessment**: Ensure content quality score ≥ 80%
3. **Technical Check**: Verify all links and images work
4. **Social Preview**: Test Open Graph preview
5. **Analytics Setup**: Submit to Google Search Console

## Troubleshooting

### Common Issues
1. **Low Quality Score**: Check keyword placement and content length
2. **Validation Errors**: Review required fields and content rules
3. **Publishing Blocked**: Complete all required checklist items
4. **SEO Issues**: Use optimization suggestions to improve content

### Support
For technical issues or questions about the CMS system, refer to the component documentation or contact the development team.
