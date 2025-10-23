import { useEffect } from 'react';

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
  useEffect(() => {
    try {
      // Initialize the ad
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins 
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-2824780291268916"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-ad-layout={adLayout}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
};

export default AdSense;
