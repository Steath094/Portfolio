import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DSA from './components/DSA';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils/scrollUtils';
import { useTypingEffect } from './hooks/useTypingEffect';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'BackEnd Specialist', 'Creative Coder'];
  const typedText = useTypingEffect(roles);
  
  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
      />
      
      <Hero
        typedText={typedText}
        scrollToSection={handleScrollToSection}
      />
      
      <About />
      <Skills />
      <DSA />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;