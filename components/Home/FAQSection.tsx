'use client'
import  {useState} from 'react';
import React from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does SangLok compare to other project management tools?",
      answer: "SangLok is specifically designed for development teams with deep Git integration, code review workflows, and developer-centric features. Unlike generic project management tools, we understand the unique challenges of software development and provide purpose-built solutions."
    },
    {
      question: "Can I migrate my existing projects from other tools?",
      answer: "Yes! We provide migration tools and dedicated support to help you seamlessly transfer your projects from Jira, Trello, Asana, and other popular project management platforms. Our team will guide you through the entire process."
    },
    {
      question: "Is my data secure with SangLok?",
      answer: "Absolutely. We use bank-grade encryption, SOC 2 compliance, and follow industry best practices. Your data is encrypted at rest and in transit. We also offer SSO, 2FA, and enterprise-grade security features for larger organizations."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all Professional features. No credit card required. You can invite your entire team and test all integrations during the trial period."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 email support for all plans, with priority support for Professional and Enterprise users. Enterprise customers also get dedicated account managers and phone support. Our average response time is under 2 hours."
    },
    {
      question: "Can SangLok scale with my growing team?",
      answer: "Definitely! SangLok is built to scale from small teams to enterprise organizations with thousands of users. Our infrastructure auto-scales, and we offer enterprise features like custom workflows, advanced permissions, and dedicated instances."
    },
    {
      question: "How does the Git integration work?",
      answer: "Our Git integration connects directly with GitHub, GitLab, and Bitbucket. You can link commits to tasks, track code reviews, monitor deployment status, and get insights into your development velocity - all within SangLok's dashboard."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes! Enterprise customers can request custom integrations. We also provide a robust REST API and webhooks that allow you to integrate with any tool in your tech stack. Our developer documentation makes integration straightforward."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about SangLok. Can&apos;t find what you&apos;re looking for? 
            <button className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer ml-1">
              Contact our support team
            </button>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our team is here to help you get the most out of SangLok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer">
              Contact Support
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 cursor-pointer">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
