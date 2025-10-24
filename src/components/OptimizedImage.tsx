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
    // For now, just return the original source since we don't have optimized versions yet
    return {
      avif: originalSrc,
      webp: originalSrc,
      mobileAvif: originalSrc,
      mobileWebp: originalSrc,
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
    <img
      src={src}
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
  );
};

export default OptimizedImage;
