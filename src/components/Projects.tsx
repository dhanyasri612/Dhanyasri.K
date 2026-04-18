import { useState } from "react";
import { ExternalLink, Github, Brain, Cloud, Palette, RotateCcw, Star } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brain Tumor Detection",
    description: "CNN-based medical MRI analysis achieving 94% classification accuracy.",
    about: "Built a deep learning pipeline using TensorFlow/Keras to classify brain MRI scans into tumor types. Engineered data preprocessing, augmentation, and multi-class classification with binary dataset support. Delivered as a web interface for clinician use.",
    tags: ["TensorFlow", "Keras", "CNN", "Python"],
    category: "aiml",
    github: "https://github.com/dhanyasri612/Brain-Tumor",
    live: "",
    figma: "",
    thumbnail: "/projects/brain_tumor.png",
    accent: "from-teal-500/20 to-cyan-500/10",
    dot: "bg-teal-500",
    featured: true,
  },
  {
    title: "Code Reviewer App",
    description: "AI-assisted code review that analyzes quality and highlights issues.",
    about: "An intelligent code review tool powered by AI that provides feedback on code quality, readability, and maintainability. Supports multiple languages and gives actionable suggestions to improve code structure.",
    tags: ["Python", "AI", "NLP", "Code Analysis"],
    category: "aiml",
    github: "https://github.com/dhanyasri612/Code-Reviewer",
    live: "https://code-reviewer-iota-green.vercel.app/",
    figma: "",
    thumbnail: "/projects/code-reviewer.png",
    accent: "from-violet-500/20 to-purple-500/10",
    dot: "bg-violet-500",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Full-stack React/Django weather app with multi-location support.",
    about: "Integrates Open-Meteo API with a React frontend and Django backend. Features Recharts-powered visualizations, multi-location search, and optimized async data fetching for real-time weather updates.",
    tags: ["React", "Django", "Axios", "Recharts"],
    category: "fullstack",
    github: "https://github.com/dhanyasri612/weather-frontend",
    live: "https://weather-frontend-sigma-ten.vercel.app/",
    figma: "",
    thumbnail: "/projects/weather_checker.png",
    accent: "from-blue-500/20 to-sky-500/10",
    dot: "bg-blue-500",
    featured: false,
  },
  {
    title: "BlogSpace App",
    description: "Full-stack blogging platform with post management and smooth UX.",
    about: "A complete blogging platform built with React, Node.js, Express, and MongoDB. Supports creating, editing, and publishing posts with a responsive UI and smooth reading experience.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "fullstack",
    github: "https://github.com/dhanyasri612/BlogSpace-App",
    live: "https://blog-space-app-xi.vercel.app/",
    figma: "",
    thumbnail: "/projects/blogspace.png",
    accent: "from-emerald-500/20 to-green-500/10",
    dot: "bg-emerald-500",
    featured: false,
  },
  {
    title: "Empower Youth Campaign",
    description: "Creative poster design for a youth empowerment initiative.",
    about: "Designed a bold campaign poster featuring strong typography, vibrant gradients, and symbolic imagery representing innovation and youth potential. Created for a social initiative to inspire the next generation.",
    tags: ["Figma", "Visual Design", "Typography", "Branding"],
    category: "design",
    github: "",
    live: "",
    figma: "https://www.figma.com/design/OnNBxN9cSo72qZuSDdOEen/Untitled?node-id=0-1",
    thumbnail: "/projects/empower_youth.png",
    accent: "from-orange-500/20 to-yellow-500/10",
    dot: "bg-orange-500",
    featured: false,
  },
  {
    title: "Mobile App UI/UX",
    description: "Comprehensive mobile interface with intuitive user flows.",
    about: "A full mobile app design with user flow mapping, component library, and accessibility-focused interactions. Covers onboarding, dashboard, and key feature screens with a modern design system.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    category: "design",
    github: "",
    live: "",
    figma: "https://www.figma.com/proto/Tx7t7zTyuLzx1rPkblrlm8/uiux?node-id=0-1&t=lINNP66KiXbQI9Xt-1",
    thumbnail: "/projects/mobile_uiux.png",
    accent: "from-pink-500/20 to-rose-500/10",
    dot: "bg-pink-500",
    featured: true,
  },
  {
    title: "Logo Design",
    description: "Modern brand identity with scalable visual elements.",
    about: "A logo design project focused on creating a clean, memorable brand mark. Designed with scalability in mind — works across digital and print, with meaningful symbolism and a strong visual identity.",
    tags: ["Figma", "Logo Design", "Branding", "Visual Identity"],
    category: "design",
    github: "",
    live: "",
    figma: "https://www.figma.com/design/8xSEoDaDE8lWOaV9sGpgbD/Untitled?node-id=6-71",
    thumbnail: "/projects/design_system.png",
    accent: "from-cyan-500/20 to-teal-500/10",
    dot: "bg-cyan-500",
    featured: false,
  },
  {
    title: "Code Reviewer Website",
    description: "Web platform design for a collaborative code review tool.",
    about: "A full web platform UI/UX design for a code review tool. Includes dashboard, review flow, and collaboration features — designed with a developer-first mindset for efficient code quality management.",
    tags: ["Figma", "Web Design", "UI/UX", "Platform Design"],
    category: "design",
    github: "",
    live: "",
    figma: "https://www.figma.com/proto/iUBD54jjaeuPxEYkE6njQZ/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
    thumbnail: "/projects/code-reviewer.png",
    accent: "from-indigo-500/20 to-blue-500/10",
    dot: "bg-indigo-500",
    featured: false,
  },
];

const categories = [
  { key: "aiml",      label: "AI / ML",      icon: Brain   },
  { key: "fullstack", label: "Full-Stack",   icon: Cloud   },
  { key: "design",    label: "UI/UX Design", icon: Palette },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay, ease: "easeOut" },
});

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      {...fadeUp(index * 0.07)}
      className="h-[480px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >

        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col group"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Thumbnail */}
          <div className="relative h-56 flex-shrink-0 overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-multiply opacity-40 group-hover:opacity-60 transition-opacity`} />
            
            {project.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-lg">
                <Star className="w-3 h-3 fill-current" /> Featured
              </div>
            )}

            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${project.dot} shadow-glow`} />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 p-6">
            <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] font-mono rounded-lg border border-border/40 bg-secondary/30 text-muted-foreground group-hover:border-primary/20 transition-colors">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2.5 py-1 text-[10px] font-mono rounded-lg border border-border/40 bg-secondary/30 text-muted-foreground">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className={`absolute inset-0 rounded-3xl border border-primary/30 bg-gradient-to-br ${project.accent} backdrop-blur-md flex flex-col p-8`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h4 className="text-xl font-bold text-foreground leading-snug">{project.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-widest">{project.category}</p>
            </div>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {(project.live || project.figma) && (
                <a href={project.live || project.figma} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="h-px bg-border/30 mb-6" />

          <div className="flex-1 overflow-auto pr-2 custom-scrollbar">
            <h5 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">About Project</h5>
            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
              {project.about}
            </p>
          </div>

          <div className="flex justify-end mt-6">
            <span className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
              <RotateCcw className="w-3 h-3" /> Click to flip back
            </span>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative">

        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-primary/50" />
          <span className="text-xs font-mono text-primary tracking-[0.25em] uppercase">Portfolio</span>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm text-muted-foreground font-mono">Exploring the intersection of AI and Web Development</p>
        </motion.div>

        {/* Categorized Layout */}
        {categories.map((cat, ci) => {
          const catProjects = projects.filter((p) => p.category === cat.key);
          return (
            <div key={cat.key} className="mb-20 last:mb-0">
              <motion.div {...fadeUp(0.1 + ci * 0.05)} className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{cat.label}</h3>
                <div className="flex-1 h-px bg-border/40" />
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {catProjects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i} />
                ))}
              </div>
            </div>
          );
        })}

        {/* GitHub CTA */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col items-center justify-center mt-20 p-12 rounded-3xl border border-dashed border-border bg-card/20">
          <h3 className="text-xl font-bold text-foreground mb-4">Want to see more?</h3>
          <p className="text-sm text-muted-foreground mb-8 text-center max-w-md">I regularly push new experiments and projects to GitHub. Explore my repositories to see what else I'm working on.</p>
          <a
            href="https://github.com/dhanyasri612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <Github className="w-5 h-5" /> Explore All Repositories
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
