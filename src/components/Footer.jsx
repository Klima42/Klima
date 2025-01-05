// src/components/Footer.jsx
const Footer = ({ t }) => {
    return (
      <footer className="py-8 bg-[#0a0b0f] border-t border-[#00ff41]/10 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="font-mono">{t.footer.copyright}</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;