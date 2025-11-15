import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills'; // ⏸️ DESACTIVADO - Descomentar para activar
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          {/* ⏸️ SKILLS SECTION - DESACTIVADA - Descomentar la línea siguiente para activar */}
          {/* <Skills /> */}
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
