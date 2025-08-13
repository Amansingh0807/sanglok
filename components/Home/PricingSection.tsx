import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "3 projects",
        "Basic task management",
        "Email support",
        "Mobile app access",
        "1GB storage"
      ],
      buttonText: "Get Started Free",
      popular: false,
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Professional", 
      price: "$12",
      period: "/user/month",
      description: "Best for growing development teams",
      features: [
        "Unlimited team members",
        "Unlimited projects", 
        "Advanced analytics",
        "Git integration",
        "Priority support",
        "100GB storage",
        "Custom workflows",
        "Time tracking"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Enterprise",
      price: "$24",
      period: "/user/month", 
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "SSO & Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Unlimited storage",
        "White-label options",
        "Advanced reporting"
      ],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-600">
            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium cursor-pointer transition-all duration-300">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-lg text-gray-600 dark:text-gray-300 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white transition-all duration-300">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer transform hover:scale-105 group ${
                plan.popular 
                  ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900/50' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 cursor-pointer">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
