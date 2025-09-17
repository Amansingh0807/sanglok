'use client';

import React, { useState } from 'react';
import LoadingLink from '@/components/ui/loading-link';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Github, 
  User, 
  Building, 
  Users, 
  Target, 
  Briefcase,
  CheckCircle,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface StepProps {
  step: number;
  totalSteps: number;
  currentStep: number;
}

const ProgressBar: React.FC<StepProps> = ({ step, totalSteps, currentStep }) => {
  const isCompleted = step < currentStep;
  const isCurrent = step === currentStep;
  
  return (
    <div className="flex items-center">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
        isCompleted 
          ? 'bg-blue-600 text-white' 
          : isCurrent 
            ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' 
            : 'bg-gray-200 text-gray-500'
      }`}>
        {isCompleted ? <CheckCircle className="w-4 h-4" /> : step}
      </div>
      {step < totalSteps && (
        <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
          isCompleted ? 'bg-blue-600' : 'bg-gray-200'
        }`} />
      )}
    </div>
  );
};

const SignUp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    
    // Step 2: Professional Info
    company: '',
    role: '',
    teamSize: '',
    
    // Step 3: Goals & Preferences
    primaryGoal: '',
    interests: [] as string[],
    notifications: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Sign up data:', formData);
    setIsLoading(false);
    
    // Here you would typically redirect to a welcome page or dashboard
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Create your account
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Let&apos;s get started with your basic information
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  First name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Tell us about your work
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                This helps us customize your experience
              </p>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Company name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Your role
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                >
                  <option value="">Select your role</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Project Manager</option>
                  <option value="analyst">Business Analyst</option>
                  <option value="qa">QA Engineer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Team Size */}
            <div className="space-y-2">
              <label htmlFor="teamSize" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Team size
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                >
                  <option value="">Select team size</option>
                  <option value="1">Just me</option>
                  <option value="2-5">2-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51+">51+ people</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                What&apos;s your main goal?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Help us tailor your experience
              </p>
            </div>

            {/* Primary Goal */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Primary goal
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { value: 'project-management', label: 'Project Management', icon: Target },
                  { value: 'team-collaboration', label: 'Team Collaboration', icon: Users },
                  { value: 'task-tracking', label: 'Task Tracking', icon: CheckCircle },
                  { value: 'business-growth', label: 'Business Growth', icon: Sparkles }
                ].map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <label
                      key={goal.value}
                      className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                        formData.primaryGoal === goal.value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="primaryGoal"
                        value={goal.value}
                        checked={formData.primaryGoal === goal.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <Icon className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {goal.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Areas of interest (optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {['Analytics', 'Automation', 'Integration', 'Reporting', 'Security', 'Mobile'].map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      formData.interests.includes(interest)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Email notifications
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get updates about your projects and team activity
                </p>
              </div>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-blue-100/20 to-indigo-100/20"></div>
      </div>
      
      {/* Main Container */}
      <div className="relative w-full max-w-lg">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Join SangLok
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center mb-8">
          <ProgressBar step={1} totalSteps={3} currentStep={currentStep} />
          <ProgressBar step={2} totalSteps={3} currentStep={currentStep} />
          <ProgressBar step={3} totalSteps={3} currentStep={currentStep} />
        </div>

        {/* Sign Up Card */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
          <form onSubmit={currentStep === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <span>{currentStep === 3 ? 'Create Account' : 'Continue'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Social Sign Up - Only on first step */}
          {currentStep === 1 && (
            <>
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <LoadingLink href="/sign-in" className="text-blue-600 hover:text-blue-500 font-semibold">
              Sign in
            </LoadingLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;