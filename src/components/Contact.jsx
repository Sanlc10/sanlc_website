import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear mensaje de WhatsApp
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}`;
    const whatsappURL = `https://wa.me/522213419629?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');

    // Limpiar formulario
    setFormData({ name: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 gradient-accent opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-light opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-h1-sm md:text-h1 mb-4">{translations[language].contact.title}</h2>
          <p className="text-body text-neutral-medium max-w-2xl mx-auto">
            {translations[language].contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="card-flat hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-label md:text-body font-medium mb-2 text-neutral-dark">{translations[language].contact.email}</h3>
                  <a href="mailto:santiagocast.colegionaciones@gmail.com" className="text-body-sm text-neutral-medium hover:text-accent-primary transition-colors duration-250">
                    santiagocast.colegionaciones@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-flat hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-label md:text-body font-medium mb-2 text-neutral-dark">{translations[language].contact.whatsapp}</h3>
                  <a href="https://wa.me/522213419629" target="_blank" rel="noopener noreferrer" className="text-body-sm text-neutral-medium hover:text-accent-primary transition-colors duration-250">
                    +52 221 341 9629
                  </a>
                </div>
              </div>
            </div>

            <div className="card-flat hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-label md:text-body font-medium mb-2 text-neutral-dark">{translations[language].contact.availability}</h3>
                  <p className="text-body-sm text-neutral-medium">
                    {translations[language].contact.availabilityText}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6">
              <h3 className="text-label md:text-body font-medium mb-4 text-neutral-dark">{translations[language].contact.connect}</h3>
              <div className="flex gap-3">
                {[
                  { icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub', url: 'https://github.com/Sanlc10', enabled: true },
                  { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', label: 'LinkedIn', url: '#', enabled: false },
                  { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', label: 'Instagram', url: '#', enabled: false }
                ].map((social, index) => (
                  social.enabled ? (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-interactive-social flex items-center justify-center hover:bg-accent-light hover:scale-110 transition-all duration-250"
                      aria-label={social.label}
                    >
                      <svg className="w-5 h-5 text-neutral-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ) : (
                    <button
                      key={index}
                      disabled
                      className="w-12 h-12 rounded-full bg-interactive-social flex items-center justify-center opacity-50 cursor-not-allowed"
                      aria-label={`${social.label} (Coming soon)`}
                    >
                      <svg className="w-5 h-5 text-neutral-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </button>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-label text-neutral-dark mb-2">
                  {translations[language].contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field w-full"
                  placeholder={translations[language].contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-label text-neutral-dark mb-2">
                  {translations[language].contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="textarea-field w-full"
                  placeholder={translations[language].contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                {translations[language].contact.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
