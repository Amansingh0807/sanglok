'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';
import { useCallback, useEffect, useRef } from 'react';

interface LoadingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  replace?: boolean;
  prefetch?: boolean;
}

const LoadingLink: React.FC<LoadingLinkProps> = ({ 
  href, 
  children, 
  className, 
  onClick, 
  replace = false, 
  prefetch = true 
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startLoading, stopLoading } = useLoading();
  const isNavigatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't navigate if it's the same page
    if (href === pathname) {
      e.preventDefault();
      return;
    }

    // Handle external links normally
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    // Handle modifier keys (open in new tab, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    // Prevent default navigation
    e.preventDefault();

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Prevent multiple navigations
    if (isNavigatingRef.current) {
      return;
    }

    isNavigatingRef.current = true;

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }

    // Start loading immediately
    startLoading();

    // Navigate with a tiny delay for smoother transition
    timeoutRef.current = setTimeout(() => {
      try {
        if (replace) {
          router.replace(href);
        } else {
          router.push(href);
        }

        // Auto-stop loading after navigation
        timeoutRef.current = setTimeout(() => {
          stopLoading();
          isNavigatingRef.current = false;
        }, 600); // Slightly longer timeout for smoother experience

      } catch (error) {
        console.error('Navigation error:', error);
        stopLoading();
        isNavigatingRef.current = false;
      }
    }, 50); // Very small delay for ultra-smooth start

  }, [href, pathname, onClick, replace, router, startLoading, stopLoading]);

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};

export default LoadingLink;