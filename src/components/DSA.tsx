import React from 'react';
import { ExternalLink } from 'lucide-react';

const DSA: React.FC = () => {
  return (
    <section id="dsa" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Data Structures & Algorithms
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">
              Problem Solving Journey
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              I'm passionate about algorithmic problem solving and have been consistently 
              practicing on various coding platforms. My focus is on building strong 
              fundamentals in data structures and algorithms.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Through regular practice, I've developed skills in dynamic programming, 
              graph algorithms, tree traversals, and optimization techniques.
            </p>
            
            <a 
              href="https://leetcode.com/u/steath094/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              <span>View LeetCode Profile</span>
            </a>
          </div>
          
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700/50 text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-400 mb-3 sm:mb-4">400+</div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Problems Solved</h4>
              <p className="text-sm sm:text-base text-gray-400">Across various difficulty levels</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-slate-700/50 text-center">
                <div className="text-lg sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2">Easy</div>
                <p className="text-xs sm:text-base text-gray-400">150+ solved</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-slate-700/50 text-center">
                <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-1 sm:mb-2">Medium</div>
                <p className="text-xs sm:text-base text-gray-400">200+ solved</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-slate-700/50 text-center">
                <div className="text-lg sm:text-2xl font-bold text-red-400 mb-1 sm:mb-2">Hard</div>
                <p className="text-xs sm:text-base text-gray-400">50+ solved</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-slate-700/50 text-center">
                <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1 sm:mb-2">Topics</div>
                <p className="text-xs sm:text-base text-gray-400">Arrays, DP, Graphs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSA;