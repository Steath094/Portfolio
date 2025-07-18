import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Recollectly – Knowledge Vault',
      description: 'A Full-Stack personal knowledge base to collect and organize over 1,000+ digital resources including tweets, blogs, YouTube videos, and PDFs',
      tech: ['React', 'Node.js', 'MongoDB', "TypeScript"],
      image: './recollectly.png',
      github: 'https://github.com/Steath094/Recollectly.AI',
      live: 'https://recollectlyai.vercel.app/'
    },
    {
      title: 'SpaceBasix',
      description: 'A Role-based hostel platform supporting 2 user types with tailored dashboards, reducing workflow confusion',
      tech: ['React', 'Tailwind CSS', "Spring Boot", "MongoDB"],
      image: './spacebasicx.png',
      github: 'https://github.com/Steath094/SpaceBasix',
      live: 'https://space-basix.vercel.app/'
    },
    {
      title: 'CollabCanvas',
      description: 'A real-time virtual whiteboard that lets you draw, write, and ideate with others instantly. Create a room, share the link, and watch your team\'s ideas come to life on a shared digital canvas.',
      tech: ['TypeScript', 'MonoRepo/TurboRepo', 'NextJs','Web Sockets','NodeJS'],
      image: './collaby.png',
      github: 'https://github.com/Steath094/DrawApp',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target='_blank' className="p-2 bg-slate-800/80 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    <Github size={16} className="sm:w-4 sm:h-4" />
                  </a>
                  <a href={project.live} target='_blank' className="p-2 bg-slate-800/80 rounded-full hover:bg-emerald-600 transition-colors duration-300">
                    <ExternalLink size={16} className="sm:w-4 sm:h-4" />
                  </a>
                </div> */}
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 sm:px-3 py-1 bg-slate-700 text-xs sm:text-sm rounded-full text-emerald-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors duration-300 text-xs sm:text-sm"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-300 text-xs sm:text-sm"
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;