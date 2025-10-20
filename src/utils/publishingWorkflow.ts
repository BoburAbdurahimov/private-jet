import { BlogPostSchema, PublishingChecklist } from '@/types/cms';
import { generatePublishingChecklist, getSEOOptimizationSuggestions } from './contentValidator';

// Publishing workflow steps
export interface PublishingStep {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  required: boolean;
  action?: () => void;
}

// Generate publishing workflow steps
export const generatePublishingSteps = (post: BlogPostSchema): PublishingStep[] => {
  const checklist = generatePublishingChecklist(post);
  
  return [
    {
      id: 'content-structure',
      name: 'Content Structure',
      description: 'Ensure proper heading structure and content organization',
      completed: checklist.h1CountCorrect && checklist.h2h3ReflectOutline,
      required: true
    },
    {
      id: 'seo-optimization',
      name: 'SEO Optimization',
      description: 'Optimize for primary keyword placement and density',
      completed: checklist.primaryKeywordInTitle && 
                 checklist.primaryKeywordInMeta && 
                 checklist.primaryKeywordInH1 &&
                 checklist.primaryKeywordInFirst100Words,
      required: true
    },
    {
      id: 'internal-linking',
      name: 'Internal Linking',
      description: 'Add 1-2 internal links to other Managerius posts',
      completed: checklist.hasInternalLinks,
      required: true
    },
    {
      id: 'external-linking',
      name: 'External Authority Link',
      description: 'Add 1 external authority link (non-competitor)',
      completed: checklist.hasExternalAuthorityLink,
      required: true
    },
    {
      id: 'cta-placement',
      name: 'CTA Placement',
      description: 'Add strong CTA linking to Managerius.com',
      completed: checklist.hasStrongCTA,
      required: true
    },
    {
      id: 'og-preview',
      name: 'Open Graph Preview',
      description: 'Test Open Graph preview (image + title)',
      completed: checklist.openGraphPreviewTested,
      required: false
    },
    {
      id: 'gsc-submission',
      name: 'Google Search Console',
      description: 'Submit URL to Google Search Console',
      completed: checklist.googleSearchConsoleSubmitted,
      required: false
    }
  ];
};

// Content quality assessment
export const assessContentQuality = (post: BlogPostSchema): {
  score: number;
  grade: string;
  feedback: string[];
} => {
  const checklist = generatePublishingChecklist(post);
  const suggestions = getSEOOptimizationSuggestions(post, checklist);
  
  let score = 0;
  const maxScore = 10;
  
  // Scoring criteria
  if (checklist.h1CountCorrect) score += 1;
  if (checklist.primaryKeywordInTitle) score += 1;
  if (checklist.primaryKeywordInMeta) score += 1;
  if (checklist.primaryKeywordInH1) score += 1;
  if (checklist.primaryKeywordInFirst100Words) score += 1;
  if (checklist.hasInternalLinks) score += 1;
  if (checklist.hasExternalAuthorityLink) score += 1;
  if (checklist.hasStrongCTA) score += 1;
  if (checklist.wordCount >= 500) score += 1;
  if (checklist.wordCount >= 1000) score += 1;
  
  const percentage = (score / maxScore) * 100;
  
  let grade: string;
  let feedback: string[] = [];
  
  if (percentage >= 90) {
    grade = 'A+';
    feedback.push('Excellent! Content is well-optimized and ready for publication.');
  } else if (percentage >= 80) {
    grade = 'A';
    feedback.push('Very good! Minor optimizations needed.');
  } else if (percentage >= 70) {
    grade = 'B';
    feedback.push('Good content, but several SEO optimizations needed.');
  } else if (percentage >= 60) {
    grade = 'C';
    feedback.push('Content needs significant SEO improvements.');
  } else {
    grade = 'D';
    feedback.push('Content requires major optimization before publishing.');
  }
  
  // Add specific feedback
  if (suggestions.length > 0) {
    feedback.push('Areas for improvement:');
    feedback.push(...suggestions);
  }
  
  return { score, grade, feedback };
};

// Pre-publishing checklist
export const getPrePublishingChecklist = (post: BlogPostSchema): string[] => {
  const checklist = generatePublishingChecklist(post);
  const steps = generatePublishingSteps(post);
  const requiredSteps = steps.filter(step => step.required && !step.completed);
  
  return requiredSteps.map(step => step.description);
};

// Post-publishing tasks
export const getPostPublishingTasks = (post: BlogPostSchema): string[] => {
  return [
    'Test Open Graph preview on social media platforms',
    'Submit URL to Google Search Console',
    'Share on social media channels',
    'Monitor analytics for performance',
    'Update internal linking from other posts',
    'Submit to relevant directories if applicable'
  ];
};

// Content optimization recommendations
export const getOptimizationRecommendations = (post: BlogPostSchema): {
  keyword: string[];
  content: string[];
  technical: string[];
} => {
  const checklist = generatePublishingChecklist(post);
  const suggestions = getSEOOptimizationSuggestions(post, checklist);
  
  const keyword: string[] = [];
  const content: string[] = [];
  const technical: string[] = [];
  
  suggestions.forEach(suggestion => {
    if (suggestion.includes('keyword')) {
      keyword.push(suggestion);
    } else if (suggestion.includes('link') || suggestion.includes('CTA')) {
      content.push(suggestion);
    } else {
      technical.push(suggestion);
    }
  });
  
  return { keyword, content, technical };
};

// Publishing readiness score
export const calculatePublishingReadiness = (post: BlogPostSchema): {
  readiness: number;
  status: string;
  nextSteps: string[];
} => {
  const steps = generatePublishingSteps(post);
  const requiredSteps = steps.filter(step => step.required);
  const completedRequired = requiredSteps.filter(step => step.completed);
  
  const readiness = (completedRequired.length / requiredSteps.length) * 100;
  
  let status: string;
  let nextSteps: string[] = [];
  
  if (readiness === 100) {
    status = 'Ready to Publish';
    nextSteps = ['Review final content', 'Set publication date', 'Publish and promote'];
  } else if (readiness >= 75) {
    status = 'Almost Ready';
    nextSteps = requiredSteps
      .filter(step => !step.completed)
      .map(step => step.description);
  } else if (readiness >= 50) {
    status = 'Needs Work';
    nextSteps = requiredSteps
      .filter(step => !step.completed)
      .map(step => step.description);
  } else {
    status = 'Not Ready';
    nextSteps = ['Complete all required optimization steps'];
  }
  
  return { readiness, status, nextSteps };
};
