import { ExternalLink, Github, Brain, Music, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6">
              // Projects
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            A collection of AI/ML projects and full-stack applications showcasing 
            my expertise in building intelligent solutions.
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative rounded-3xl overflow-hidden border-gradient hover-lift transition-all duration-500 ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              {/* Content */}
              <div className="relative p-8 md:p-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary text-primary-foreground">
                    <project.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com/dhanyasri612" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
