import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-orange-100/70 dark:from-black dark:via-zinc-950 dark:to-orange-950/30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300/40 dark:bg-orange-700/25 rounded-full blur-3xl opacity-40 animate-drift"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-300/40 dark:bg-zinc-700/20 rounded-full blur-3xl opacity-35 animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200/30 dark:bg-orange-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-8 animate-fade-up">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200 border border-orange-200 dark:border-orange-700/40">
            🚀 Now in Beta - Join Early Access
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight animate-fade-up [animation-delay:120ms]">
          Project Management
          <span className="block bg-gradient-to-r from-zinc-900 via-orange-500 to-zinc-700 dark:from-zinc-100 dark:via-orange-400 dark:to-zinc-300 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up [animation-delay:220ms]">
          SangLok transforms how development teams collaborate, track progress, and deliver exceptional software. 
          Experience the future of project management today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up [animation-delay:320ms]">
          <button className="px-8 py-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-orange-500 hover:from-zinc-950 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-orange-500 dark:hover:border-orange-400 font-semibold rounded-xl transition-all duration-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:-translate-y-1">
            Watch Demo
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up [animation-delay:420ms]">
          <div className="text-center rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">50K+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          <div className="text-center rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-float-slow">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
          <div className="text-center rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-orange-500 dark:text-orange-300">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
