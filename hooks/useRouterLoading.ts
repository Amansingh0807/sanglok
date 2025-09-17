'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useCallback } from 'react';
import { useLoading } from '@/contexts/LoadingContext';

export const useRouterLoading = () => {
  const pathname = usePathname();
  const { stopLoading } = useLoading();
  const prevPathnameRef = useRef<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleRouteComplete = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Add a small delay for smoother transition
    timeoutRef.current = setTimeout(() => {
      stopLoading();
    }, 120); // Optimized timing for smoothness
  }, [stopLoading]);

  useEffect(() => {
    // Only stop loading if pathname actually changed
    if (prevPathnameRef.current && prevPathnameRef.current !== pathname) {
      handleRouteComplete();
    }
    
    // Update the previous pathname
    prevPathnameRef.current = pathname;

    // Cleanup on unmount or pathname change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, handleRouteComplete]);

  return null;
};

export default useRouterLoading;