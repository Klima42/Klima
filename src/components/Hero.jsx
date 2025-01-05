// src/components/Hero.jsx
const Hero = ({ glitchText, t }) => {
    return (
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
    );
  };
  
  export default Hero;