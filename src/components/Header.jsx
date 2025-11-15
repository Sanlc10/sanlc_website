import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-lg border-b border-white/20"></div>
      <nav className="relative max-w-7xl mx-auto px-6 md:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-body md:text-h2-sm font-medium">
            Santiago<span className="text-accent-primary"> Lopez</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-body-sm text-neutral-medium hover:text-neutral-dark transition-colors duration-250"
            >
              {translations[language].header.about}
            </button>
            {/* ⏸️ SKILLS LINK - DESACTIVADO - Descomentar para activar */}
            {/* <button
              onClick={() => scrollToSection('skills')}
              className="text-body-sm text-neutral-medium hover:text-neutral-dark transition-colors duration-250"
            >
              {translations[language].header.skills}
            </button> */}
            <button
              onClick={() => scrollToSection('projects')}
              className="text-body-sm text-neutral-medium hover:text-neutral-dark transition-colors duration-250"
            >
              {translations[language].header.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-body-sm bg-interactive-primary text-white px-6 py-2 rounded-button transition-all duration-250 hover:bg-neutral-dark hover:shadow-medium ml-4"
            >
              {translations[language].header.contact}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-accent-primary transition-all duration-250 hover:scale-110 flex items-center justify-center"
              aria-label="Toggle language"
            >
              {language === 'es' ? (
                // Bandera de México
                <svg viewBox="0 0 36 24" className="w-full h-full">
                  <rect width="12" height="24" fill="#006847"/>
                  <rect x="12" width="12" height="24" fill="#FFFFFF"/>
                  <rect x="24" width="12" height="24" fill="#CE1126"/>
                </svg>
              ) : (
                // Bandera de Estados Unidos
                <svg viewBox="0 0 36 24" className="w-full h-full">
                  <rect width="36" height="24" fill="#B22234"/>
                  <rect y="2.77" width="36" height="1.85" fill="#FFFFFF"/>
                  <rect y="6.46" width="36" height="1.85" fill="#FFFFFF"/>
                  <rect y="10.15" width="36" height="1.85" fill="#FFFFFF"/>
                  <rect y="13.85" width="36" height="1.85" fill="#FFFFFF"/>
                  <rect y="17.54" width="36" height="1.85" fill="#FFFFFF"/>
                  <rect y="21.23" width="36" height="1.85" fill="#FFFFFF"/>
                  <rect width="14.4" height="13.85" fill="#3C3B6E"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden btn-icon w-12 h-12"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-body text-neutral-medium hover:text-neutral-dark transition-colors duration-250 text-left py-2"
              >
                {translations[language].header.about}
              </button>
              {/* ⏸️ SKILLS LINK MOBILE - DESACTIVADO - Descomentar para activar */}
              {/* <button
                onClick={() => scrollToSection('skills')}
                className="text-body text-neutral-medium hover:text-neutral-dark transition-colors duration-250 text-left py-2"
              >
                {translations[language].header.skills}
              </button> */}
              <button
                onClick={() => scrollToSection('projects')}
                className="text-body text-neutral-medium hover:text-neutral-dark transition-colors duration-250 text-left py-2"
              >
                {translations[language].header.projects}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-body-sm bg-interactive-primary text-white px-6 py-2 rounded-button transition-all duration-250 hover:bg-neutral-dark hover:shadow-medium mt-2"
              >
                {translations[language].header.contact}
              </button>

              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLanguage}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 hover:border-accent-primary transition-all duration-250 flex items-center justify-center self-start mt-2"
                aria-label="Toggle language"
              >
                {language === 'es' ? (
                  // Bandera de México
                  <svg viewBox="0 0 36 24" className="w-full h-full">
                    <rect width="12" height="24" fill="#006847"/>
                    <rect x="12" width="12" height="24" fill="#FFFFFF"/>
                    <rect x="24" width="12" height="24" fill="#CE1126"/>
                  </svg>
                ) : (
                  // Bandera de Estados Unidos
                  <svg viewBox="0 0 36 24" className="w-full h-full">
                    <rect width="36" height="24" fill="#B22234"/>
                    <rect y="2.77" width="36" height="1.85" fill="#FFFFFF"/>
                    <rect y="6.46" width="36" height="1.85" fill="#FFFFFF"/>
                    <rect y="10.15" width="36" height="1.85" fill="#FFFFFF"/>
                    <rect y="13.85" width="36" height="1.85" fill="#FFFFFF"/>
                    <rect y="17.54" width="36" height="1.85" fill="#FFFFFF"/>
                    <rect y="21.23" width="36" height="1.85" fill="#FFFFFF"/>
                    <rect width="14.4" height="13.85" fill="#3C3B6E"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
