// CMS Content Model Types
export interface BlogPostSchema {
  // Core Content Fields
  title: string;                    // Required - SEO optimized title
  slug: string;                     // Required - Unique URL slug
  description: string;              // Required - Meta description
  coverImage: string;               // Image URL for featured image
  body: string;                     // Rich text/markdown content
  date: string;                     // Publication date (ISO string)
  
  // SEO Fields
  primaryKeyword: string;           // Main SEO keyword
  secondaryKeywords: string[];      // Additional SEO keywords
  tags: string[];                   // Content tags for categorization
  
  // Social Media Fields
  ogTitle: string;                  // Open Graph title
  ogImage: string;                  // Open Graph image URL
  canonical: string;                // Canonical URL
  
  // Content Structure
  h1Count: number;                 // Should be 1
  h2Count: number;                 // Sub-headers count
  h3Count: number;                 // Sub-sub-headers count
  
  // SEO Checklist
  primaryKeywordInTitle: boolean;   // Primary keyword in title
  primaryKeywordInMeta: boolean;    // Primary keyword in meta description
  primaryKeywordInH1: boolean;      // Primary keyword in H1
  primaryKeywordInFirst100: boolean; // Primary keyword in first 100 words
  primaryKeywordInAltText: boolean; // Primary keyword in alt text
  primaryKeywordInSubheader: boolean; // Primary keyword in one sub-header
  
  // Links
  internalLinks: number;           // Count of internal links to other posts
  externalLinks: number;           // Count of external authority links
  ctaCount: number;                // Count of CTAs to Managerius.com
  
  // Publishing Status
  published: boolean;              // Is published
  scheduled: boolean;              // Is scheduled for later
  draft: boolean;                  // Is draft
  
  // Analytics
  views: number;                   // Page views
  likes: number;                   // Social engagement
  shares: number;                  // Social shares
  
  // Metadata
  author: string;                  // Author name
  createdAt: string;               // Creation timestamp
  updatedAt: string;               // Last update timestamp
  publishedAt?: string;            // Publication timestamp
}

// Publishing Checklist Interface
export interface PublishingChecklist {
  // URL & Structure
  urlSlugContainsPrimaryKeyword: boolean;
  h1CountCorrect: boolean;         // Exactly 1 H1
  h2h3ReflectOutline: boolean;     // H2/H3 reflect content outline
  
  // Primary Keyword Placement
  primaryKeywordInTitle: boolean;
  primaryKeywordInMeta: boolean;
  primaryKeywordInH1: boolean;
  primaryKeywordInFirst100Words: boolean;
  primaryKeywordInAltText: boolean;
  primaryKeywordInOneSubheader: boolean;
  
  // Links
  hasInternalLinks: boolean;       // 1-2 internal links to other posts
  hasExternalAuthorityLink: boolean; // 1 external authority link (non-competitor)
  hasStrongCTA: boolean;          // 1 strong CTA to Managerius.com
  
  // Technical
  openGraphPreviewTested: boolean; // OG image + title tested
  googleSearchConsoleSubmitted: boolean; // URL submitted to GSC
  
  // Content Quality
  wordCount: number;              // Total word count
  readingTime: number;            // Estimated reading time in minutes
  readabilityScore: number;       // Content readability score
}

// CMS API Response Types
export interface CMSResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

// Content Validation Rules
export interface ContentValidationRules {
  minWordCount: number;           // Minimum word count
  maxWordCount: number;           // Maximum word count
  requiredFields: string[];       // Required fields
  keywordDensity: {
    min: number;                   // Minimum keyword density %
    max: number;                   // Maximum keyword density %
  };
  imageRequirements: {
    minWidth: number;             // Minimum image width
    minHeight: number;            // Minimum image height
    maxFileSize: number;          // Maximum file size in MB
  };
}
