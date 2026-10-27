export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-200 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          À propos de <span className="text-sky-400">moi</span>
        </h2>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Photo (5 colonnes) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Effet de lueur en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-purple-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
              
              {/* Cadre de la photo */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900">
                <img 
                  src="./src/assets/logo.jpeg" 
                  alt="David Agbaossi" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Colonne Texte & Nom (7 colonnes) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider block mb-2">
                Développeur web & mobile
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                David Agbaossi
              </h3>
            </div>

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

            {/* Badges de compétences rapides */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-2xl font-bold text-sky-400 block mb-1">Web</span>
                <span className="text-xs text-slate-400">Frontend & Backend</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-2xl font-bold text-sky-400 block mb-1">UI/UX</span>
                <span className="text-xs text-slate-400">Design réactif & ergonomie</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}