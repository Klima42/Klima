// src/components/Projects.jsx
import { useState } from 'react';
import { Code2, Github, ExternalLink, Loader } from 'lucide-react';

const Projects = ({ t }) => {
  const [previewLoading, setPreviewLoading] = useState(true);
  const [previewError, setPreviewError] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0b0f] w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00E5FF] via-[#8A84E2] to-[#9B51E0] text-transparent bg-clip-text">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              previewLoading={previewLoading}
              setPreviewLoading={setPreviewLoading}
              setPreviewError={setPreviewError}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, previewLoading, setPreviewLoading, setPreviewError, t }) => (
  <div className="bg-[#1a1b23]/80 backdrop-blur-sm border border-[#00ff41]/10 rounded-lg hover:border-[#00ff41]/30 transition-all duration-300">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#00ff41]">{project.title}</h3>
        <Code2 className="text-[#00ff41]/50" size={20} />
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="text-xs text-[#00ff41] bg-[#00ff41]/10 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" 
           className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors">
          <Github size={20} className="mr-1" /> {t.projects.buttons.code}
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" 
           className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors">
          <ExternalLink size={20} className="mr-1" /> {t.projects.buttons.demo}
        </a>
      </div>

      <PreviewWindow 
        project={project}
        previewLoading={previewLoading}
        setPreviewLoading={setPreviewLoading}
        setPreviewError={setPreviewError}
      />
    </div>
  </div>
);

const PreviewWindow = ({ project, previewLoading, setPreviewLoading, setPreviewError }) => (
  <div className="mt-6 w-full h-96 relative rounded-lg border border-[#00ff41]/30 bg-[#1a1b23]/90 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#00ff41]/50">
    <div className="flex items-center justify-between px-4 py-2 border-b border-[#00ff41]/30 bg-[#1a1b23]/80">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="flex items-center gap-2">
        {previewLoading && <Loader className="w-4 h-4 text-[#00ff41] animate-spin" />}
        <span className="text-sm text-[#00ff41] font-mono truncate max-w-[200px]">
          {project.demo.replace('https://', '')}
        </span>
      </div>
    </div>
    <div className="relative w-full h-[calc(100%-2.5rem)]">
      {previewLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1b23]/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <Loader className="w-8 h-8 text-[#00ff41] animate-spin" />
            <span className="text-sm text-[#00ff41] font-mono">Initializing preview...</span>
          </div>
        </div>
      )}
      <iframe
        src={project.demo}
        className="w-full h-full border-0"
        onLoad={() => setPreviewLoading(false)}
        onError={() => {
          setPreviewError(true);
          setPreviewLoading(false);
        }}
        title={`${project.title} Preview`}
        sandbox="allow-scripts allow-same-origin"
      />
      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#00ff41]/5" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.03) 0px, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 2px)'
           }} />
    </div>
  </div>
);

export default Projects;