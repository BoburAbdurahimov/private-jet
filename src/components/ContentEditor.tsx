import React, { useState, useEffect } from 'react';
import { BlogPostSchema, PublishingChecklist } from '@/types/cms';
import { validateBlogPost, generatePublishingChecklist, getSEOOptimizationSuggestions } from '@/utils/contentValidator';

interface ContentEditorProps {
  post?: BlogPostSchema;
  onSave: (post: BlogPostSchema) => void;
  onPublish: (post: BlogPostSchema) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ post, onSave, onPublish }) => {
  const [formData, setFormData] = useState<BlogPostSchema>({
    title: '',
    slug: '',
    description: '',
    coverImage: '',
    body: '',
    date: new Date().toISOString(),
    primaryKeyword: '',
    secondaryKeywords: [],
    tags: [],
    ogTitle: '',
    ogImage: '',
    canonical: '',
    h1Count: 0,
    h2Count: 0,
    h3Count: 0,
    primaryKeywordInTitle: false,
    primaryKeywordInMeta: false,
    primaryKeywordInH1: false,
    primaryKeywordInFirst100: false,
    primaryKeywordInAltText: false,
    primaryKeywordInSubheader: false,
    internalLinks: 0,
    externalLinks: 0,
    ctaCount: 0,
    published: false,
    scheduled: false,
    draft: true,
    views: 0,
    likes: 0,
    shares: 0,
    author: 'Managerius Editorial',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const [checklist, setChecklist] = useState<PublishingChecklist | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

  useEffect(() => {
    const validation = validateBlogPost(formData);
    setValidationErrors(validation.errors);
    
    const newChecklist = generatePublishingChecklist(formData);
    setChecklist(newChecklist);
    
    const newSuggestions = getSEOOptimizationSuggestions(formData, newChecklist);
    setSuggestions(newSuggestions);
  }, [formData]);

  const handleInputChange = (field: keyof BlogPostSchema, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      updatedAt: new Date().toISOString()
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handlePublish = () => {
    if (validationErrors.length === 0) {
      onPublish({ ...formData, published: true, draft: false });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    handleInputChange('title', title);
    if (!formData.slug) {
      handleInputChange('slug', generateSlug(title));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Content Editor</h2>
            
            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter blog post title..."
              />
            </div>

            {/* Slug */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Slug *</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="url-friendly-slug"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Meta Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="SEO meta description (max 160 characters)..."
                maxLength={160}
              />
              <p className="text-sm text-gray-500 mt-1">{formData.description.length}/160</p>
            </div>

            {/* Primary Keyword */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Primary Keyword *</label>
              <input
                type="text"
                value={formData.primaryKeyword}
                onChange={(e) => handleInputChange('primaryKeyword', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="main seo keyword"
              />
            </div>

            {/* Cover Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Cover Image URL</label>
              <input
                type="url"
                value={formData.coverImage}
                onChange={(e) => handleInputChange('coverImage', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Content Body */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Content Body *</label>
              <textarea
                value={formData.body}
                onChange={(e) => handleInputChange('body', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={15}
                placeholder="Write your blog post content in markdown..."
              />
            </div>

            {/* Tags */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={(e) => handleInputChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tag1, tag2, tag3"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Draft
              </button>
              <button
                onClick={handlePublish}
                disabled={validationErrors.length > 0}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Publish
              </button>
            </div>
          </div>
        </div>

        {/* Publishing Checklist Sidebar */}
        <div className="space-y-6">
          {/* Validation Errors */}
          {validationErrors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Validation Errors</h3>
              <ul className="text-sm text-red-700 space-y-1">
                {validationErrors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Publishing Checklist */}
          {checklist && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Publishing Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.urlSlugContainsPrimaryKeyword ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">URL slug contains primary keyword</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.h1CountCorrect ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">Exactly 1 H1 heading</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.primaryKeywordInTitle ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">Primary keyword in title</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.primaryKeywordInMeta ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">Primary keyword in meta description</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.primaryKeywordInH1 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">Primary keyword in H1</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.primaryKeywordInFirst100Words ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">Primary keyword in first 100 words</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.hasInternalLinks ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">1-2 internal links</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.hasExternalAuthorityLink ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">1 external authority link</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-3 ${checklist.hasStrongCTA ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-sm">1 strong CTA to Managerius.com</span>
                </div>
              </div>
            </div>
          )}

          {/* SEO Suggestions */}
          {suggestions.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">SEO Suggestions</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>• {suggestion}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Content Stats */}
          {checklist && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Content Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Word Count:</span>
                  <span className="font-medium">{checklist.wordCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Reading Time:</span>
                  <span className="font-medium">{checklist.readingTime} min</span>
                </div>
                <div className="flex justify-between">
                  <span>Internal Links:</span>
                  <span className="font-medium">{formData.internalLinks}</span>
                </div>
                <div className="flex justify-between">
                  <span>External Links:</span>
                  <span className="font-medium">{formData.externalLinks}</span>
                </div>
                <div className="flex justify-between">
                  <span>CTAs:</span>
                  <span className="font-medium">{formData.ctaCount}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
