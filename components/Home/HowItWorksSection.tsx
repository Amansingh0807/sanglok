import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Sign Up & Set Up",
      description: "Create your account in seconds and invite your team members. Our onboarding wizard guides you through the initial setup.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      step: "02", 
      title: "Create Projects",
      description: "Set up your projects with custom workflows, assign team members, and define project goals and deadlines.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      step: "03",
      title: "Collaborate & Track", 
      description: "Work together in real-time, track progress with advanced analytics, and get insights into your team's productivity.",
      icon: (
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      step: "04",
      title: "Deploy & Celebrate",
      description: "Ship your projects faster with streamlined workflows, automated reporting, and integrated deployment tools.",
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1m-2 0V6a2 2 0 00-2 0v1m2 0V4a2 2 0 00-2 0v1m2 0V2a2 2 0 00-2 0v1" />
        </svg>
      ),
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How SangLok Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started in minutes and transform your team&apos;s productivity with our simple 4-step process
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-green-600 opacity-30"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 group cursor-pointer">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  {step.step}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mr-3 group-hover:scale-105 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to streamline your workflow?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join thousands of teams already using SangLok to deliver better software faster.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
