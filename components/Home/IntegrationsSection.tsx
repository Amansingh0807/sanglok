import React from 'react';

const IntegrationsSection: React.FC = () => {
  const integrations = [
    { name: "GitHub", logo: "🐙", color: "hover:bg-zinc-900" },
    { name: "GitLab", logo: "🦊", color: "hover:bg-orange-500" },
    { name: "Big Bucket", logo: "📘", color: "hover:bg-zinc-800" },
    { name: "Jira", logo: "🔷", color: "hover:bg-zinc-700" },
    { name: "Slack", logo: "📱", color: "hover:bg-orange-600" },
    { name: "Discord", logo: "🎮", color: "hover:bg-zinc-700" },
    { name: "Figma", logo: "🎨", color: "hover:bg-orange-500" },
    { name: "Notion", logo: "📝", color: "hover:bg-zinc-700" },
    { name: "Trello", logo: "📋", color: "hover:bg-zinc-800" },
    { name: "Azure", logo: "☁️", color: "hover:bg-zinc-700" },
    { name: "AWS", logo: "🔶", color: "hover:bg-orange-600" },
    { name: "Docker", logo: "🐳", color: "hover:bg-zinc-800" },
    { name: "Kuber netes", logo: "⚙️", color: "hover:bg-zinc-900" },
    { name: "Jenkins", logo: "🔧", color: "hover:bg-zinc-600" },
    { name: "VS Code", logo: "💻", color: "hover:bg-zinc-800" },
    { name: "Post Man", logo: "📮", color: "hover:bg-orange-500" }
  ];

  const categories = [
    {
      title: "Version Control",
      description: "Seamlessly connect with your repositories",
      tools: ["GitHub", "GitLab", "Bitbucket"],
      icon: "🔄"
    },
    {
      title: "Communication", 
      description: "Keep your team connected and informed",
      tools: ["Slack", "Discord", "Microsoft Teams"],
      icon: "💬"
    },
    {
      title: "Design & Planning",
      description: "Bridge the gap between design and development",
      tools: ["Figma", "Notion", "Trello"],
      icon: "🎨"
    },
    {
      title: "DevOps & Deployment",
      description: "Streamline your deployment pipeline",
      tools: ["AWS", "Azure", "Docker", "Kubernetes"],
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 px-4 bg-zinc-100/70 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Integrates with Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SangLok works seamlessly with the tools you already love. No need to change your workflow.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-110 border border-gray-200 dark:border-gray-700 ${integration.color} hover:text-white`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                  {integration.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer group hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* API Section */}
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Don&apos;t see your tool? No problem!
            </h3>
            <p className="text-xl text-orange-100 mb-6">
              Use our powerful REST API and webhooks to integrate with any tool in your stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                View API Docs
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Request Integration
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Native Integrations</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">API Uptime</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-zinc-700 dark:text-zinc-300 mb-2 group-hover:scale-110 transition-transform duration-300">&lt;100ms</div>
              <div className="text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
