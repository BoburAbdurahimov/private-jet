import { useEffect } from 'react';

// Speed Insights component for React/Vite applications
const SpeedInsights = () => {
  useEffect(() => {
    // Only load Speed Insights in production
    if (process.env.NODE_ENV === 'production') {
      // Check if Speed Insights is already loaded
      if (window.va) {
        return;
      }

      // Load the Speed Insights script
      const script = document.createElement('script');
      script.src = 'https://cdn.vercel-insights.com/v1/script.debug.js';
      script.async = true;
      script.defer = true;
      
      // Add error handling
      script.onerror = () => {
        console.warn('Failed to load Vercel Speed Insights');
      };
      
      // Add the script to the document head
      document.head.appendChild(script);
      
      // Cleanup function to remove the script if component unmounts
      return () => {
        const existingScript = document.querySelector('script[src="https://cdn.vercel-insights.com/v1/script.debug.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  // This component doesn't render anything visible
  return null;
};

// TypeScript declaration for window.va
declare global {
  interface Window {
    va?: (event: string, properties?: Record<string, any>) => void;
  }
}

export default SpeedInsights;
