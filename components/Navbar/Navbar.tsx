'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import LoadingLink from '@/components/ui/loading-link';
import Image from 'next/image';
import './Navbar.css';
import ThemeToggleButton from "../ui/theme-toggle-button"

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  // Determining which logo to use based on theme
  const logoSrc = resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo-white.png';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <div className="logo-icon">
            <Image 
              src={logoSrc} 
              alt="SangLok Logo" 
              height={40} 
              width={40}
              className="logo-image"
              priority
            />
          </div>
          <span className="logo-text">SangLok</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="navbar-links">
          <LoadingLink href="/" className="nav-link">
            Home
          </LoadingLink>
          <LoadingLink href="#features" className="nav-link">
            Features
          </LoadingLink>
          <LoadingLink href="#about" className="nav-link">
            About Us
          </LoadingLink>
          <LoadingLink href="#pricing" className="nav-link">
            Pricing
          </LoadingLink>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <ThemeToggleButton />

          {/* Get Started Button */}
          <LoadingLink href="/sign-in" className="get-started-btn">
            Get Started
          </LoadingLink>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <LoadingLink href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </LoadingLink>
          <LoadingLink href="#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </LoadingLink>
          <LoadingLink href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </LoadingLink>
          <LoadingLink href="#pricing" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </LoadingLink>
          <LoadingLink href="/sign-in" className="mobile-get-started-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Get Started
          </LoadingLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;