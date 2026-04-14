import { ArrowDown, Brain, Code2, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/6 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/15 rounded-full blur-[100px] md:blur-[180px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent/10 rounded-full blur-[80px] md:blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-glow opacity-50" />
      
      {/* Floating tech icons - hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-[20%] left-[10%] animate-float opacity-15">
        <Brain className="w-16 h-16 text-primary" />
      </div>
      <div className="hidden md:block absolute top-[15%] right-[15%] animate-float opacity-15" style={{ animationDelay: "2s" }}>
        <Code2 className="w-12 h-12 text-accent" />
      </div>
      <div className="hidden md:block absolute bottom-[25%] left-[15%] animate-float opacity-15" style={{ animationDelay: "4s" }}>
        <Database className="w-10 h-10 text-primary" />
      </div>
      <div className="hidden md:block absolute bottom-[20%] right-[10%] animate-float opacity-15" style={{ animationDelay: "3s" }}>
        <Sparkles className="w-14 h-14 text-accent" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px md:100px md:100px'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground font-mono">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6"
            >
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-gradient glow-text">Dhanyasri K</span>
            </motion.h1>

            {/* Role Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-subtle border border-primary/20 mb-4 md:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-mono text-foreground">AI/ML Engineer & Full-Stack Developer</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-4 lg:px-0"
            >
              Building intelligent systems and seamless digital experiences. Specialized in{" "}
              <span className="text-primary font-semibold">Machine Learning & Deep Learning</span> with{" "}
              <span className="text-accent font-semibold">Full-Stack Development & UI/UX</span> expertise,
              driven to solve real-world problems through innovative and scalable solutions.
            </motion.p>

            {/* Tech Stack Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-8 md:mb-10 justify-center lg:justify-start"
            >
              {["Python", "React.js", "Node.js", "TensorFlow", "Django", "CNN", "OpenCV", "Figma"].map((tech, index) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto group relative overflow-hidden" asChild>
                <a href="#work">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Projects
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-shrink-0 order-1 lg:order-2"
          >
            {/* Decorative rings */}
            <div className="absolute -inset-6 md:-inset-8 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
            <div className="absolute -inset-12 md:-inset-16 rounded-full border border-accent/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
            
            {/* Orbiting dots */}
            <div className="absolute -inset-6 md:-inset-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-orbit-dot" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-orbit-dot" style={{ animationDelay: "-2.5s" }} />
            </div>

            {/* Glow effect behind photo */}
            <div className="absolute inset-4 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse" />
            
            {/* Photo container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-[3px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Dhanyasri K - AI/ML Engineer"
                className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover object-top"
              />
              
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: "3s", animationIterationCount: "infinite" }} />
              </div>
            </div>

            {/* Floating badge - hidden on small mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 px-3 md:px-4 py-2 rounded-xl bg-card border border-border shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">Ready to innovate</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
