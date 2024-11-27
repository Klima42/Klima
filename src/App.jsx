import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MenuIcon, 
  X, 
  ExternalLink, 
  Terminal as TerminalIcon, 
  Code2, 
  Languages,
  Loader
} from 'lucide-react';
import Terminal_component from './components/Terminal_component';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameMenuOpen, setIsNameMenuOpen] = useState(false);
  const [glitchText, setGlitchText] = useState('Hello, friend.');
  const [language, setLanguage] = useState('en');
  const [previewLoading, setPreviewLoading] = useState(true);
  const [previewError, setPreviewError] = useState(false);

  const translations = {
    en: {
      nav: {
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        texts: [
          'Hello, friend.',
          'Full Stack Developer',
          'Security Enthusiast',
          'Problem Solver'
        ],
        description: 'Building secure and scalable web applications with a focus on user experience and data protection',
        buttons: {
          contact: 'Get in Touch',
          work: 'View Work'
        }
      },
      projects: {
        title: 'FEATURED PROJECTS',
        items: [
          {
            title: "E-commerce Platform",
            description: "Secure e-commerce solution with encrypted transactions",
            tech: ["React", "Node.js", "MongoDB", "JWT"],
            github: "https://github.com/Klima42",
            demo: "#"
          },
          {
            title: "Network Monitor",
            description: "Real-time network traffic analysis dashboard",
            tech: ["React", "Socket.io", "D3.js", "Node.js"],
            github: "https://github.com/Klima42",
            demo: "#"
          },
          {
            title: "Webpixelle3",
            description: "Modern digital agency website with dynamic animations",
            tech: ["React", "Tailwind CSS", "Vite"],
            github: "https://github.com/Klima42",
            demo: "https://webpixelle3.netlify.app/services"
          }
        ],
        buttons: {
          code: 'Code',
          demo: 'Demo'
        }
      },
      skills: {
        title: 'Skills && Technologies',
        categories: [
          {
            category: "Frontend",
            items: ["React.js", "TypeScript", "Tailwind CSS", "Redux"]
          },
          {
            category: "Backend",
            items: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
          },
          {
            category: "Security",
            items: ["Cryptography", "Network Security", "Penetration Testing", "OAuth"]
          }
        ]
      },
      contact: {
        title: 'Connect With Me',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      },
      footer: {
        copyright: '© 2024 // End transmission'
      }
    },
    fr: {
      nav: {
        about: 'À propos',
        projects: 'Projets',
        skills: 'Compétences',
        contact: 'Contact'
      },
      hero: {
        texts: [
          'Salut l\'ami',
          'Développeur Full Stack',
          'Passionné de Sécurité',
          'Résolveur de Problèmes'
        ],
        description: 'Création d\'applications web sécurisées et évolutives avec un accent sur l\'expérience utilisateur et la protection des données',
        buttons: {
          contact: 'Me Contacter',
          work: 'Voir Projets'
        }
      },
      projects: {
        title: 'PROJETS PRINCIPAUX',
        items: [
          {
            title: "Plateforme E-commerce",
            description: "Solution e-commerce sécurisée avec transactions cryptées",
            tech: ["React", "Node.js", "MongoDB", "JWT"],
            github: "https://github.com/Klima42",
            demo: "#"
          },
          {
            title: "Moniteur Réseau",
            description: "Tableau de bord d'analyse du trafic réseau en temps réel",
            tech: ["React", "Socket.io", "D3.js", "Node.js"],
            github: "https://github.com/Klima42",
            demo: "#"
          },
          {
            title: "Webpixelle3",
            description: "Site d'agence digitale moderne avec animations dynamiques",
            tech: ["React", "Tailwind CSS", "Vite"],
            github: "https://github.com/Klima42",
            demo: "https://webpixelle3.netlify.app/services"
          }
        ],
        buttons: {
          code: 'Code',
          demo: 'Démo'
        }
      },
      skills: {
        title: 'Compétences && Technologies',
        categories: [
          {
            category: "Frontend",
            items: ["React.js", "TypeScript", "Tailwind CSS", "Redux"]
          },
          {
            category: "Backend",
            items: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
          },
          {
            category: "Sécurité",
            items: ["Cryptographie", "Sécurité Réseau", "Tests d'Intrusion", "OAuth"]
          }
        ]
      },
      contact: {
        title: 'Me Contacter',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      },
      footer: {
        copyright: '© 2024 // Fin de transmission'
      }
    }
  };

  useEffect(() => {
    const texts = translations[language].hero.texts;
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setGlitchText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 3000);
    
    return () => clearInterval(interval);
  }, [language]);

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-gray-100 overflow-x-hidden relative">
      {/* Language Switcher */}
      <button 
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-[#1a1b23] border border-[#00ff41]/20 px-4 py-2 rounded-full hover:border-[#00ff41]/40 transition-all duration-300 flex items-center space-x-2"
      >
        <Languages size={20} className="text-[#00ff41]" />
        <span className="text-[#00ff41]">{language.toUpperCase()}</span>
      </button>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-40 bg-[#0a0b0f]/80 backdrop-blur-md border-b border-[#00ff41]/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Dropdown */}
            <div className="relative">
              <button 
                className="text-xl font-mono font-bold text-[#00ff41] flex items-center hover:opacity-80 transition-all duration-300"
                onClick={() => setIsNameMenuOpen(!isNameMenuOpen)}
                onBlur={() => setTimeout(() => setIsNameMenuOpen(false), 200)}
              >
                <TerminalIcon className="inline mr-2" />
                ./Kamil.Serrai
              </button>
              
              {isNameMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1b23] border border-[#00ff41]/20 rounded-lg shadow-xl py-1 z-50">
                  <a 
                    href="#about" 
                    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
                    onClick={() => setIsNameMenuOpen(false)}
                  >
                    <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
                    {t.nav.about}
                  </a>
                  <a 
                    href="#projects" 
                    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
                    onClick={() => setIsNameMenuOpen(false)}
                  >
                    <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
                    {t.nav.projects}
                  </a>
                  <a 
                    href="#skills" 
                    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
                    onClick={() => setIsNameMenuOpen(false)}
                  >
                    <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
                    {t.nav.skills}
                  </a>
                  <a 
                    href="#contact" 
                    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
                    onClick={() => setIsNameMenuOpen(false)}
                  >
                    <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
                    {t.nav.contact}
                  </a>
                  <div className="border-t border-[#00ff41]/20 my-1"></div>
                  <a 
                    href="https://github.com/Klima42" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
                  >
                    <Github size={16} className="inline mr-2" />
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kamil-serrai-ba30b7168" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
                  >
                    <Linkedin size={16} className="inline mr-2" />
                    LinkedIn
                  </a>
                </div>
              )}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-[#00ff41] transition-colors">{t.nav.about}</a>
              <a href="#projects" className="text-gray-300 hover:text-[#00ff41] transition-colors">{t.nav.projects}</a>
              <a href="#skills" className="text-gray-300 hover:text-[#00ff41] transition-colors">{t.nav.skills}</a>
              <a href="#contact" className="text-gray-300 hover:text-[#00ff41] transition-colors">{t.nav.contact}</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className="text-[#00ff41]" /> : <MenuIcon size={24} className="text-[#00ff41]" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-[#00ff41]/10 bg-[#0a0b0f]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]">{t.nav.about}</a>
                <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]">{t.nav.projects}</a>
                <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]">{t.nav.skills}</a>
                <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]">{t.nav.contact}</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 bg-[#0a0b0f] w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 font-mono text-[#00ff41]">
              {glitchText}
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" 
                className="bg-[#00ff41] text-[#0a0b0f] px-8 py-3 rounded font-medium hover:bg-[#00ff41]/90 transition-all duration-300">
                {t.hero.buttons.contact}
              </a>
              <a href="#projects" 
                className="border border-[#00ff41] text-[#00ff41] px-8 py-3 rounded font-medium hover:bg-[#00ff41]/10 transition-all duration-300">
                {t.hero.buttons.work}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0a0b0f] w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00E5FF] via-[#8A84E2] to-[#9B51E0] text-transparent bg-clip-text">
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <div key={index} className="bg-[#1a1b23]/80 backdrop-blur-sm border border-[#00ff41]/10 rounded-lg hover:border-[#00ff41]/30 transition-all duration-300">
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
                 {project.title === "StayScape" && (
                    <div className="mt-6 w-full h-96 relative rounded-lg border border-[#00ff41]/30 bg-[#1a1b23]/90 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#00ff41]/50">
                      {/* Terminal-style title bar */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-[#00ff41]/30 bg-[#1a1b23]/80">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex items-center gap-2">
                          {previewLoading && <Loader className="w-4 h-4 text-[#00ff41] animate-spin" />}
                          <span className="text-sm text-[#00ff41] font-mono truncate max-w-[200px]">
                            https://stayscape.netlify.app/
                          </span>
                        </div>
                      </div>

                  {/* Preview Window for Webpixelle3 */}
                  {project.title === "Webpixelle3" && (
                    <div className="mt-6 w-full h-96 relative rounded-lg border border-[#00ff41]/30 bg-[#1a1b23]/90 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#00ff41]/50">
                      {/* Terminal-style title bar */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-[#00ff41]/30 bg-[#1a1b23]/80">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex items-center gap-2">
                          {previewLoading && <Loader className="w-4 h-4 text-[#00ff41] animate-spin" />}
                          <span className="text-sm text-[#00ff41] font-mono truncate max-w-[200px]">
                            webpixelle3.netlify.app/services
                          </span>
                        </div>
                      </div>
                      
                      {/* Preview Content */}
                      <div className="relative w-full h-[calc(100%-2.5rem)]">
                        {previewLoading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1b23]/50 backdrop-blur-sm">
                            <div className="flex flex-col items-center gap-2">
                              <Loader className="w-8 h-8 text-[#00ff41] animate-spin" />
                              <span className="text-sm text-[#00ff41] font-mono">Initializing preview...</span>
                            </div>
                          </div>
                        )}
                        {previewError ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1b23]/50 backdrop-blur-sm">
                            <div className="text-center px-4">
                              <p className="text-red-400 font-mono mb-2">Connection failed</p>
                              <p className="text-sm text-[#00ff41]">Please visit the site directly</p>
                            </div>
                          </div>
                        ) : (
                          <iframe
                            src="https://webpixelle3.netlify.app/services"
                            className="w-full h-full border-0"
                            onLoad={() => setPreviewLoading(false)}
                            onError={() => {
                              setPreviewError(true);
                              setPreviewLoading(false);
                            }}
                            title="Webpixelle3 Services Preview"
                            sandbox="allow-scripts allow-same-origin"
                          />
                        )}

                        {/* Terminal-style scanlines effect */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#00ff41]/5" 
                             style={{
                               backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 65, 0.03) 0px, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 2px)'
                             }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0a0b0f] w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">
            <span className="text-[#00ff41]">&gt; </span>
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.skills.categories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-mono text-[#00ff41] mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span key={i} className="bg-[#1a1b23] border border-[#00ff41]/20 text-gray-300 px-4 py-2 rounded hover:border-[#00ff41]/40 hover:text-[#00ff41] transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0a0b0f] w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono">
            <span className="text-[#00ff41]">&gt; </span>
            {t.contact.title}
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:kamil.serrai@gmail.com" 
              className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors">
              <Mail size={24} className="mr-2" />
              {t.contact.email}
            </a>
            <a href="https://github.com/Klima42" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors">
              <Github size={24} className="mr-2" />
              {t.contact.github}
            </a>
            <a href="https://www.linkedin.com/in/kamil-serrai-ba30b7168" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-[#00ff41] transition-colors">
              <Linkedin size={24} className="mr-2" />
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0b0f] border-t border-[#00ff41]/10 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="font-mono">{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Terminal Component */}
      <Terminal_component />
    </div>
  );
};

export default Portfolio;
