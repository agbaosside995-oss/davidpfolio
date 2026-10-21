export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-200 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          À propos de <span className="text-sky-400">moi</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Passionné par le développement d'applications web et l'ingénierie logicielle, je conçois des solutions digitales modernes, performantes et intuitives.
            </p>
            <p>
              Je maîtrise la création d'interfaces réactives avec React et Tailwind CSS, ainsi que la mise en place de backends solides et l'intégration de systèmes de paiement en ligne.
            </p>
            <p>
              Toujours curieux et à l'affût des nouvelles technologies, je transforme les idées en projets concrets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
              <span className="text-3xl font-bold text-sky-400 block mb-2">Web</span>
              <span className="text-sm text-slate-400">Développement Frontend & Backend</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
              <span className="text-3xl font-bold text-sky-400 block mb-2">UI/UX</span>
              <span className="text-sm text-slate-400">Design réactif & ergonomie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}