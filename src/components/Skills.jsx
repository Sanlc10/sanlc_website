const Skills = () => {
  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Frontend Development",
      description: "React, Vue, Next.js, TypeScript",
      color: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps",
      color: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Figma, Design Systems, User Research",
      color: "bg-pink-50",
      iconColor: "text-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD, Kubernetes",
      color: "bg-cyan-50",
      iconColor: "text-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Web Vitals, SEO, Accessibility, Speed",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface-card bg-opacity-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-h1-sm md:text-h1 mb-4">Skills & Expertise</h2>
          <p className="text-body text-neutral-medium max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card-flat hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-card-sm ${skill.color} flex items-center justify-center mb-6 ${skill.iconColor} transition-transform duration-250 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <h3 className="text-body md:text-h2-sm font-medium mb-3 text-neutral-dark">
                {skill.title}
              </h3>
              <p className="text-body-sm text-neutral-medium">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional tech stack */}
        <div className="mt-16">
          <div className="card-elevated max-w-4xl mx-auto">
            <h3 className="text-h2-sm md:text-h2 mb-6 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
                'MongoDB', 'GraphQL', 'REST API', 'AWS', 'Docker',
                'Git', 'Tailwind CSS', 'Next.js', 'Express', 'Redux'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-primary-bg rounded-button text-label text-neutral-dark hover:bg-accent-light hover:text-accent-primary transition-all duration-250 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
