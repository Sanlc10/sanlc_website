import heroBanner from '../assets/hero_banner.jpg';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Hero Banner Image - Fondo completo de toda la sección */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient circle top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full gradient-accent opacity-30 blur-3xl animate-float"></div>

        {/* Medium gradient circle bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-light opacity-40 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Small accent circle */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent-primary opacity-10 blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Glassmorphism background container */}
      <div className="absolute top-20 left-8 right-8 bottom-24 md:top-24 md:left-12 md:right-12 md:bottom-28 lg:top-28 lg:left-16 lg:right-16 lg:bottom-32 z-0 rounded-card overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-lg border border-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center animate-fade-in">
        {/* Small label */}
        <div className="inline-block mb-6">
          <span className="text-label text-neutral-medium bg-surface-card px-6 py-3 rounded-full shadow-soft">
            {translations[language].hero.welcome}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-h1 md:text-display-md lg:text-display-lg mb-6 text-balance">
          {translations[language].hero.title1} {translations[language].hero.title2}
          <br />
          <span className="text-accent-primary">{translations[language].hero.title3}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-body md:text-h2-sm text-white max-w-2xl mx-auto mb-12 text-balance">
          {translations[language].hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary w-full sm:w-auto"
          >
            {translations[language].hero.viewWork}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary w-full sm:w-auto"
          >
            {translations[language].hero.getInTouch}
          </button>
        </div>

        {/* Floating decorative card */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <div className="card-elevated max-w-md hover-lift">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left flex-1">
                <p className="text-label text-neutral-dark">{translations[language].hero.fastEfficient}</p>
                <p className="text-caption text-neutral-medium">{translations[language].hero.optimized}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-neutral-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto animate-wave"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#F5F1ED"
            opacity="0.8"
          />
          <path
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#F5F1ED"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
