import { ExternalLink, Github, Brain, Music, Cloud, Code, Palette, Layers, Smartphone } from "lucide-react";
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
    github: "https://github.com/dhanyasri612",
    live: "#",
    type: "dev",
  },
  {
    title: "Music Recommendation via Mood",
    description: "Deep learning service that detects mood from images and recommends music via Spotify API. Custom CNN models for emotion recognition tested on 100+ images.",
    tags: ["Deep Learning", "Spotipy", "CNN", "Python"],
    icon: Music,
    gradient: "from-accent to-primary",
    featured: true,
    github: "https://github.com/dhanyasri612",
    live: "#",
    type: "dev",
  },
  {
    title: "Weather Dashboard",
    description: "Full-stack React/Django weather application with Open-Meteo API integration, Recharts visualization, and multi-location support with optimized async operations.",
    tags: ["React", "Django", "Axios", "Recharts"],
    icon: Cloud,
    gradient: "from-primary/80 to-accent/80",
    featured: false,
    github: "https://github.com/dhanyasri612",
    live: "#",
    type: "dev",
  },
  {
    title: "Python Quiz Application",
    description: "Interactive web-based quiz with Flask backend featuring dynamic questions, real-time scoring, and responsive result display.",
    tags: ["Flask", "HTML/CSS", "Python", "Git"],
    icon: Code,
    gradient: "from-accent/80 to-primary/80",
    featured: false,
    github: "https://github.com/dhanyasri612",
    live: "#",
    type: "dev",
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
  },
  {
    title: "Mobile App UI/UX",
    description: "Comprehensive mobile application interface design with intuitive user flows, modern component library, and accessibility-focused interactions.",
    tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-400",
    featured: false,
    figma: "https://www.figma.com/design/8xSEoDaDE8lWOaV9sGpgbD/Untitled?node-id=6-71",
    type: "design",
  },
  {
    title: "UI/UX Design System",
    description: "Complete design system with reusable components, consistent spacing, color palette, and typography guidelines for scalable product development.",
    tags: ["Figma", "Design System", "Components", "Style Guide"],
    icon: Layers,
    gradient: "from-cyan-500 to-blue-400",
    featured: false,
    figma: "https://www.figma.com/design/Tx7t7zTyuLzx1rPkblrlm8/uiux?node-id=0-1",
    type: "design",
  },
];

const Projects = () => {
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
            A collection of AI/ML projects and full-stack applications showcasing 
            my expertise in building intelligent solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-4 md:gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden border-gradient hover-lift transition-all duration-500 ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="p-3 sm:p-4 rounded-xl md:rounded-2xl bg-gradient-primary text-primary-foreground">
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2 opacity-100 md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                    {project.type === "dev" && project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.type === "dev" && project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.type === "design" && project.figma && (
                      <a 
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 md:mb-8 flex-grow leading-relaxed line-clamp-4 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-mono rounded-full bg-secondary text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

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
