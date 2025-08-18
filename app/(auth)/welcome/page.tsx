'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Users, Target, Zap } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = async () => {
    setIsLoading(true);
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Navigate to dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-blue-100/20 to-indigo-100/20"></div>
      </div>
      
      {/* Main Container */}
      <div className="relative w-full max-w-2xl">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to SangLok! 🎉
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Your account has been successfully created. You&apos;re all set to start your journey!
          </p>
        </div>

        {/* Welcome Card */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What&apos;s next?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Here are some quick wins to get you started
            </p>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Create your first project
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Set up your workspace and invite team members
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Invite your team
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Collaborate with colleagues and boost productivity
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Explore features
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Discover powerful tools to streamline your workflow
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Set up automations
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Save time with smart workflows and integrations
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <span>Go to Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            
            <Link
              href="/help"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-xl transition-all duration-200 flex items-center justify-center"
            >
              Get Help
            </Link>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            <span>Pro tip: Start with a template to save time!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
