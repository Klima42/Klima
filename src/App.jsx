import { useState, useEffect } from 'react';
import { translations } from './utils/translations';

// Import components
import Navigation from './components/Navigation';
import LanguageSwitcher from './components/LanguageSwitcher';
import Terminal_component from './components/Terminal_component';

// Import pages
import HomePage from './pages/HomePage';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [glitchText, setGlitchText] = useState('Hello, friend.');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameMenuOpen, setIsNameMenuOpen] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(true);
  const [previewError, setPreviewError] = useState(false);

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
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'fr' : 'en');

  const appState = {
    language,
    glitchText,
    isMenuOpen,
    isNameMenuOpen,
    previewLoading,
    previewError,
    setIsMenuOpen,
    setIsNameMenuOpen,
    setPreviewLoading,
    setPreviewError,
    toggleLanguage,
    t
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-gray-100 overflow-x-hidden relative">
      <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
      <Navigation t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
                 isNameMenuOpen={isNameMenuOpen} setIsNameMenuOpen={setIsNameMenuOpen} />
      <HomePage {...appState} />
      <Terminal_component />
    </div>
  );
};

export default App;