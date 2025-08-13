import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah",
      role: "CTO at Techub",
      company: "TechFlow",
      avatar: "👩‍💻",
      rating: 5,
      text: "SangLok transformed our development workflow. We've reduced project delivery time by 40% and our team collaboration has never been better.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Lead Developer at StartupXYZ",
      company: "StartupXYZ",
      avatar: "👨‍💻",
      rating: 5,
      text: "The Git integration is seamless. Our code reviews are faster, and project tracking is effortless. Best project management tool I've used!",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Emily Johnson",
      role: "Product Manager at InnovateX",
      company: "InnovateX",
      avatar: "👩‍💼",
      rating: 5,
      text: "SangLok's analytics helped us identify bottlenecks we didn't know existed. Our productivity increased by 60% in just 3 months.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "David Kimim",
      role: "Engineering Manager at CloudTechnology",
      company: "CloudTechnology",
      avatar: "👨‍💼", 
      rating: 5,
      text: "Managing a remote team of 25 developers was challenging until we found SangLok. Now everyone stays in sync effortlessly.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of development teams who have transformed their workflow with SangLok
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer transform hover:scale-105 group"
            >
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white text-xl font-bold mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 dark:bg-gray-800 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
