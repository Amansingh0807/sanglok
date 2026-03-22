'use client'
import React, { useState } from 'react';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "Free",
      annualPrice: "Free",
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
      gradient: "from-zinc-600 to-zinc-800"
    },
    {
      name: "Professional", 
      monthlyPrice: "$12",
      annualPrice: "$96",
      originalAnnualPrice: "$144",
      period: isAnnual ? "/user/year" : "/user/month",
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
      gradient: "from-zinc-900 to-orange-600"
    },
    {
      name: "Enterprise",
      monthlyPrice: "$24",
      annualPrice: "$192",
      originalAnnualPrice: "$288",
      period: isAnnual ? "/user/year" : "/user/month",
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
      gradient: "from-zinc-700 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-zinc-100/70 dark:bg-zinc-950">
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
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-zinc-900 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-zinc-900 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Annual 
              <span className="ml-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border cursor-pointer transform hover:scale-105 group ${
                plan.popular 
                  ? 'border-orange-500 dark:border-orange-400 ring-2 ring-orange-100 dark:ring-orange-900/40' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-zinc-900 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
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
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  
                  {/* Show savings for annual plans */}
                  {isAnnual && plan.originalAnnualPrice && plan.annualPrice !== "Free" && (
                    <div className="mt-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
                        {plan.originalAnnualPrice}/user/year
                      </span>
                      <span className="text-sm bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full font-semibold">
                        Save 33%
                      </span>
                    </div>
                  )}
                  
                  {/* Show monthly equivalent for annual plans */}
                  {isAnnual && plan.annualPrice !== "Free" && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ${Math.round(parseInt(plan.annualPrice.replace('$', '')) / 12)}/user/month billed annually
                      </span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-gradient-to-r from-zinc-900 to-orange-600 hover:from-zinc-950 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
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
          <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 font-semibold rounded-xl hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-zinc-900 transition-all duration-300 cursor-pointer">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
