'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import ThemeToggleButton from "../ui/theme-toggle-button"


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Prevent hydration mismatch
useEffect(()=>{
  setMounted(true);
},[]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
             height={60} 
             width={60}
             className="logo-image"
             priority
           />
          </div>
          <span className="logo-text">SangLok</span>
        </Link>
        

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#" className="nav-link">
            Features
          </Link>
          <Link href="#" className="nav-link">
            About Us
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          {/* <button className="theme-toggle" aria-label="Toggle theme">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
              <path d="m12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button> */}<ThemeToggleButton />

          {/* Get Started Button */}
          <Link href="/sign-in" className="get-started-btn">
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
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
          <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </Link>
          <Link href="/pricing" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/get-started" className="mobile-get-started-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;