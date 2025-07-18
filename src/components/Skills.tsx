import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, icon: Code },
    { name: 'TypeScript', level: 90, icon: Code },
    { name: 'Node.js', level: 85, icon: Code },
    { name: 'Docker', level: 75, icon: Code },
    { name: 'UI/UX Design', level: 80, icon: Palette },
    { name: 'Mobile Development', level: 75, icon: Smartphone },
    { name: 'Cloud Services', level: 70, icon: Globe }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <skill.icon className="text-blue-400 mr-2 sm:mr-3" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;