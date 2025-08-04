'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up data:', formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white font-[Poppins]">
      {/* Background Circle - Positioned for Sign Up Mode */}
      <div className="absolute top-[-10%] right-[52%] w-[2000px] h-[2000px] bg-gradient-to-br from-[#4481eb] to-[#04befe] rounded-full transform translate-x-full translate-y-[-50%] transition-all duration-[1800ms] ease-in-out z-[6]"></div>

      {/* Forms Container */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-1/2 transform translate-x-[-50%] translate-y-[-50%] transition-all duration-1000 delay-700 ease-in-out z-[5]">
          {/* Sign Up Form */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center px-20 transition-all duration-200 delay-700 overflow-hidden"
          >
            <h2 className="text-4xl text-[#444] mb-3 font-medium">Sign up</h2>
            
            {/* Username Input */}
            <div className="max-w-[380px] w-full bg-[#f0f0f0] my-3 h-14 rounded-full grid grid-cols-[15%_85%] px-2 relative">
              <i className="fas fa-user text-center leading-[55px] text-[#acacac] transition-all duration-500 text-lg"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="bg-transparent outline-none border-none leading-none font-semibold text-lg text-[#333] placeholder-[#aaa] placeholder-font-medium"
              />
            </div>

            {/* Email Input */}
            <div className="max-w-[380px] w-full bg-[#f0f0f0] my-3 h-14 rounded-full grid grid-cols-[15%_85%] px-2 relative">
              <i className="fas fa-envelope text-center leading-[55px] text-[#acacac] transition-all duration-500 text-lg"></i>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-transparent outline-none border-none leading-none font-semibold text-lg text-[#333] placeholder-[#aaa] placeholder-font-medium"
              />
            </div>

            {/* Password Input */}
            <div className="max-w-[380px] w-full bg-[#f0f0f0] my-3 h-14 rounded-full grid grid-cols-[15%_85%] px-2 relative">
              <i className="fas fa-lock text-center leading-[55px] text-[#acacac] transition-all duration-500 text-lg"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-transparent outline-none border-none leading-none font-semibold text-lg text-[#333] placeholder-[#aaa] placeholder-font-medium"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-[150px] bg-[#5995fd] hover:bg-[#4d84e2] border-none outline-none h-12 rounded-full text-white uppercase font-semibold my-3 cursor-pointer transition-all duration-500"
            >
              Sign up
            </button>

            {/* Social Media Section */}
            <p className="py-3 text-base">Or Sign up with social platforms</p>
            <div className="flex justify-center">
              <a href="#" className="h-12 w-12 flex justify-center items-center mx-2 text-[#333] rounded-full border border-[#333] no-underline text-lg transition-all duration-300 hover:text-[#4481eb] hover:border-[#4481eb]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="h-12 w-12 flex justify-center items-center mx-2 text-[#333] rounded-full border border-[#333] no-underline text-lg transition-all duration-300 hover:text-[#4481eb] hover:border-[#4481eb]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-12 w-12 flex justify-center items-center mx-2 text-[#333] rounded-full border border-[#333] no-underline text-lg transition-all duration-300 hover:text-[#4481eb] hover:border-[#4481eb]">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="h-12 w-12 flex justify-center items-center mx-2 text-[#333] rounded-full border border-[#333] no-underline text-lg transition-all duration-300 hover:text-[#4481eb] hover:border-[#4481eb]">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Panels Container */}
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Left Panel - Hidden on Sign Up */}
        <div className="flex flex-col items-end justify-around text-center z-[6] pointer-events-none py-12 px-[12%] pr-[17%]">
          <div className="text-white transition-transform duration-900 delay-600 ease-in-out transform translate-x-[-800px]">
            <h3 className="font-semibold leading-none text-2xl mb-3">New here?</h3>
            <p className="text-base py-3 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="m-0 bg-transparent border-2 border-white w-32 h-10 font-semibold text-sm text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#4481eb]">
              Sign up
            </button>
          </div>
          {/* <img 
            src="/img/log.svg" 
            alt="Sign in illustration" 
            className="w-full transition-transform duration-[1100ms] delay-400 ease-in-out transform translate-x-[-800px]" 
          /> */}
        </div>

        {/* Right Panel */}
        <div className="flex flex-col items-end justify-around text-center z-[6] pointer-events-auto py-12 px-[17%] pr-[12%]">
          <div className="text-white transition-transform duration-900 delay-600 ease-in-out">
            <h3 className="font-semibold leading-none text-2xl mb-3">One of us?</h3>
            <p className="text-base py-3 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Link href="/sign-in">
              <button className="m-0 bg-transparent border-2 border-white w-32 h-10 font-semibold text-sm text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#4481eb]">
                Sign in
              </button>
            </Link>
          </div>
          {/* <img 
            src="/img/register.svg" 
            alt="Sign up illustration" 
            className="w-full transition-transform duration-[1100ms] delay-400 ease-in-out" 
          /> */}
        </div>
      </div>

 
    </div>
  );
};

export default SignUp;