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
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
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

  const skillsList = ["React.js", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", "Tailwind CSS", "Figma", "Git & GitHub", "REST APIs"];

  const workHistory = [
    {
      company: "Women In Tech",
      role: "Développeuse Fullstack (Temps plein)",
      period: "2026 - Présent",
      desc: "Développement et maintenance de solutions web complètes pour l'inclusion technologique.",
      projects: [
        { title: "Exam Easy", image: "/assets/Capture d'écran 2026-02-25 174752.png", desc: "Plateforme d'examen sécurisée.", link: "https://safen.womenintech.bj/" }
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
        { title: "Proposition de design", image: "/assets/Capture d'écran 2026-02-24 112812.png", desc: "Page contact pour le startup Ashita skills.", link: "https://inovtest.ashitaskills.com/contact/" }
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
    <div className="relative bg-zinc-900 text-zinc-100 min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* HEADER DESKTOP */}
      <div className="absolute top-6 left-0 w-full z-40 hidden md:flex justify-center pointer-events-none">
        <div className="w-full max-w-6xl flex justify-between items-start px-6">
          <div className="pointer-events-auto">
            <div className="flex items-center gap-2.5 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-bold text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Ouvert au travail
            </div>
          </div>

          <div className="pointer-events-auto">
            <a
              href="/votre-cv.pdf"
              download
              className="px-8 py-2.5 bg-emerald-500 text-zinc-950 font-medium text-sm rounded-full hover:bg-emerald-400 transition-all hover:-translate-y-1 flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>

      {/* CENTRE : MENU FLOTTANT DESKTOP */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex px-4 w-full max-w-fit">
        <div className={`flex items-center gap-2 p-2 rounded-full border transition-all duration-300 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-xl border-zinc-700 shadow-2xl' : 'bg-zinc-800/40 border-zinc-700/50'
          }`}>
          {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeSection === item ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-zinc-100'
                }`}
            >
              {item === 'home' ? 'Accueil' : item === 'skills' ? 'Services' : item === 'experience' ? 'Expérience' : item}
            </button>
          ))}
        </div>
      </nav>

      {/* MENU MOBILE */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-fit">
        <div className={`flex items-center gap-2 p-2 rounded-full border transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-zinc-900/95 backdrop-blur-xl border-zinc-700 shadow-2xl' : 'bg-zinc-800/60 backdrop-blur-md border-zinc-700/50'}`}>
          <button 
            onClick={() => scrollToSection(activeSection)}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500 text-zinc-950 transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)]"
          >
            {activeSection === 'home' ? 'Accueil' : activeSection === 'about' ? 'À propos' : activeSection === 'skills' ? 'Services' : activeSection === 'experience' ? 'Expérience' : 'Contact'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-zinc-200 hover:text-white hover:bg-zinc-800 rounded-full transition-colors focus:outline-none"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[250px] bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl p-2.5 shadow-2xl flex flex-col gap-1 animate-fade-in">
            {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-left transition-all ${
                  activeSection === item ? 'bg-emerald-500/10 text-emerald-500' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100'
                }`}
              >
                {item === 'home' ? 'Accueil' : item === 'about' ? 'À propos' : item === 'skills' ? 'Services' : item === 'experience' ? 'Expérience' : 'Contact'}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="py-10 md:py-24 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl pt-16 pb-20 md:py-20 mt-8 md:mt-0">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-widest uppercase md:hidden">
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
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 bg-zinc-800 border border-zinc-700 text-zinc-200 rounded-full font-bold hover:bg-zinc-700 transition-all"
            >
              Mes Réalisations
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
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* SECTION A PROPOS */}
      <section id="about" className="py-24 px-4 sm:px-6 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-xl">
              <img src="/assets/Gemini_Generated_Image_wfpcicwfpcicwfpc.png" alt="Luz" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 aspect-square" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/20 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><span className="text-emerald-500">01.</span> À propos de moi</h2>
            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
              <p>Je suis <span className="text-emerald-400 font-medium">Luz-clarita ASSOGBA</span>, développeuse fullstack à Cotonou.</p>
              <p>Maîtrisant à la fois le frontend et le backend, je crée des applications web cohérentes, performantes et centrées sur l'utilisateur.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-4 border-l-2 border-emerald-500 bg-zinc-900/50 rounded-r-lg">
                <h3 className="text-zinc-100 font-bold mb-1">Vision</h3>
                <p className="text-zinc-400 text-sm">Simplifier la vie via le web.</p>
              </div>
              <div className="p-4 border-l-2 border-emerald-500 bg-zinc-900/50 rounded-r-lg">
                <h3 className="text-zinc-100 font-bold mb-1">Objectifs</h3>
                <p className="text-zinc-400 text-sm">Bâtir des outils numériques à fort impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="skills" className="py-24 px-4 sm:px-6 bg-zinc-800/20 border-y border-zinc-700/50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 flex items-center  gap-3"><span className="text-emerald-500 font-mono text-xl">02.</span> Expertises</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
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
              <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-700 rounded-2xl hover:border-emerald-500/30 transition-all">
                <div className="text-emerald-500 mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase text-xs tracking-widest">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION FUSIONNÉE EXPÉRIENCE & PROJETS */}
      <section id="experience" className="py-24 px-4 sm:px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
            <span className="text-emerald-500 font-mono text-xl">03.</span> Expérience & Réalisations
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:h-full before:w-[1px] before:bg-zinc-800">
            {workHistory.map((exp, i) => (
              <div key={i} className="relative pl-16 group">
                <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500 z-10 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                  <span className="text-emerald-500 font-mono text-sm">{exp.period}</span>
                </div>
                <h4 className="text-zinc-400 font-medium mb-4 flex items-center gap-2 text-emerald-500/80">
                   <Briefcase size={14} /> {exp.company}
                </h4>
                <p className="text-zinc-400 leading-relaxed max-w-2xl italic mb-6">{exp.desc}</p>

                {exp.projects.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {exp.projects.map((proj, idx) => (
                      <div key={idx} className="group/card relative">
                        <div className="relative p-6 bg-zinc-800/40 border border-zinc-700 rounded-2xl group-hover/card:border-emerald-500/30 transition-all duration-500">
                          <div className="flex gap-1.5 mb-4 px-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-600"/>
                            <div className="w-2 h-2 rounded-full bg-zinc-600"/>
                            <div className="w-2 h-2 rounded-full bg-zinc-600"/>
                          </div>
                          <div className="relative rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl transition-transform group-hover/card:-translate-y-2 duration-500 aspect-video">
                            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                              <h5 className="text-emerald-400 font-bold mb-1">{proj.title}</h5>
                              <p className="text-xs text-zinc-300 mb-4">{proj.desc}</p>
                              <a href={proj.link} target="_blank" rel="noreferrer" className="p-2 bg-emerald-500 text-zinc-950 rounded-full hover:bg-emerald-400 transition-colors">
                                <ArrowUpRight size={20} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-y-3 gap-x-4 pt-4 border-t border-zinc-800/50">
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zinc-400 ">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION CONTACT - STYLE COPIÉ SUR HERO */}
      <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-center">
        {/* Grille et Halos identiques au Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-zinc-100">Prêt à collaborer ?</h2>
          <p className="text-zinc-400 mb-12 text-lg font-medium">Actuellement en quête de nouveaux projets stimulants.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:luz.assogba@example.com" className="flex items-center justify-center gap-3 px-10 py-3 text-sm bg-zinc-900 border border-zinc-800 text-emerald-400 rounded-full font-medium hover:bg-zinc-800 transition-all tracking-widest">
              <Send size={18} /> Envoyer un message
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-10 py-3 bg-emerald-500 text-zinc-950 rounded-full font-medium hover:bg-emerald-400 transition-all font-bold text-xs tracking-widest">
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