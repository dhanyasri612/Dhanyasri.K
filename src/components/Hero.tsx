import { ArrowDown, Brain, Code2, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      
      {/* Floating tech icons */}
      <div className="absolute top-[20%] left-[10%] animate-float opacity-15">
        <Brain className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-[15%] right-[15%] animate-float opacity-15" style={{ animationDelay: "2s" }}>
        <Code2 className="w-12 h-12 text-accent" />
      </div>
      <div className="absolute bottom-[25%] left-[15%] animate-float opacity-15" style={{ animationDelay: "4s" }}>
        <Database className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] animate-float opacity-15" style={{ animationDelay: "3s" }}>
        <Sparkles className="w-14 h-14 text-accent" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Status Badge */}
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground font-mono">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-gradient glow-text">Dhanyasri K</span>
            </h1>

            {/* Role Badge */}
            <div className="animate-fade-up-delay-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-subtle border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-foreground">AI/ML Engineer & Full-Stack Developer</span>
            </div>

            {/* Subtitle */}
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Crafting intelligent solutions with{" "}
              <span className="text-primary font-medium">Machine Learning</span>,{" "}
              <span className="text-accent font-medium">React</span>, and{" "}
              <span className="text-primary font-medium">Django</span>. 
              Transforming ideas into impactful digital experiences.
            </p>

            {/* Tech Stack Preview */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-2 mb-10">
              {["Python", "React.js", "TensorFlow", "Django", "CNN", "OpenCV"].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#work">View My Projects</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="animate-fade-up-delay-2 relative flex-shrink-0">
            {/* Decorative rings */}
            <div className="absolute -inset-8 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: "30s" }} />
            <div className="absolute -inset-16 rounded-full border border-accent/5 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
            
            {/* Orbiting dots */}
            <div className="absolute -inset-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-orbit-dot" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-orbit-dot" style={{ animationDelay: "-2.5s" }} />
            </div>

            {/* Glow effect behind photo */}
            <div className="absolute inset-4 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse" />
            
            {/* Photo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
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

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-card border border-border shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">Ready to innovate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
