import { ExternalLink, Github, Brain, Cloud, Code, Palette, Layers, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimatedSection";

const projects = [
  {
    title: "Brain Tumor Detection",
    description: "CNN-based medical MRI analysis system achieving 94% classification accuracy. Engineered data pipelines for preprocessing and augmentation with multi-class and binary dataset support.",
    tags: ["TensorFlow", "Keras", "CNN", "Python"],
    icon: Brain,
    gradient: "from-primary to-accent",
    featured: true,
    github: "https://github.com/dhanyasri612/Brain-Tumor",
    live: "",
    type: "dev",
    thumbnail: "/projects/brain_tumor.png",
  },
  {
    title: "Code Reviewer App",
    description: "AI-assisted code review application that analyzes code quality, highlights issues, and helps improve readability and maintainability through intelligent feedback.",
    tags: ["Python", "AI", "Code Analysis", "NLP"],
    icon: Code,
    gradient: "from-emerald-500 to-teal-500",
    featured: true,
    github: "https://github.com/dhanyasri612/Code-Reviewer",
    live: "https://code-reviewer-iota-green.vercel.app/",
    type: "dev",
    thumbnail: "/projects/code-reviewer.png",
  },
  {
    title: "Weather Dashboard",
    description: "Full-stack React/Django weather application with Open-Meteo API integration, Recharts visualization, and multi-location support with optimized async operations.",
    tags: ["React", "Django", "Axios", "Recharts"],
    icon: Cloud,
    gradient: "from-primary/80 to-accent/80",
    featured: false,
    github: "https://github.com/dhanyasri612/weather-frontend",
    live: "https://weather-frontend-sigma-ten.vercel.app/",
    type: "dev",
    thumbnail: "/projects/weather_checker.png",
  },
  {
    title: "BlogSpace App",
    description: "Full-stack blogging platform with responsive UI, post management workflows, and a smooth reading and publishing experience.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    icon: Code,
    gradient: "from-indigo-500 to-cyan-500",
    featured: false,
    github: "https://github.com/dhanyasri612/BlogSpace-App",
    live: "https://blog-space-app-xi.vercel.app/",
    type: "dev",
    thumbnail: "/projects/blogspace.png",
  },
  {
    title: "Empower Youth Campaign",
    description: "Creative poster design for youth empowerment initiative featuring bold typography, vibrant gradients, and symbolic lightbulb imagery representing innovation and future potential.",
    tags: ["Figma", "Visual Design", "Typography", "Branding"],
    icon: Palette,
    gradient: "from-orange-500 to-yellow-400",
    featured: true,
    figma: "https://www.figma.com/design/OnNBxN9cSo72qZuSDdOEen/Untitled?node-id=0-1",
    type: "design",
    thumbnail: "/projects/empower_youth.png",
  },
  {
    title: "Mobile App UI/UX",
    description: "Comprehensive mobile application interface design with intuitive user flows, modern component library, and accessibility-focused interactions.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-400",
    featured: false,
    figma: "https://www.figma.com/proto/Tx7t7zTyuLzx1rPkblrlm8/uiux?node-id=0-1&t=lINNP66KiXbQI9Xt-1",
    type: "design",
    thumbnail: "/projects/mobile_uiux.png",
  },
  {
    title: "Logo Design",
    description: "Creative logo design project featuring modern brand identity with sophisticated visual elements and meaningful symbolism for scalable brand recognition.",
    tags: ["Figma", "Logo Design", "Branding", "Visual Identity"],
    icon: Palette,
    gradient: "from-cyan-500 to-blue-400",
    featured: false,
    figma: "https://www.figma.com/design/8xSEoDaDE8lWOaV9sGpgbD/Untitled?node-id=6-71",
    type: "design",
    thumbnail: "/projects/design_system.png",
  },
    {
      title: "Code Reviewer Website",
      description: "Comprehensive web platform design for code review tool with clean interface, collaborative features, and developer-focused workflows for efficient code quality management.",
      tags: ["Figma", "Web Design", "UI/UX", "Platform Design"],
      icon: Code,
      gradient: "from-green-500 to-emerald-400",
      featured: false,
      figma: "https://www.figma.com/proto/iUBD54jjaeuPxEYkE6njQZ/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
      type: "design",
      thumbnail: "/projects/code-reviewer.png",
    },
];

const Projects = () => {
  const projectsByCategory = {
    aiml: projects.filter(p => p.type === "dev" && p.tags.some(t => ["TensorFlow", "CNN", "Python"].includes(t))),
    fullstack: projects.filter(p => p.type === "dev" && p.tags.some(t => ["React", "Django"].includes(t))),
    uiux: projects.filter(p => p.type === "design"),
  };

  const renderProjectCategory = (title, IconComponent, categoryProjects) => (
    <div key={title} className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8 md:mb-12"
      >
        <div className="p-2.5 rounded-lg bg-primary/20 text-primary">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 gap-4 md:gap-6"
      >
        {categoryProjects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
          >
            {/* Thumbnail Image */}
            {project.thumbnail && (
              <div className="relative h-48 md:h-56 overflow-hidden bg-secondary">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
            
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className={`absolute -inset-[200%] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 blur-3xl`} />
            </div>
            
            {/* Content */}
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="p-3 sm:p-4 rounded-xl md:rounded-2xl bg-gradient-primary text-primary-foreground group-hover:shadow-lg transition-all duration-300">
                  <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2 opacity-100 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                  {project.type === "dev" && project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {project.type === "dev" && project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {project.type === "design" && project.figma && (
                    <a 
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground group-hover:text-primary transition-all duration-300">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 md:mb-8 flex-grow leading-relaxed line-clamp-4 md:line-clamp-none group-hover:text-foreground/80 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-mono rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="work" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-4 md:mb-6">
              // Projects
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md"
          >
            A collection of AI/ML projects, full-stack applications, and UI/UX designs showcasing my expertise.
          </motion.p>
        </motion.div>

        {/* Category Sections */}
        {renderProjectCategory("AI/ML Projects", Brain, projectsByCategory.aiml)}
        {renderProjectCategory("Full-Stack Development", Cloud, projectsByCategory.fullstack)}
        {renderProjectCategory("UI/UX Design", Palette, projectsByCategory.uiux)}

        {/* View All */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://github.com/dhanyasri612" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
