import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = ({ glitchText, t, previewLoading, setPreviewLoading, previewError, setPreviewError }) => {
  return (
    <main>
      <Hero glitchText={glitchText} t={t} />
      <Projects 
        t={t} 
        previewLoading={previewLoading}
        setPreviewLoading={setPreviewLoading}
        previewError={previewError}
        setPreviewError={setPreviewError}
      />
      <Skills t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
};

export default HomePage;