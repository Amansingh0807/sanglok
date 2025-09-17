/**
 * Utility functions for smooth loading transitions
 */

export const LOADING_TIMINGS = {
  START_DELAY: 50,      // Delay before starting loader for ultra-smooth start
  MIN_DURATION: 120,    // Minimum loading duration for smooth perception
  STOP_DELAY: 100,      // Delay before stopping loader for smooth exit
  ANIMATION_ENTER: 300, // Loader entrance animation duration
  ANIMATION_EXIT: 300,  // Loader exit animation duration
} as const;

/**
 * Creates a smooth loading transition with optimal timing
 */
export const createSmoothTransition = (
  startCallback: () => void,
  stopCallback: () => void,
  minDuration: number = LOADING_TIMINGS.MIN_DURATION
) => {
  let startTime: number;
  let isActive = false;

  const start = () => {
    if (isActive) return;
    
    isActive = true;
    startTime = Date.now();
    
    // Start with tiny delay for smoothness
    setTimeout(startCallback, LOADING_TIMINGS.START_DELAY);
  };

  const stop = () => {
    if (!isActive) return;
    
    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(0, minDuration - elapsed);
    
    setTimeout(() => {
      stopCallback();
      isActive = false;
    }, remainingTime + LOADING_TIMINGS.STOP_DELAY);
  };

  return { start, stop, isActive: () => isActive };
};

/**
 * Debounces navigation requests to prevent rapid consecutive navigations
 */
export const debounceNavigation = (callback: () => void, delay: number = 150) => {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(callback, delay);
  };
};

/**
 * Optimizes loader for different navigation types
 */
export const getOptimalLoadingDuration = (navigationType: 'push' | 'replace' | 'back') => {
  switch (navigationType) {
    case 'push':
      return LOADING_TIMINGS.MIN_DURATION + 80; // Slightly longer for new page loads
    case 'replace':
      return LOADING_TIMINGS.MIN_DURATION - 20; // Faster for replacements
    case 'back':
      return LOADING_TIMINGS.MIN_DURATION - 40; // Fastest for back navigation
    default:
      return LOADING_TIMINGS.MIN_DURATION;
  }
};