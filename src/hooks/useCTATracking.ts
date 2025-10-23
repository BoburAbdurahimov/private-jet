import { useCallback } from 'react';

interface CTATrackingOptions {
  buttonText?: string;
  location?: string;
  category?: string;
}

export const useCTATracking = () => {
  const trackCTA = useCallback((options: CTATrackingOptions = {}) => {
    const {
      buttonText = 'CTA Button',
      location = window.location.href,
      category = 'engagement'
    } = options;

    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        'event_category': category,
        'event_label': buttonText,
        'page_location': location,
        'value': 1
      });
    }

    // Vercel Analytics tracking
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('track', 'CTA Click', {
        button: buttonText,
        location: location
      });
    }

    // Console log for debugging
    console.log('CTA Clicked:', {
      button: buttonText,
      location: location,
      timestamp: new Date().toISOString()
    });
  }, []);

  return { trackCTA };
};

export default useCTATracking;
