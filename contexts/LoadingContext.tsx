'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isNavigatingRef = useRef(false);

  const startLoading = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Only start loading if not already loading
    if (!isNavigatingRef.current) {
      isNavigatingRef.current = true;
      setIsLoading(true);
    }
  }, []);

  const stopLoading = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Add a minimum loading time for smoother experience
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      isNavigatingRef.current = false;
    }, 300);
  }, []);

  // Enhanced navigation detection
  useEffect(() => {
    let isUnmounted = false;

    // Handle programmatic navigation
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(state: unknown, title: string, url?: string | null) {
      if (!isUnmounted && url && url !== window.location.pathname && url !== window.location.href) {
        startLoading();
      }
      return originalPushState.call(window.history, state, title, url);
    };

    window.history.replaceState = function(state: unknown, title: string, url?: string | null) {
      if (!isUnmounted && url && url !== window.location.pathname && url !== window.location.href) {
        startLoading();
      }
      return originalReplaceState.call(window.history, state, title, url);
    };

    // Handle back/forward navigation
    const handlePopState = () => {
      if (!isUnmounted) {
        startLoading();
        // Auto-stop after navigation
        setTimeout(() => {
          if (!isUnmounted) {
            stopLoading();
          }
        }, 800);
      }
    };

    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (!isUnmounted && document.visibilityState === 'visible') {
        // Page became visible, likely finished loading
        setTimeout(() => {
          if (!isUnmounted) {
            stopLoading();
          }
        }, 100);
      }
    };

    // Add event listeners
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Stop loading on initial mount
    const initialTimeout = setTimeout(() => {
      if (!isUnmounted) {
        stopLoading();
      }
    }, 100);

    return () => {
      isUnmounted = true;
      
      // Cleanup
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Restore original methods
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      
      // Clear timeouts
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startLoading, stopLoading]);

  const value = {
    isLoading,
    setIsLoading,
    startLoading,
    stopLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;