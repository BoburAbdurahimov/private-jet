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
    // Let Google AdSense handle automatic initialization
    // Only manually push if the ad hasn't been initialized yet
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
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            isInitialized.current = true;
          } catch (error) {
            // AdSense already initialized - this is expected and fine
            console.log('AdSense already initialized');
          }
        }
      }
    };

    // Try to initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeAd, 500);
    
    return () => clearTimeout(timeoutId);
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
