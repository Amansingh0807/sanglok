'use client';

import React, { useEffect, useState } from 'react';

interface RouteLoaderProps {
  isLoading: boolean;
}

const RouteLoader: React.FC<RouteLoaderProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      // Add entrance animation after a tiny delay for smoother transition
      const timeout = setTimeout(() => {
        setAnimationClass('animate-in');
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      // Start exit animation
      setAnimationClass('animate-out');
      // Remove from DOM after animation completes
      const timeout = setTimeout(() => {
        setShouldRender(false);
        setAnimationClass('');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div className={`loader-overlay ${animationClass}`}>
      {/* Main loader container */}
      <div className="loader-content">
        {/* Logo/Brand */}
        <div className="loader-logo">
          <div className="logo-container">
            <span className="logo-text">S</span>
          </div>
        </div>

        {/* Animated dots loader */}
        <div className="loader-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>

        {/* Progress bar */}
        <div className="loader-progress">
          <div className="progress-bar"></div>
        </div>

        {/* Loading text */}
        <p className="loader-text">Loading...</p>

        {/* Floating circles animation */}
        <div className="floating-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="loader-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <style jsx>{`
        .loader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        :global(.dark) .loader-overlay {
          background: rgba(15, 23, 42, 0.85);
        }

        .loader-overlay.animate-in {
          opacity: 1;
          transform: scale(1);
        }

        .loader-overlay.animate-out {
          opacity: 0;
          transform: scale(0.95);
        }

        .loader-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .loader-logo {
          margin-bottom: 2rem;
        }

        .logo-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #3b82f6 0%, #ec4899 50%, #1f2937 100%);
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          animation: logo-pulse 2s ease-in-out infinite;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .loader-dots {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }

        .dot-1 {
          background: #3b82f6;
          animation-delay: -0.32s;
        }

        .dot-2 {
          background: #ec4899;
          animation-delay: -0.16s;
        }

        .dot-3 {
          background: #1f2937;
        }

        :global(.dark) .dot-3 {
          background: #f1f5f9;
        }

        .loader-progress {
          width: 12rem;
          height: 0.25rem;
          background: rgba(148, 163, 184, 0.2);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #ec4899 50%, #1f2937 100%);
          border-radius: 9999px;
          animation: progress 2s ease-in-out infinite;
        }

        .loader-text {
          margin-top: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
          animation: text-pulse 2s ease-in-out infinite;
        }

        :global(.dark) .loader-text {
          color: #94a3b8;
        }

        .floating-circles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          animation: float 4s ease-in-out infinite;
        }

        .circle-1 {
          top: -2.5rem;
          left: -2.5rem;
          width: 1rem;
          height: 1rem;
          background: rgba(59, 130, 246, 0.2);
          animation-delay: 0s;
        }

        .circle-2 {
          top: -1.5rem;
          right: -2rem;
          width: 0.75rem;
          height: 0.75rem;
          background: rgba(236, 72, 153, 0.2);
          animation-delay: 1s;
        }

        .circle-3 {
          bottom: -2rem;
          left: -1.5rem;
          width: 0.5rem;
          height: 0.5rem;
          background: rgba(31, 41, 55, 0.2);
          animation-delay: 2s;
        }

        .circle-4 {
          bottom: -1rem;
          right: -2.5rem;
          width: 1.25rem;
          height: 1.25rem;
          background: rgba(59, 130, 246, 0.15);
          animation-delay: 0.5s;
        }

        .loader-background {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          pointer-events: none;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: bg-float 6s ease-in-out infinite;
        }

        .bg-shape-1 {
          top: 25%;
          left: 25%;
          width: 8rem;
          height: 8rem;
          background: #3b82f6;
          animation-delay: 0s;
        }

        .bg-shape-2 {
          top: 60%;
          right: 25%;
          width: 6rem;
          height: 6rem;
          background: #ec4899;
          animation-delay: 2s;
        }

        .bg-shape-3 {
          bottom: 25%;
          left: 33%;
          width: 7rem;
          height: 7rem;
          background: #1f2937;
          animation-delay: 4s;
        }

        @keyframes logo-pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }
          50% {
            transform: scale(1.05) rotate(1deg);
            box-shadow: 0 15px 35px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0.8) translateY(0);
            opacity: 0.7;
          }
          40% {
            transform: scale(1.2) translateY(-0.5rem);
            opacity: 1;
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes text-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }

        @keyframes bg-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RouteLoader;