import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-400">
          © 2025 Sameer Khan. Made with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;