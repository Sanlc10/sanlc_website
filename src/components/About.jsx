import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-h1-sm md:text-h1 mb-4">{translations[language].about.title}</h2>
          <p className="text-body text-neutral-medium max-w-2xl mx-auto">
            {translations[language].about.subtitle}
          </p>
        </div>

        {/* Main content card */}
        <div className="card-elevated animate-fade-in hover-lift">
          <div className="space-y-6">
            {/* Introduction */}
            <div>
              <h3 className="text-h2-sm md:text-h2 mb-4 text-accent-primary">
                {translations[language].about.greeting}
              </h3>
              <p className="text-body text-neutral-medium leading-relaxed">
                {translations[language].about.intro}
              </p>
            </div>

            {/* What I do */}
            <div>
              <h4 className="text-label md:text-body font-medium mb-3 text-neutral-dark">
                {translations[language].about.whatIDo}
              </h4>
              <p className="text-body text-neutral-medium leading-relaxed">
                {translations[language].about.whatIDoText}
              </p>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-label md:text-body font-medium mb-3 text-neutral-dark">
                {translations[language].about.approach}
              </h4>
              <p className="text-body text-neutral-medium leading-relaxed">
                {translations[language].about.approachText}
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-light border-opacity-50">
              <div className="text-center">
                <p className="text-h1-sm md:text-h1 text-accent-primary mb-2">5+</p>
                <p className="text-caption md:text-label text-neutral-medium">{translations[language].about.yearsExperience}</p>
              </div>
              <div className="text-center">
                <p className="text-h1-sm md:text-h1 text-accent-primary mb-2">50+</p>
                <p className="text-caption md:text-label text-neutral-medium">{translations[language].about.projectsCompleted}</p>
              </div>
              <div className="text-center">
                <p className="text-h1-sm md:text-h1 text-accent-primary mb-2">30+</p>
                <p className="text-caption md:text-label text-neutral-medium">{translations[language].about.happyClients}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card-flat hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-label md:text-body font-medium mb-2 text-neutral-dark">{translations[language].about.innovation}</h4>
                <p className="text-caption md:text-body-sm text-neutral-medium">
                  {translations[language].about.innovationText}
                </p>
              </div>
            </div>
          </div>

          <div className="card-flat hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-label md:text-body font-medium mb-2 text-neutral-dark">{translations[language].about.collaboration}</h4>
                <p className="text-caption md:text-body-sm text-neutral-medium">
                  {translations[language].about.collaborationText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
