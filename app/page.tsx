import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/Home/HeroSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import IntegrationsSection from '@/components/Home/IntegrationsSection';
import PricingSection from '@/components/Home/PricingSection';
import FAQSection from '@/components/Home/FAQSection';
import CTASection from '@/components/Home/CTASection';
import { TextScroll } from '@/components/ui/text-scroll';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <TextScroll text="- Welcome to SangLok" />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
