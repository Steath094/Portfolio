import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  typedText: string;
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ typedText, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                SDK
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Sameer Dawood Khan
          </span>
        </h1>
        
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-300 h-8 sm:h-10 md:h-12">
          <span className="border-r-2 border-blue-400 animate-pulse">{typedText}</span>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          Passionate about creating exceptional digital experiences through clean code and innovative design.
        </p>
        
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
          <a href="https://github.com/Steath094" target='_blank' className="p-2 sm:p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sameer-dawood-khan-161245232/" target='_blank' className="p-2 sm:p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href="mailto:sameerdawoodkhan3@gmail.com" className="p-2 sm:p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;