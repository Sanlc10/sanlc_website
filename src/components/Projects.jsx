import honeyCompany from '../assets/honey_company.png';
import coffeeShop from '../assets/coffee_shop.png';
import pizzaRestaurant from '../assets/pizza_restaurant.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();

  const projects = [
    {
      image: honeyCompany,
      translationKey: 'honeyCompany'
    },
    {
      image: coffeeShop,
      translationKey: 'coffeeShop'
    },
    {
      image: pizzaRestaurant,
      translationKey: 'pizzaRestaurant'
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-primary opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-h1-sm md:text-h1 mb-4">{translations[language].projects.title}</h2>
          <p className="text-body text-neutral-medium max-w-2xl mx-auto">
            {translations[language].projects.subtitle}
          </p>
        </div>

        {/* Projects grid - 3 static cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const projectData = translations[language].projects[project.translationKey];
            return (
              <a
                key={index}
                href={projectData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-interactive-secondary rounded-button-sm p-6 hover:bg-neutral-light hover:scale-105 transition-all duration-250 cursor-pointer shadow-soft min-h-[420px] flex flex-col"
              >
                {/* Project image */}
                <div className="aspect-video rounded-card-sm mb-6 overflow-hidden bg-white flex-shrink-0">
                  <img
                    src={project.image}
                    alt={projectData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-body md:text-h2-sm font-medium mb-4 text-neutral-dark">
                    {projectData.title}
                  </h3>
                  <p className="text-body-sm text-neutral-medium mb-6 leading-relaxed flex-1">
                    {projectData.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {projectData.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-caption px-3 py-1 bg-primary-bg rounded-full text-neutral-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* View all projects CTA */}
        <div className="text-center mt-16">
          <button className="btn-secondary">
            {translations[language].projects.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
