'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import { useAuthModal } from '@/context/AuthModalContext'; // Import useAuthModal

const LandingPage = () => {
  const { authModalState: authModal } = useAuthModal(); // Use authModalState from context
  const [user, loading, error] = useAuthState(auth);
  
  // Features data
  const features = [
    {
      icon: "fas fa-code",
      title: "Coding Challenges",
      description: "Sharpen your skills with hundreds of coding problems ranging from easy to expert level."
    },
    {
      icon: "fas fa-trophy",
      title: "Contests",
      description: "Compete in weekly coding contests and climb the leaderboard to prove your skills."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Interview Prep",
      description: "Prepare for technical interviews with company-specific questions and mock interviews."
    },
    {
      icon: "fas fa-users",
      title: "Community",
      description: "Join a community of developers, discuss solutions, and learn from others."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-layer-2 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master Coding Interviews with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">CodeSpace</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The best platform to prepare for coding interviews. Practice with hundreds of problems, participate in contests, and land your dream job.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md">
                Start Practicing
              </button>
              <button className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:bg-dark-fill-3 transition-all">
                Explore Problems
              </button>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 border-2 border-dark-fill-2"></div>
                <div className="w-12 h-12 rounded-full bg-green-900 border-2 border-dark-fill-2"></div>
                <div className="w-12 h-12 rounded-full bg-yellow-900 border-2 border-dark-fill-2"></div>
                <div className="w-12 h-12 rounded-full bg-purple-900 border-2 border-dark-fill-2"></div>
              </div>
              <p className="ml-4 text-gray-300"><span className="font-semibold">10,000+</span> developers practicing now</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-800 to-cyan-900 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-dark-fill-2 rounded-xl p-6 shadow-xl border border-dark-border">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm font-mono bg-dark-fill-3 px-3 py-1 rounded text-gray-300">Problem #215</div>
                  <div className="flex">
                    <span className="px-2 py-1 bg-green-700 text-green-200 text-xs font-medium rounded">Easy</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-4 text-white">Two Sum</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                </p>
                <div className="bg-dark-fill-3 p-4 rounded-lg font-mono text-sm mb-6">
                  <div>Input: nums = [2,7,11,15], target = 9</div>
                  <div>Output: [0,1]</div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Solve Problem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-dark-layer-2 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose CodeSpace?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide everything you need to ace your coding interviews and improve your problem-solving skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-dark-fill-2 p-6 rounded-xl hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-dark-fill-3 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-blue-400 text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Coding Problems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Contests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-dark-layer-2">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to improve your coding skills?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of developers using CodeSpace to prepare for coding interviews and master algorithms.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md">
            Create Your Account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="hover:text-white transition"><i className="fab fa-github text-lg"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-twitter text-lg"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin text-lg"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-discord text-lg"></i></a>
            </div>
            <p>© 2023 CodeSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {authModal.isOpen && <AuthModal />}
    </div>
  );
};

export default LandingPage;