import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, MenuIcon, X, Terminal as TerminalIcon } from 'lucide-react';

const Navigation = ({ t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameMenuOpen, setIsNameMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  
  // Function to handle scrolling on the homepage
  const handleNavClick = (e, href) => {
    if (!isHomePage && href.startsWith('#')) {
      // If we're not on homepage and trying to use an anchor, go to homepage first
      return;
    }
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full top-0 z-40 bg-[#0a0b0f]/80 backdrop-blur-md border-b border-[#00ff41]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="relative">
            <Link 
              to="/"
              className="text-xl font-mono font-bold text-[#00ff41] flex items-center hover:opacity-80 transition-all duration-300"
              onClick={() => setIsNameMenuOpen(false)}
            >
              <TerminalIcon className="inline mr-2" />
              ./Kamil_Serrai
            </Link>
            
            {isNameMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1b23] border border-[#00ff41]/20 rounded-lg shadow-xl py-1 z-50">
                {isHomePage ? (
                  <>
                    <NavLink href="#about" text={t.nav.about} />
                    <NavLink href="#projects" text={t.nav.projects} />
                    <NavLink href="#skills" text={t.nav.skills} />
                    <NavLink href="#contact" text={t.nav.contact} />
                  </>
                ) : (
                  <Link to="/" className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors">
                    <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
                    Home
                  </Link>
                )}
                <Link to="/cv" className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors">
                  <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
                  {t.nav.cv}
                </Link>
                <div className="border-t border-[#00ff41]/20 my-1"></div>
                <SocialLink 
                  href="https://github.com/Klima42" 
                  Icon={Github} 
                  text="GitHub" 
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/kamil-serrai-ba30b7168" 
                  Icon={Linkedin} 
                  text="LinkedIn" 
                />
              </div>
            )}
          </div>
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <NavLink href="#about" text={t.nav.about} isHeader />
                <NavLink href="#projects" text={t.nav.projects} isHeader />
                <NavLink href="#skills" text={t.nav.skills} isHeader />
                <NavLink href="#contact" text={t.nav.contact} isHeader />
              </>
            ) : (
              <Link to="/" className="text-gray-300 hover:text-[#00ff41] transition-colors">
                Home
              </Link>
            )}
            <Link to="/cv" className="text-gray-300 hover:text-[#00ff41] transition-colors">
              {t.nav.cv}
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className="text-[#00ff41]" /> : <MenuIcon size={24} className="text-[#00ff41]" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-[#00ff41]/10 bg-[#0a0b0f]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isHomePage ? (
                <>
                  <NavLink href="#about" text={t.nav.about} isMobile />
                  <NavLink href="#projects" text={t.nav.projects} isMobile />
                  <NavLink href="#skills" text={t.nav.skills} isMobile />
                  <NavLink href="#contact" text={t.nav.contact} isMobile />
                </>
              ) : (
                <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]">
                  Home
                </Link>
              )}
              <Link to="/cv" className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]">
                {t.nav.cv}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, text, isHeader, isMobile }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleClick = (e) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isHeader) {
    return (
      <a 
        href={href} 
        className="text-gray-300 hover:text-[#00ff41] transition-colors"
        onClick={handleClick}
      >
        {text}
      </a>
    );
  }
  
  if (isMobile) {
    return (
      <a 
        href={href} 
        className="block px-3 py-2 text-gray-300 hover:text-[#00ff41]"
        onClick={handleClick}
      >
        {text}
      </a>
    );
  }

  return (
    <a 
      href={href} 
      className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
      onClick={handleClick}
    >
      <span className="font-mono text-[#00ff41]/50 mr-2">&gt;</span>
      {text}
    </a>
  );
};

const SocialLink = ({ href, Icon, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block px-4 py-2 text-gray-300 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-colors"
  >
    <Icon size={16} className="inline mr-2" />
    {text}
  </a>
);

export default Navigation;