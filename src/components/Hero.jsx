
function Hero() {
  return (
    <div><section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-center px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="relative z-10 max-w-4xl py-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            Disponible pour de nouveaux défis
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Développeuse Web <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mt-2">Fullstack</span></h1>
          <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">Je conçois des solutions web complètes, de l'interface utilisateur à la gestion des données.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/votre-cv.pdf" 
              download 
              className="px-8 py-3 bg-emerald-500 text-zinc-950 font-medium text-sm  rounded-full hover:bg-emerald-400 transition-all hover:-translate-y-1 flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
               Télécharger mon CV
            </a>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-3 bg-zinc-800 border border-zinc-700 text-zinc-200 rounded-full font-bold hover:bg-zinc-700 transition-all"
            >
              Mes Travaux
            </button>
          </div>
        </div>

        {/* BANDE DÉFILANTE SKILLS */}
        <div className="absolute bottom-0 w-full py-6 bg-zinc-950/50 border-y border-zinc-800 backdrop-blur-sm overflow-hidden whitespace-nowrap">
          <div className="flex animate-infinite-scroll">
            {[...skillsList, ...skillsList].map((skill, i) => (
              <div key={i} className="flex items-center gap-4 mx-8 text-zinc-400 uppercase tracking-widest text-xs font-mono">
                <Zap size={12} className="text-emerald-500" /> {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { display: flex; width: max-content; animation: infinite-scroll 30s linear infinite; }
      `}</style></div>
  )
}

export default Hero