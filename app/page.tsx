import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-1 flex-col justify-center items-center px-4 text-center">
        <h1 className="font-bold text-green-400 text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 mt-18">
          Sanglok
        </h1>
        <p className="text-red-400 text-xl sm:text-2xl md:text-3xl mb-8">
          is under construction
        </p>
        
        {/* Temporary content to enable scrolling */}
        <div className="mt-20 space-y-8 max-w-4xl">
          <section className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">About SangLok</h2>
            <p className="text-gray-700 dark:text-gray-300">
              SangLok is a powerful project management tool designed specifically for developers. 
              It streamlines workflows, enhances collaboration, and helps teams deliver better software faster.
            </p>
          </section>
          
          <section className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Advanced task management</li>
              <li>• Real-time collaboration</li>
              <li>• Git integration</li>
              <li>• Code review tools</li>
              <li>• Team analytics and much more</li>
            </ul>
          </section>
          
          <section className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We&apos;re working hard to bring you the best project management experience. 
              Stay tuned for updates and early access opportunities.
            </p>
          </section>
          
          {/* Extra spacing to ensure scrolling */}
          <div className="h-96"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
