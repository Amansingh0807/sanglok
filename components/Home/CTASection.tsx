import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-r from-zinc-950 via-zinc-900 to-orange-600">
      <div className="absolute -top-16 -left-10 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-16 right-0 w-72 h-72 bg-zinc-200/20 rounded-full blur-3xl animate-float-slow"></div>

      <div className="max-w-4xl mx-auto text-center relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 md:p-12 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
          Join thousands of teams already using SangLok to deliver better software faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-orange-600 hover:-translate-y-1">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
