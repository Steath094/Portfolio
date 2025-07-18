import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">
              Passionate Fresher Ready to Learn
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              As a recent computer science graduate, I'm passionate about creating 
              beautiful, functional, and user-friendly applications. I love learning 
              new technologies and turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I believe in the power of clean code, intuitive design, and continuous 
              learning. Whether it's building responsive web applications, solving 
              algorithmic challenges, or crafting seamless user experiences, I'm always 
              excited to take on new challenges and grow as a developer.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 bg-slate-800 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <MapPin size={16} className="text-blue-400" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <Mail size={16} className="text-blue-400" />
                <span>john@example.com</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-emerald-400">Education</h4>
              <div className="border-l-2 border-blue-400 pl-4">
                <h5 className="font-semibold text-sm sm:text-base">Computer Science, BS</h5>
                <p className="text-sm text-gray-400">University of Technology • 2015 - 2019</p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-emerald-400">Status</h4>
              <div className="border-l-2 border-blue-400 pl-4">
                <h5 className="font-semibold text-sm sm:text-base">Fresh Graduate</h5>
                <p className="text-sm text-gray-400">Ready to start my tech journey • 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;