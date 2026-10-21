export default function Projects() {
  const projects = [
    {
      title: 'CodeCraft Digital',
      description: 'Site d\'agence de services numériques proposant du développement web et de la formation.',
      tags: ['React', 'Tailwind CSS', 'PHP'],
      link: '#',
    },
    {
      title: 'Alliance Mutuelle',
      description: 'Plateforme bancaire avec calculateur de prêt et espace utilisateur.',
      tags: ['WordPress', 'Elementor', 'JavaScript'],
      link: '#',
    },
    {
      title: 'Gestion d\'Événements',
      description: 'Application de gestion et d\'organisation d\'événements universitaires.',
      tags: ['Figma', 'UI/UX', 'Web'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Mes <span className="text-sky-400">Projets</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-sky-500/50 transition-colors flex flex-col justify-between p-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-sky-400">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 text-sky-300 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block w-full text-center bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-200 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}