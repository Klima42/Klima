// src/components/LanguageSwitcher.jsx
import { Languages } from 'lucide-react';

const LanguageSwitcher = ({ language, toggleLanguage }) => {
  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-[#1a1b23] border border-[#00ff41]/20 px-4 py-2 rounded-full hover:border-[#00ff41]/40 transition-all duration-300 flex items-center space-x-2"
    >
      <Languages size={20} className="text-[#00ff41]" />
      <span className="text-[#00ff41]">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;