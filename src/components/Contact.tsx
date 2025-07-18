import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Ready to Connect!</h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I'm actively looking for opportunities to start my career in tech. 
              Let's connect and discuss how I can contribute to your team!
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
              <div className="p-3 sm:p-4 bg-blue-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">LinkedIn</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Professional networking</p>
              <a 
                href="#" 
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
              >
                <span>Connect with me</span>
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
              <div className="p-3 sm:p-4 bg-sky-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Twitter</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Quick conversations</p>
              <a 
                href="#" 
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
              >
                <span>Ping me @username</span>
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="p-3 sm:p-4 bg-emerald-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2">Email</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Direct communication</p>
              <a 
                href="mailto:john@example.com" 
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base"
              >
                <span>john@example.com</span>
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700/50 max-w-2xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-emerald-400">Open to Opportunities</h4>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              I'm actively seeking entry-level positions in software development, 
              particularly in frontend, backend, or full-stack roles. I'm excited to 
              bring fresh perspectives and enthusiasm to your team!
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm">Frontend Developer</span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-xs sm:text-sm">Backend Developer</span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-orange-600/20 text-orange-400 rounded-full text-xs sm:text-sm">Full Stack Developer</span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm">Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;