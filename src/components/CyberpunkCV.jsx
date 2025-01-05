import React, { useState, useEffect } from 'react';
import { Code, Cpu, Terminal, Network, Briefcase, GraduationCap, Languages, Globe } from 'lucide-react';

const CyberpunkCV = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const MatrixBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="matrix-rain absolute inset-0 text-green-500 font-mono text-sm">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="absolute animate-matrix-fall" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}>
            {String.fromCharCode(33 + Math.random() * 93)}
          </div>
        ))}
      </div>
    </div>
  );

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center space-x-2 text-green-400 mb-4">
      <Icon className="w-6 h-6" />
      <h2 className="text-xl font-mono tracking-wider">{title}</h2>
    </div>
  );

  const ExperienceCard = ({ title, company, date, description, link }) => (
    <div className="group relative border border-green-500/30 p-4 mb-4 bg-black/40 hover:bg-green-900/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-green-400 font-mono text-lg mb-2">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" 
         className="text-green-300 hover:text-green-400 transition-colors duration-300">
        {company}
      </a>
      <p className="text-green-200/70 text-sm mb-2">{date}</p>
      <p className="text-green-100/60 group-hover:text-green-100 transition-colors duration-300">{description}</p>
    </div>
  );

  const links = {
    linkedin: "https://www.linkedin.com/in/kamil-serrai-ba30b7168/",
    github: "https://github.com/Klima42",
    portfolio: "https://webpixelle3.netlify.app/",
    donkeySchool: "https://donkey.school/",
    ingetis: "https://ingetis.com/",
    cfaItis: "https://cfa-itis.com/"
  };

  return (
    <div className="relative min-h-screen bg-black text-green-100 p-8 font-mono">
      <MatrixBackground />
      
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400 mb-4 glitch-text">KAMIL SERRAI</h1>
          <p className="text-xl text-green-300">Full Stack Developer & System Administrator</p>
          <div className="flex justify-center space-x-6 mt-4">
            {Object.entries(links).slice(0, 3).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                 className="text-green-400 hover:text-green-300 transition-colors duration-300">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <section className="space-y-6">
            <div className="border border-green-500/30 p-6 bg-black/60 backdrop-blur-sm">
              <SectionTitle icon={Code} title="Technical Skills" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React/Angular", "Spring Boot", "Symfony", "TypeScript",
                  "MongoDB", "PostgreSQL", "Docker", "Git",
                  "Linux/Windows Server", "Network Security"
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400"></span>
                    <span className="text-green-200 hover:text-green-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-green-500/30 p-6 bg-black/60 backdrop-blur-sm">
              <SectionTitle icon={GraduationCap} title="Education" />
              <ExperienceCard
                title="Web & Mobile Development"
                company="DonkeySchool"
                date="2023-2024"
                description="Full stack development, Symfony, Angular, Docker"
                link={links.donkeySchool}
              />
              <ExperienceCard
                title="Expert en système informatique"
                company="ITIS Formation"
                date="2020-2023"
                description="System Administration, Network Security, DevOps"
                link={links.cfaItis}
              />
            </div>
          </section>

          <section className="space-y-6">
            <div className="border border-green-500/30 p-6 bg-black/60 backdrop-blur-sm">
              <SectionTitle icon={Briefcase} title="Professional Experience" />
              <ExperienceCard
                title="Co-Founder & Developer"
                company="Pixelle 3"
                date="Nov 2024 - Present"
                description="Leading technical architecture and development of cutting-edge web solutions using React, Vite, and Tailwind CSS."
                link={links.portfolio}
              />
              <ExperienceCard
                title="Full Stack Developer"
                company="Crédit Agricole Technologies"
                date="Apr 2024 - Sept 2024"
                description="Development of RPA tracking tools and user management applications using Angular and Spring Boot."
                link="#"
              />
            </div>

            <div className="border border-green-500/30 p-6 bg-black/60 backdrop-blur-sm">
              <SectionTitle icon={Languages} title="Languages" />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>French</span>
                  <div className="w-32 h-2 bg-green-900">
                    <div className="w-full h-full bg-green-400"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>English</span>
                  <div className="w-32 h-2 bg-green-900">
                    <div className="w-3/4 h-full bg-green-400"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Spanish</span>
                  <div className="w-32 h-2 bg-green-900">
                    <div className="w-1/4 h-full bg-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
        .glitch-text {
          text-shadow: 
            0.05em 0 0 rgba(255,0,0,.75),
            -0.025em -0.05em 0 rgba(0,255,0,.75),
            0.025em 0.05em 0 rgba(0,0,255,.75);
          animation: glitch 500ms infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
            -0.05em -0.025em 0 rgba(0,255,0,.75),
            -0.025em 0.05em 0 rgba(0,0,255,.75); }
          14% { text-shadow: 0.05em 0 0 rgba(255,0,0,.75),
            -0.05em -0.025em 0 rgba(0,255,0,.75),
            -0.025em 0.05em 0 rgba(0,0,255,.75); }
          15% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
            0.025em 0.025em 0 rgba(0,255,0,.75),
            -0.05em -0.05em 0 rgba(0,0,255,.75); }
          49% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,.75),
            0.025em 0.025em 0 rgba(0,255,0,.75),
            -0.05em -0.05em 0 rgba(0,0,255,.75); }
          50% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
            0.05em 0 0 rgba(0,255,0,.75),
            0 -0.05em 0 rgba(0,0,255,.75); }
          99% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,.75),
            0.05em 0 0 rgba(0,255,0,.75),
            0 -0.05em 0 rgba(0,0,255,.75); }
          100% { text-shadow: -0.025em 0 0 rgba(255,0,0,.75),
            -0.025em -0.025em 0 rgba(0,255,0,.75),
            -0.025em -0.05em 0 rgba(0,0,255,.75); }
        }
      `}</style>
    </div>
  );
};

export default CyberpunkCV;