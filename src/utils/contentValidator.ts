import { BlogPostSchema, PublishingChecklist, ContentValidationRules } from '@/types/cms';

// Content validation rules
export const validationRules: ContentValidationRules = {
  minWordCount: 500,
  maxWordCount: 3000,
  requiredFields: ['title', 'slug', 'description', 'body', 'primaryKeyword'],
  keywordDensity: {
    min: 0.5,  // 0.5% minimum
    max: 3.0  // 3% maximum
  },
  imageRequirements: {
    minWidth: 800,
    minHeight: 450,
    maxFileSize: 5 // 5MB
  }
};

// Extract text content from HTML/markdown
export const extractTextContent = (content: string): string => {
  // Remove HTML tags and markdown syntax
  return content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/#{1,6}\s+/g, '') // Remove markdown headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold markdown
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
};

// Count words in content
export const countWords = (content: string): number => {
  const text = extractTextContent(content);
  return text.split(/\s+/).filter(word => word.length > 0).length;
};

// Calculate reading time
export const calculateReadingTime = (wordCount: number): number => {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Check keyword density
export const checkKeywordDensity = (content: string, keyword: string): number => {
  const text = extractTextContent(content).toLowerCase();
  const keywordLower = keyword.toLowerCase();
  const wordCount = countWords(text);
  const keywordCount = (text.match(new RegExp(`\\b${keywordLower}\\b`, 'g')) || []).length;
  return (keywordCount / wordCount) * 100;
};

// Extract headings from content
export const extractHeadings = (content: string) => {
  const h1Matches = content.match(/^#\s+(.+)$/gm) || [];
  const h2Matches = content.match(/^##\s+(.+)$/gm) || [];
  const h3Matches = content.match(/^###\s+(.+)$/gm) || [];
  
  return {
    h1: h1Matches.map(h => h.replace(/^#\s+/, '')),
    h2: h2Matches.map(h => h.replace(/^##\s+/, '')),
    h3: h3Matches.map(h => h.replace(/^###\s+/, ''))
  };
};

// Count internal links
export const countInternalLinks = (content: string): number => {
  const internalLinkRegex = /\[([^\]]+)\]\(\/blog\/[^)]+\)/g;
  const matches = content.match(internalLinkRegex) || [];
  return matches.length;
};

// Count external links
export const countExternalLinks = (content: string): number => {
  const externalLinkRegex = /\[([^\]]+)\]\(https?:\/\/[^)]+\)/g;
  const matches = content.match(externalLinkRegex) || [];
  return matches.length;
};

// Count CTAs
export const countCTAs = (content: string): number => {
  const ctaRegex = /\[([^\]]+)\]\(https:\/\/managerius\.com[^)]*\)/g;
  const matches = content.match(ctaRegex) || [];
  return matches.length;
};

// Validate blog post content
export const validateBlogPost = (post: BlogPostSchema): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check required fields
  validationRules.requiredFields.forEach(field => {
    if (!post[field as keyof BlogPostSchema]) {
      errors.push(`Missing required field: ${field}`);
    }
  });
  
  // Check word count
  const wordCount = countWords(post.body);
  if (wordCount < validationRules.minWordCount) {
    errors.push(`Content too short. Minimum ${validationRules.minWordCount} words required.`);
  }
  if (wordCount > validationRules.maxWordCount) {
    errors.push(`Content too long. Maximum ${validationRules.maxWordCount} words allowed.`);
  }
  
  // Check keyword density
  const keywordDensity = checkKeywordDensity(post.body, post.primaryKeyword);
  if (keywordDensity < validationRules.keywordDensity.min) {
    errors.push(`Primary keyword density too low. Minimum ${validationRules.keywordDensity.min}% required.`);
  }
  if (keywordDensity > validationRules.keywordDensity.max) {
    errors.push(`Primary keyword density too high. Maximum ${validationRules.keywordDensity.max}% allowed.`);
  }
  
  // Check H1 count
  const headings = extractHeadings(post.body);
  if (headings.h1.length !== 1) {
    errors.push(`Must have exactly 1 H1 heading. Found ${headings.h1.length}.`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Generate publishing checklist
export const generatePublishingChecklist = (post: BlogPostSchema): PublishingChecklist => {
  const headings = extractHeadings(post.body);
  const wordCount = countWords(post.body);
  const first100Words = extractTextContent(post.body).substring(0, 500); // Approximate first 100 words
  
  return {
    // URL & Structure
    urlSlugContainsPrimaryKeyword: post.slug.toLowerCase().includes(post.primaryKeyword.toLowerCase()),
    h1CountCorrect: headings.h1.length === 1,
    h2h3ReflectOutline: headings.h2.length > 0 || headings.h3.length > 0,
    
    // Primary Keyword Placement
    primaryKeywordInTitle: post.title.toLowerCase().includes(post.primaryKeyword.toLowerCase()),
    primaryKeywordInMeta: post.description.toLowerCase().includes(post.primaryKeyword.toLowerCase()),
    primaryKeywordInH1: headings.h1.some(h => h.toLowerCase().includes(post.primaryKeyword.toLowerCase())),
    primaryKeywordInFirst100Words: first100Words.toLowerCase().includes(post.primaryKeyword.toLowerCase()),
    primaryKeywordInAltText: false, // Would need image analysis
    primaryKeywordInOneSubheader: headings.h2.some(h => h.toLowerCase().includes(post.primaryKeyword.toLowerCase())) ||
                                  headings.h3.some(h => h.toLowerCase().includes(post.primaryKeyword.toLowerCase())),
    
    // Links
    hasInternalLinks: countInternalLinks(post.body) >= 1,
    hasExternalAuthorityLink: countExternalLinks(post.body) >= 1,
    hasStrongCTA: countCTAs(post.body) >= 1,
    
    // Technical
    openGraphPreviewTested: false, // Manual testing required
    googleSearchConsoleSubmitted: false, // Manual submission required
    
    // Content Quality
    wordCount,
    readingTime: calculateReadingTime(wordCount),
    readabilityScore: 0 // Would need readability analysis library
  };
};

// SEO optimization suggestions
export const getSEOOptimizationSuggestions = (post: BlogPostSchema, checklist: PublishingChecklist): string[] => {
  const suggestions: string[] = [];
  
  if (!checklist.primaryKeywordInTitle) {
    suggestions.push('Include primary keyword in the title');
  }
  
  if (!checklist.primaryKeywordInMeta) {
    suggestions.push('Include primary keyword in meta description');
  }
  
  if (!checklist.primaryKeywordInH1) {
    suggestions.push('Include primary keyword in H1 heading');
  }
  
  if (!checklist.primaryKeywordInFirst100Words) {
    suggestions.push('Include primary keyword in the first 100 words of content');
  }
  
  if (!checklist.hasInternalLinks) {
    suggestions.push('Add 1-2 internal links to other Managerius blog posts');
  }
  
  if (!checklist.hasExternalAuthorityLink) {
    suggestions.push('Add 1 external authority link (non-competitor)');
  }
  
  if (!checklist.hasStrongCTA) {
    suggestions.push('Add a strong CTA linking to Managerius.com');
  }
  
  if (checklist.wordCount < 500) {
    suggestions.push('Increase content length to at least 500 words');
  }
  
  return suggestions;
};
