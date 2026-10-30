export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex items-center justify-center bg-slate-900 text-white px-6 relative overflow-hidden"
    >
      {/* 1. Amélioration Visuelle sans Impact sur la Vitesse (Background Dégradé Léger) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500 rounded-full blur-[128px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-5xl text-center relative z-10">
        {/* 2. Badge de Confiance / Nouveauté (Attire l'œil immédiatement) */}
        <span className="inline-block bg-sky-500/20 text-sky-400 font-semibold px-4 py-1 rounded-full text-sm mb-6">
          Développeur Web Freelance - React & Tailwind CSS
        </span>

        {/* 3. Titre d'Accroche Clair et Impactant (H1 Optimisé SEO & Conversion) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
          Propulsez vos idées avec un<br/>
          <span className="text-sky-400 bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300">
            Développeur Web et Mobile 
          </span>
        </h1>

        {/* 4. Description Concisse (Proposition de Valeur) */}
        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Je conçois des interfaces modernes, performantes et centrées sur l'utilisateur. Du design à la mise en ligne, je transforme vos concepts en expériences digitales fluides.
        </p>

        {/* 5. Appels à l'Action (CTA) Performants (Clairs et Distincts) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {/* CTA Principal : Action Directe */}
          <a 
            href="#projects" 
            className="group inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-600 text-slate-950 font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-sky-500/20 active:scale-95"
          >
            Découvrir mes Projets
            {/* Icône animée au survol pour dynamiser */}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* CTA Secondaire : Information/Contact (Moins agressif) */}
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2.5 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 text-slate-200 font-medium px-8 py-3.5 rounded-lg transition-all active:scale-95"
          >
            Discuter de votre besoin
          </a>
        </div>
      </div>
    </section>
  );
}