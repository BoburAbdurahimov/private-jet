import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSense = ({ 
  adSlot, 
  adFormat = "auto", 
  adLayout, 
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}: AdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const initializeAd = () => {
      if (
        typeof window !== 'undefined' && 
        (window as any).adsbygoogle && 
        !isInitialized.current &&
        adRef.current
      ) {
        const adElement = adRef.current.querySelector('.adsbygoogle');
        if (adElement && !adElement.hasAttribute('data-ad-status')) {
          try {
            // Check if adsbygoogle is available and not already processing
            if ((window as any).adsbygoogle && Array.isArray((window as any).adsbygoogle)) {
              ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
              isInitialized.current = true;
            }
          } catch (error) {
            // AdSense already initialized or error occurred - this is expected
            console.log('AdSense initialization handled:', error.message || 'Already initialized');
            isInitialized.current = true;
          }
        }
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      const timeoutId = setTimeout(initializeAd, 100);
      return () => clearTimeout(timeoutId);
    });
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [adSlot]);

  return (
    <div ref={adRef}>
      <ins 
        className={`adsbygoogle ${className}`}
        style={style}
        data-ad-client="ca-pub-2824780291268916"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSense;
