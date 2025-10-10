import React, { useMemo, useCallback } from 'react';

// Custom hook for performance optimization
export const usePerformance = () => {
  // Memoize expensive calculations
  const memoizedValue = useMemo(() => {
    // Add any expensive calculations here
    return {
      timestamp: Date.now(),
      // Other computed values
    };
  }, []);

  // Memoize callback functions
  const memoizedCallback = useCallback((value: any) => {
    // Add callback logic here
    console.log('Memoized callback executed:', value);
  }, []);

  return {
    memoizedValue,
    memoizedCallback,
  };
};

// Hook for intersection observer (lazy loading)
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options]);

  return isIntersecting;
};
