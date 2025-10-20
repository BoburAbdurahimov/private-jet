import { useCallback } from 'react';

// Custom hook for Speed Insights analytics
export const useSpeedInsights = () => {
  // Track custom events
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.va) {
      window.va('track', eventName, properties);
    }
  }, []);

  // Track page views
  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.va) {
      window.va('track', 'page_view', {
        page: pageName,
        ...properties
      });
    }
  }, []);

  // Track user interactions
  const trackInteraction = useCallback((interaction: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.va) {
      window.va('track', 'user_interaction', {
        interaction,
        ...properties
      });
    }
  }, []);

  // Track performance metrics
  const trackPerformance = useCallback((metric: string, value: number, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.va) {
      window.va('track', 'performance_metric', {
        metric,
        value,
        ...properties
      });
    }
  }, []);

  // Track business events
  const trackBusinessEvent = useCallback((event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.va) {
      window.va('track', 'business_event', {
        event,
        ...properties
      });
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackInteraction,
    trackPerformance,
    trackBusinessEvent
  };
};

// Predefined events for common interactions
export const SpeedInsightsEvents = {
  // Navigation events
  NAVIGATION: {
    HOME_CLICK: 'home_click',
    BLOG_CLICK: 'blog_click',
    CONTACT_CLICK: 'contact_click',
    JET_LUXE_CLICK: 'jet_luxe_click',
    AFFILIATES_CLICK: 'affiliates_click'
  },
  
  // Blog events
  BLOG: {
    POST_VIEW: 'blog_post_view',
    POST_SHARE: 'blog_post_share',
    POST_LIKE: 'blog_post_like',
    POST_COMMENT: 'blog_post_comment',
    SEARCH: 'blog_search'
  },
  
  // Business events
  BUSINESS: {
    QUOTE_REQUEST: 'quote_request',
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    AFFILIATE_CLICK: 'affiliate_click',
    CTA_CLICK: 'cta_click'
  },
  
  // Performance events
  PERFORMANCE: {
    PAGE_LOAD: 'page_load',
    IMAGE_LOAD: 'image_load',
    API_CALL: 'api_call',
    ERROR_OCCURRED: 'error_occurred'
  }
} as const;
