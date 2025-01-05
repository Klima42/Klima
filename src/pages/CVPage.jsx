import React from 'react';
import CyberpunkCV from '../components/CyberpunkCV';
import { Code, Briefcase, Star, Rocket } from 'lucide-react';

const CVPage = ({ t }) => {
  const ProjectCard = ({ title, description, tech, link }) => (
    <div className="group relative bg-black/30 border border-green-500/20 p-6 rounded-lg hover:border-green-500/40 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-xl text-green-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="text-sm px-2 py-1 bg-green-900/30 text-green-300 rounded">
            {item}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" 
           className="text-green-400 hover:text-green-300 transition-colors duration-300">
          View Project →
        </a>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4 text-center">
          {t.cv.title || "My Journey"}
        </h1>
        <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
          {t.cv.subtitle || "Full Stack Developer with a passion for creating innovative solutions and learning new technologies"}
        </p>
      </div>

      {/* Interactive CV Component */}
      <div className="mb-16">
        <CyberpunkCV />
      </div>

      {/* My Story Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Star className="w-8 h-8 text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-green-400">
              {t.cv.story.title || "My Story"}
            </h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p>
              My journey in technology began with a deep curiosity about how systems work. 
              Starting with system administration, I developed a strong foundation in 
              infrastructure and networking, which later proved invaluable in my 
              transition to full-stack development.
            </p>
            <p>
              Through my education at ITIS Formation and DonkeySchool, I've cultivated 
              a diverse skill set that spans both backend and frontend technologies. 
              This comprehensive understanding allows me to architect complete solutions 
              and bridge the gap between different technical domains.
            </p>
            <p>
              Today, as a co-founder of Pixelle 3, I'm pursuing my passion for creating 
              innovative web solutions while continuously expanding my technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Rocket className="w-8 h-8 text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-green-400">
              {t.cv.projects.title || "Featured Projects"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Restaurant Management System"
              description="Full-stack application developed for JeanEdern (Top Chef 2014 winner) to manage centralized kitchen operations."
              tech={["Symfony", "Angular", "Ionic", "MySQL"]}
            />
            <ProjectCard 
              title="VR Escape Game"
              description="An immersive virtual reality escape game developed as a flagship project during my studies at Ingetis."
              tech={["Unity", "C#", "VR Development", "3D Modeling"]}
            />
            <ProjectCard 
              title="Network Protocol Simulator"
              description="Educational tool for visualizing and understanding network protocols and their interactions."
              tech={["Python", "Networking", "GUI Development"]}
            />
            <ProjectCard 
              title="Pixelle 3 Website"
              description="Modern web platform showcasing our company's services and portfolio."
              tech={["React", "Tailwind CSS", "Vite"]}
              link="https://webpixelle3.netlify.app/"
            />
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-green-400">
              {t.cv.expertise.title || "Technical Expertise"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-green-300 mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React/Angular ecosystem and modern JavaScript</li>
                <li>• UI/UX design principles and implementation</li>
                <li>• State management and performance optimization</li>
                <li>• Responsive design and CSS frameworks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-green-300 mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Symfony and Spring Boot frameworks</li>
                <li>• Database design and optimization</li>
                <li>• API development and integration</li>
                <li>• Server infrastructure and deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVPage;