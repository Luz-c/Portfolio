import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Twitter, Code, Palette,
  Smartphone, Rocket, BookOpen, Users, ExternalLink,
  Menu, X, ChevronDown, MapPin, Globe, Layout, Zap, FileText, Send, Briefcase, ArrowUpRight
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'À propos', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Liste d'objets avec les vrais logos (via SimpleIcons)
  const skillsList = [
    { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/white" }, // Maintenu en blanc (officiel = noir)
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "Git & GitHub", icon: "https://cdn.simpleicons.org/github/white" }, // Maintenu en blanc (officiel = noir)
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman" },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
    { name: "SEO", icon: "https://cdn.simpleicons.org/googlesearchconsole" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
    { name: "Django", icon: "https://cdn.simpleicons.org/django/white" } // Maintenu en blanc (officiel = vert très foncé)
  ];

  const workHistory = [
    {
      company: "Women In Tech",
      role: "Développeuse Fullstack (Temps plein)",
      period: "2026 - Présent",
      desc: "Développement et maintenance de solutions web complètes pour l'inclusion technologique.",
      projects: [
        { title: "SAFEN 2026", image: "/assets/Capture d'écran 2026-02-25 174752.png", desc: "Puissance féminine à l’ère de l’IA: Compétences, Innovation et Inclusion pour Transformer l’Afrique.", link: "https://safen.womenintech.bj/" },
        { title: "Guid'elles", image: "/assets/guid.png", desc: "Programme de mentorat", link: "https://womenintech.bj/guidelles/" }

      ],
      details: ["Optimisation et intégration du site web", "Responsive design", "Inclusion numérique", "Correction automatique", "Gestion sécurisée", "UX moderne"]
    },
    {
      company: "Ashita Skills",
      role: "Développeuse Frontend (Stage)",
      period: "Fév 2026 - Présent",
      desc: "Conception d'interfaces dynamiques et intégration de maquettes pour une startup innovante.",
      projects: [
        { title: "Intégration de maquette", image: "/assets/Capture d'écran 2026-02-25 175035.png", desc: "Intégration de maquettes pour le startup Ashita skills.", link: "https://inovtest.ashitaskills.com/" },
        { title: "Proposition de design", image: "/assets/Capture d'écran 2026-02-24 112812.png", desc: "Page contact pour le startup Ashita skills.", link: "https://inovtest.ashitaskills.com/contact/" },
        { title: "Développement d'une landing page", image: "/assets/ashit.png", desc: "Landing page pour l'inscription aux ateliers en présentiel", link: "https://ashita.ct.ws/?i=1" }

      ],
      details: ["Collaboration à distance", "Intégration UI/UX", "Refonte de pages", "Optimisation SEO", "Accessibilité web"]
    },
    {
      company: "BSM Group",
      role: "Stagiaire Développeuse Web",
      period: "Oct 2025 - Jan 2026",
      desc: "Immersion technique sur des projets web de la conception à la mise en base de données.",
      projects: [
        { title: "Gaming_BSM", image: "/assets/img6.png", desc: "Jeu interactif intelligent.", link: "https://bsm-gaming.vercel.app/" },
      ],
      details: ["Logique JS avancée", "Manipulation du DOM", "Design Responsive", "Gestion de projet Agile", "Collaboration Lead Tech"]
    },

    {
      company: "Whispa",
      role: "Développeuse Fullstack en Formation",
      period: "Avril 2025 - Présent",
      desc: "Formation continue en développement web fullstack.",
      projects: [
        { title: "TOTCHE", image: "/assets/img2.png", desc: "Plateforme de mise en relation entre touriste et guides locaux.", link: "https://luz-c.github.io/Site_Touristique/" },
        { title: "Intégration de maquette", image: "/assets/Capture d'écran 2026-02-25 182732.png", desc: "Intégration de maquette au pixel près lors de ma formation.", link: "#" },
        { title: "Mama Bio", image: "/assets/Capture d'écran 2026-02-25 183557.png", desc: "Site vitrine pour une entreprise de bio.", link: "#" },
        { title: "Intégration de maquette", image: "/assets/Capture d'écran 2026-02-25 184112.png", desc: "Intégration d'un dashboard.", link: "#" }
      ],
      details: ["Travail en équipe", "Intégration UI/UX", "Logique de données", "Refonte de pages", "Optimisation SEO", "Accessibilité web"]
    },

    {
      company: "Ecole229 - Dclic",
      role: "Formation developpement Web",
      period: "Jan 2025 - Mai 2025",
      desc: "Formation intensive en développement web fullstack.",
      projects: [
        { title: "Iguide", image: "/assets/img5.png", desc: "Iguide,guide d'orientation des nouveau bachelier.", link: "https://luz-c.github.io/GUIDE/" },
        { title: "Exam Easy", image: "/assets/img1.png", desc: "Plateforme d'examen en ligne.", link: "#" },
        { title: "Bibliotheque", image: "/assets/img3.png", desc: "Plateforme de gestion de bibliothèque.", link: "#" }
      ],
      details: ["Logique JS avancée", "Manipulation du DOM", "Design Responsive"]
    }
  ];

  return (
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen  selection:bg-emerald-500/30 overflow-x-hidden">

      {/* CENTRE : MENU FLOTTANT DESKTOP */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex px-4 w-full max-w-fit">
        <div className={`flex items-center gap-2 p-1.5 rounded-lg border transition-all duration-300 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-xl border-zinc-700' : 'bg-zinc-800/40 border-zinc-700/50'
          }`}>
          {['home', 'À propos', 'skills', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${activeSection === item ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-100'
                }`}
            >
              {item === 'home' ? 'Accueil' : item === 'À propos' ? 'À propos' : item === 'skills' ? 'Services' : item === 'experience' ? 'Expérience' : item}
            </button>
          ))}
        </div>
      </nav>

      {/* MENU MOBILE */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-fit">
        <div className={`flex items-center gap-2 p-1.5 rounded-lg border transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-zinc-900/95 backdrop-blur-xl border-zinc-700' : 'bg-zinc-800/60 backdrop-blur-md border-zinc-700/50'}`}>
          <button
            onClick={() => scrollToSection(activeSection)}
            className="px-5 py-2 rounded-md text-xs font-bold uppercase tracking-widest bg-emerald-500 text-zinc-950 transition-all"
          >
            {activeSection === 'home' ? 'Accueil' : activeSection === 'À propos' ? 'À propos' : activeSection === 'skills' ? 'Services' : activeSection === 'experience' ? 'Expérience' : 'Contact'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-200 hover:text-white hover:bg-zinc-800 rounded-md transition-colors focus:outline-none"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[250px] bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-lg p-2.5 flex flex-col gap-1 animate-fade-in">
            {['home', 'À propos', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`px-5 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest text-left transition-all ${activeSection === item ? 'bg-emerald-500/10 text-emerald-500' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100'
                  }`}
              >
                {item === 'home' ? 'Accueil' : item === 'À propos' ? 'À propos' : item === 'skills' ? 'Services' : item === 'experience' ? 'Expérience' : 'Contact'}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="py-12 md:py-24 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl pt-10 pb-16 md:py-20 mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible pour de nouveaux défis
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight">Développeuse Web <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mt-2">Fullstack</span></h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">Je conçois des solutions web complètes, de l'interface utilisateur à la gestion des données.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 bg-emerald-500 text-zinc-950 font-semibold text-xs uppercase tracking-wider rounded-md hover:bg-emerald-400 transition-all shadow-none"
            >
              Mes Réalisations
            </button>
          </div>

          {/* BANDE DÉFILANTE SKILLS - CONTENUE */}
          <div className="mt-12 md:mt-16 w-full max-w-7xl mx-auto py-4 bg-zinc-900/40 border border-zinc-800/60 rounded-lg backdrop-blur-md overflow-hidden whitespace-nowrap shadow-none">
            <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex items-center animate-infinite-scroll hover:[animation-play-state:paused]">
                {[...skillsList, ...skillsList].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex items-center gap-3 mx-8 group cursor-default">
                      <div className="relative transition-transform duration-300 group-hover:scale-105 rounded-sm overflow-hidden flex-shrink-0 border border-zinc-800/50 group-hover:border-emerald-500/30">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-5 h-5 bg-white/5 p-0.5" 
                        />
                        <div className="absolute inset-0 bg-emerald-500/40 group-hover:bg-transparent mix-blend-multiply transition-colors duration-300 pointer-events-none"></div>
                      </div>
                      <span className="text-zinc-400 uppercase tracking-widest text-[11px] font-bold group-hover:text-zinc-100 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    {/* Séparateur minimaliste */}
                    <div className="w-[1px] h-4 bg-zinc-800/80"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { display: flex; width: max-content; animation: infinite-scroll 30s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* SECTION A PROPOS */}
      <section id="À propos" className="py-24 px-4 sm:px-6 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group">
            <div className="relative z-10 group rounded-none rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden border border-zinc-700 bg-zinc-900">
              <img src="/assets/ChatGPT Image 27 févr. 2026, 20_20_04.png" alt="Luz" className="w-full h-full object-cover -scale-x-100 transition duration-500 aspect-square" />
              <div className="absolute inset-0 bg-emerald-500/40 group-hover:bg-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/20 rounded-none rounded-tl-[4rem] rounded-br-[4rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">À propos de moi</h2>
            <div className="space-y-6 text-zinc-300 text-xl leading-relaxed">
              <p>Je suis <span className="text-emerald-400 font-medium">Luz-clarita ASSOGBA</span>, développeuse fullstack à Cotonou.</p>
              <p>Maîtrisant à la fois le frontend et le backend, je crée des applications web cohérentes, performantes et centrées sur l'utilisateur.</p>
            </div>
            <div className="pt-6">
              <a
                href="/assets/CV_ASSOGBA_Luz-clarita.pdf"
                download
                className="inline-flex px-8 py-3 bg-zinc-800 border border-zinc-700 text-zinc-200 rounded-md font-bold hover:bg-zinc-700 transition-all items-center gap-3"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="skills" className="py-24 px-4 sm:px-6 bg-zinc-800/20  border-zinc-700/50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            {[
              {
                icon: <Code />,
                title: "Fullstack Dev",
                text: "Création d'applications web complètes, de la conception des bases de données à l'interface interactive avec React et Node.js."
              },
              {
                icon: <Palette />,
                title: "UI/UX & Frontend",
                text: "Conception de maquettes sur Figma et intégration au pixel près avec Tailwind CSS pour des expériences fluides et modernes."
              },
              {
                icon: <Smartphone />,
                title: "Architecture Web",
                text: "Mise en place d'architectures robustes, sécurisées et responsives pour garantir des performances optimales sur tous les écrans."
              }
            ].map((s, i) => (
              <div key={i} className="p-6 md:p-8 bg-zinc-900/50 border border-zinc-700 rounded-lg hover:border-emerald-500/30 transition-all shadow-none">
                <div className="text-emerald-500 mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{s.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION FUSIONNÉE EXPÉRIENCE & PROJETS */}
      <section id="experience" className="py-24 px-4 sm:px-6 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16">
            Expérience & Réalisations
          </h2>

          <div className="space-y-16 md:space-y-32 relative before:absolute before:inset-0 before:left-6 md:before:left-8 before:h-full before:w-[1px] before:bg-zinc-800">
            {workHistory.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16 group">
                <div className="absolute left-4 md:left-6 top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 z-10 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-1 md:gap-0">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-100">{exp.role}</h3>
                  <span className="text-emerald-500 font-mono text-sm md:text-lg">{exp.period}</span>
                </div>
                <h4 className="text-zinc-400 text-lg font-medium mb-8 flex items-center gap-2 text-emerald-500/80">
                  - {exp.company}
                </h4>

                {exp.projects.length > 0 && (
                  <div className="flex flex-col gap-16 mb-8">
                    {exp.projects.map((proj, idx) => (
                      <div key={idx} className={`group/project flex flex-col items-stretch gap-6 md:gap-10 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        
                        {/* Image Card */}
                        <div className="relative group/image w-full md:w-[60%] aspect-video border border-zinc-700/50 rounded-none rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[4rem] md:rounded-br-[4rem] overflow-hidden shadow-sm group-hover/project:border-emerald-500/30 transition-all duration-500">
                          <img src={proj.image} alt={proj.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover/project:scale-105" />
                          
                          {/* Filtre conservé et renforcé */}
                          <div className="absolute inset-0 bg-emerald-500/40 group-hover/project:bg-transparent mix-blend-multiply transition-colors duration-500 pointer-events-none"></div>

                          {/* Flèche centrée sur l'image (visible au hover de l'image uniquement) */}
                          <a href={proj.link} target="_blank" rel="noreferrer" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-zinc-950/60 backdrop-blur-md rounded-full border border-white/20 text-emerald-400 opacity-0 scale-75 group-hover/image:opacity-100 group-hover/image:scale-100 hover:!bg-emerald-500 hover:!text-zinc-950 transition-all duration-500 z-10 shadow-2xl">
                            <ArrowUpRight size={24} className="md:w-7 md:h-7" strokeWidth={2.5} />
                          </a>
                        </div>
                        
                        {/* Details Card */}
                        <div className="relative w-full md:w-[40%] p-6 md:p-10 bg-zinc-800/20 border border-zinc-700/30 rounded-none rounded-tl-[2rem] rounded-br-[2rem] md:rounded-tl-[4rem] md:rounded-br-[4rem] flex flex-col justify-center shadow-sm group-hover/project:border-emerald-500/20 transition-all duration-500">
                          
                          {/* Flèche glassmorphism déplacée ici */}
                          <a href={proj.link} target="_blank" rel="noreferrer" className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-zinc-900/50 backdrop-blur-md rounded-full border border-white/10 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 transition-all duration-300 z-10 shadow-sm">
                            <ArrowUpRight size={22} strokeWidth={2.5} />
                          </a>

                          <div className="flex gap-1.5 mb-6 px-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/project:bg-emerald-500 transition-colors" />
                            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/project:bg-emerald-500 transition-colors delay-75" />
                            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover/project:bg-emerald-500 transition-colors delay-150" />
                          </div>
                          <h5 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4 pr-12">{proj.title}</h5>
                          <p className="text-zinc-400 text-lg leading-relaxed">{proj.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-zinc-800/20  from-zinc-900 via-zinc-800 to-zinc-900 text-center">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter text-zinc-100">Prêt à collaborer ?</h2>
          <p className="text-zinc-400 mb-10 md:mb-12 text-lg md:text-2xl font-medium px-4 md:px-0">Actuellement en quête de nouveaux projets stimulants.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
            <a href="mailto:sandrelleassogba6@gmail.com" className="flex items-center justify-center gap-3 px-8 py-3 text-sm bg-zinc-900 border border-zinc-800 text-emerald-400 rounded-md font-medium hover:bg-zinc-800 transition-all tracking-widest">
              <Send size={18} /> Envoyer un message
            </a>
            <a href="https://www.linkedin.com/in/sandrelle-assogba/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-3 bg-emerald-500 text-zinc-950 rounded-md font-medium hover:bg-emerald-400 transition-all font-bold text-xs tracking-widest">
              <Linkedin size={18} /> Linkedin
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 text-center overflow-hidden  bg-emerald-500/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/30 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-[0.3em] cursor-default opacity-80 hover:opacity-100 transition-opacity">
            Luz-clarita ASSOGBA — Fullstack Excellence © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}