import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-1 flex-col justify-center items-center px-4 text-center">
        <h1 className="font-bold text-green-400 text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6">
          Sanglok
        </h1>
        <p className="text-red-400 text-xl sm:text-2xl md:text-3xl">
          is under construction
        </p>
      </main>

      <Footer />
    </div>
  );
}
