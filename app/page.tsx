import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/Home/HeroSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/Home/CTASection';
import { TextScroll } from '@/components/ui/text-scroll';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />
      <HeroSection />
      <TextScroll
        text="- Welcome to SangLok"
        className="text-zinc-900 dark:text-zinc-100 bg-gradient-to-r from-zinc-950 via-orange-500 to-zinc-900 bg-clip-text text-transparent"
      />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
