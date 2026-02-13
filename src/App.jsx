import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Twitter, Code, Palette, 
  Smartphone, Rocket, BookOpen, Users, ExternalLink, 
  Menu, X, ChevronDown, MapPin, Globe, Layout 
} from 'lucide-react';
import ProjetImg1 from './assets/img1.png'
import ProjetImg2 from './assets/img2.png'
import ProjetImg3 from './assets/img3.png'
import ProjetImg4 from './assets/img4.png'
import ProjetImg5 from './assets/img5.png'
import ProjetImg6 from './assets/img6.png'


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };


  const projects = [
    {
      title: "Gaming_BSM",
      type: "Jeu Web Interactif",
      description: "Jeu de devinette de nombre avec interface utilisateur engageante. Logique JavaScript avancée et design responsive pour une expérience fluide.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Luz-c/Bsm_gaming",
      demo: "https://bsm-gaming.vercel.app/",
      image: ProjetImg6
    },
    {
      title: "Iguide",
      type: "Guide d'orientation",
      description: "Guide d'orientation pour les nouveau bachelier",
      tags: ["HTML", "Tailwind css", "JS"],
      github: "https://github.com/Luz-c/GUIDE",
      demo: null,
      image: ProjetImg5
    },
    {
      title: "To do list",
      type: "Application web",
      description: "Application de gestion de tâche .",
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/Luz-c/TASK",
      demo: null,
      image: ProjetImg4
    },
    {
      title: "Library Manager",
      type: "Application de Gestion",
      description: "Système complet de gestion de bibliothèque en ligne permettant l'emprunt, le retour et le catalogage de livres numériques.",
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      github: "https://github.com/Luz-c/Library",
      demo: null,
      image: ProjetImg3
    },
    {
      title: "Site Touristique",
      type: "Projet Hackathon",
      description: "Vitrine web immersive mettant en valeur des destinations locales (Bénin). Focus sur l'accessibilité et le SEO sémantique.",
      tags: ["HTML5", "Tailwind css", "Javascript"],
      demo: "https://github.com/Luz-c/Site_Touristique",
      github: "https://github.com/Luz-c/Site_Touristique",
      image: ProjetImg2
    },
    {
      title: "Exam Easy",
      type: "EdTech Platform",
      description: "Plateforme d'examen en ligne sécurisée et intuitive pour les établissements scolaires. Gestion des temps et correction automatique.",
      tags: ["React.js", "Tailwind", "Firebase"],
      github: "https://github.com/Luz-c/front_educ",
      demo: null,
      image: ProjetImg1
    }
  ];


  const skills = {
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 }
    ],
    tools: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Responsive Dev", level: 85 }
    ]
  };


  const interests = [
    { icon: <Code className="w-6 h-6" />, title: "Dev Frontend" },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile First" },
    { icon: <Rocket className="w-6 h-6" />, title: "Performance" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Veille Tech" },
    { icon: <Users className="w-6 h-6" />, title: "Open Source" }
  ];


  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen font-sans selection:bg-emerald-500/30">      
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
          scrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold flex items-center gap-2 group">
              <span className="w-8 h-8 flex items-center justify-center rounded bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                L
              </span>
              <span className="tracking-tight">dev.luz</span>
            </button>


            <ul className="hidden md:flex space-x-8">
              {['accueil', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item === 'accueil' ? 'home' : item)}
                    className={`text-sm font-medium transition-colors relative py-2 ${
                      activeSection === (item === 'accueil' ? 'home' : item) ? 'text-emerald-400' : 'text-zinc-300 hover:text-zinc-100'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform origin-left transition-transform duration-300 ${
                       activeSection === (item === 'accueil' ? 'home' : item) ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </button>
                </li>
              ))}
            </ul>


            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-zinc-300 hover:text-emerald-400 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-700 animate-fade-in">
              <ul className="px-4 py-4 space-y-2">
                {['accueil', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item === 'accueil' ? 'home' : item)}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === (item === 'accueil' ? 'home' : item) 
                          ? 'bg-emerald-500/10 text-emerald-400 font-semibold' 
                          : 'text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>


      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />


        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Développeuse Web
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mt-2">
              Frontend 
            </span>
          </h1>
          
          <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en expériences web fluides et modernes. 
            Spécialisée dans l'écosystème <span className="text-zinc-100 font-semibold">React</span> et le design intuitif.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <Layout size={20} />
              Voir mon Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 text-zinc-200 hover:text-emerald-400 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1"
            >
              Me contacter
            </button>
          </div>
        </div>


        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
          <ChevronDown size={24} />
        </div>
      </section>


      <section id="about" className="py-24 px-4 sm:px-6 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-zinc-800 rounded-2xl border border-zinc-700 p-8">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 rounded-full bg-zinc-700 flex items-center justify-center text-3xl">👩‍💻</div>
                   <div>
                     <h3 className="font-bold text-xl">Luz-clarita ASSOGBA</h3>
                     <p className="text-emerald-400 text-sm">Frontend Developer</p>
                   </div>
                </div>
                <div className="space-y-3 font-mono text-sm text-zinc-300">
                   <p><span className="text-purple-400">const</span> <span className="text-blue-400">skills</span> = [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Creative"</span>];</p>
                   <p><span className="text-purple-400">const</span> <span className="text-blue-400">location</span> = <span className="text-green-300">"Bénin"</span>;</p>
                   <p><span className="text-purple-400">if</span> (project === <span className="text-green-300">"Interesting"</span>) {'{'}</p>
                   <p className="pl-4"><span className="text-blue-400">acceptChallenge</span>();</p>
                   <p>{'}'}</p>
                </div>
              </div>
            </div>


            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-emerald-500">01.</span> 
                À propos de moi
              </h2>
              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Bonjour ! Je suis une développeuse web basée à Cotonou. Mon parcours est guidé par une passion simple : <span className="text-zinc-100 font-medium">créer des choses qui vivent sur internet.</span>
                </p>
                <p>
                  J'aime combiner la logique du code avec la créativité du design. Que ce soit pour développer une application complexe ou un site vitrine élégant, je m'efforce toujours de produire un code propre et une expérience utilisateur impeccable.
                </p>
                <p>
                  Quand je ne code pas, je suis probablement en train d'explorer de nouvelles technologies ou de peaufiner mes designs sur Figma.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full border border-zinc-700 text-sm text-zinc-200">
                    <MapPin size={16} className="text-emerald-500" /> Cotonou, Bénin
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full border border-zinc-700 text-sm text-zinc-200">
                    <Globe size={16} className="text-emerald-500" /> Télétravail possible
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="projects" className="py-24 px-4 sm:px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3 mb-2">
                <span className="text-emerald-500">02.</span> 
                Mes Réalisations
              </h2>
              <p className="text-zinc-300">Une collection de mes projets favoris, personnels et académiques.</p>
            </div>
            <a href="https://github.com/Luz-c" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium group">
              Voir tout le github <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-zinc-800/50 border border-zinc-700 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden bg-zinc-700 border-b border-zinc-600/50">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-700">
                      <Code size={32} className="text-zinc-500" />
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/90 text-white rounded-lg hover:bg-emerald-500 transition-colors backdrop-blur-sm"
                        title="Code Source"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/90 text-white rounded-lg hover:bg-emerald-500 transition-colors backdrop-blur-sm"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>


                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-500/70 uppercase tracking-wider">
                      {project.type}
                    </p>
                  </div>
                  
                  <p className="text-zinc-300 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>


                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-700/50">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="skills" className="py-24 px-4 sm:px-6 bg-zinc-800/20 border-y border-zinc-700/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-emerald-500">03.</span> 
                Compétences Tech
              </h2>
              <div className="space-y-8">
                {[...skills.frontend, ...skills.tools].slice(0, 5).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      <span className="text-zinc-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-emerald-500">04.</span> 
                Centres d'intérêt
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group">
                    <div className="text-zinc-400 group-hover:text-emerald-400 mb-3 transition-colors">
                      {interest.icon}
                    </div>
                    <h4 className="font-bold text-sm text-zinc-200">{interest.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="py-24 px-4 sm:px-6 bg-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-emerald-400 font-mono mb-4">05. What's Next?</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-100">Restons en contact</h2>
          <p className="text-zinc-300 text-lg mb-12 leading-relaxed">
            Je suis actuellement à la recherche de nouvelles opportunités (stage ou freelance). 
            Que vous ayez une question, un projet ou juste envie de discuter tech, 
            n'hésitez pas à m'écrire !
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="mailto:luz.assogba@example.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-lg hover:bg-emerald-400 transition-all hover:-translate-y-1">
              <Mail size={20} />
              Envoyer un email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium rounded-lg hover:text-white hover:border-zinc-600 transition-all hover:-translate-y-1">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>


      <footer className="py-8 bg-zinc-800 border-t border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/Luz-c" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Github size={22} /></a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Twitter size={22} /></a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Linkedin size={22} /></a>
          </div>
          <p className="text-zinc-500 text-sm">
            Conçu et codé avec <span className="text-emerald-400">♥</span> par Luz-clarita ASSOGBA © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
