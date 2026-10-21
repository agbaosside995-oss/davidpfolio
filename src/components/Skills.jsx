export default function Skills() {
  const skills = [
    { name: 'HTML5 / CSS3', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'MySQL', category: 'Base de données' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Figma', category: 'Design' },
    { name: 'Git / GitHub', category: 'Outils' },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Mes <span className="text-sky-400">Compétences</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800/50 hover:bg-slate-800 p-6 rounded-xl border border-slate-700/50 transition-all hover:-translate-y-1 text-center"
            >
              <h3 className="font-semibold text-lg text-slate-100">{skill.name}</h3>
              <span className="text-xs text-sky-400 mt-1 block">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}