import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Join thousands of teams already using SangLok to deliver better software faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-blue-600">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
