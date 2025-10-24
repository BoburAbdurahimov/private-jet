import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes = '100vw',
  onError,
  onLoad
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    onError?.(e);
  };

  // Generate optimized image paths
  const getOptimizedPaths = (originalSrc: string) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop();
    
    return {
      avif: `${baseName}.avif`,
      webp: `${baseName}.webp`,
      mobileAvif: `${baseName}-mobile.avif`,
      mobileWebp: `${baseName}-mobile.webp`,
      fallback: originalSrc
    };
  };

  const paths = getOptimizedPaths(src);

  if (imageError) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture>
      {/* Desktop AVIF */}
      <source 
        srcSet={paths.avif} 
        type="image/avif" 
        media="(min-width: 1024px)"
        sizes={sizes}
      />
      {/* Desktop WebP */}
      <source 
        srcSet={paths.webp} 
        type="image/webp" 
        media="(min-width: 1024px)"
        sizes={sizes}
      />
      {/* Mobile AVIF */}
      <source 
        srcSet={paths.mobileAvif} 
        type="image/avif" 
        media="(max-width: 1023px)"
        sizes={sizes}
      />
      {/* Mobile WebP */}
      <source 
        srcSet={paths.mobileWebp} 
        type="image/webp" 
        media="(max-width: 1023px)"
        sizes={sizes}
      />
      {/* Fallback */}
      <img
        src={paths.fallback}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={handleError}
        onLoad={onLoad}
      />
    </picture>
  );
};

export default OptimizedImage;
