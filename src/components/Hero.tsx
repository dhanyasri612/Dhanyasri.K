import { ArrowDown, Brain, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      
      {/* Floating tech icons */}
      <div className="absolute top-1/4 left-[15%] animate-float opacity-20">
        <Brain className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-1/3 right-[20%] animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Code2 className="w-10 h-10 text-accent" />
      </div>
      <div className="absolute bottom-1/3 left-[25%] animate-float opacity-20" style={{ animationDelay: "4s" }}>
        <Database className="w-8 h-8 text-primary" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="animate-fade-up flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground font-mono">
              Open to opportunities • AI/ML Engineer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
            Hi, I'm{" "}
            <span className="text-gradient glow-text">Dhanyasri</span>
            <br />
            <span className="text-muted-foreground text-4xl md:text-5xl lg:text-6xl font-medium">
              Building the future with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Aspiring software engineer specializing in{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Django</span>, and{" "}
            <span className="text-foreground font-medium">Machine Learning</span>. 
            Passionate about crafting intelligent, scalable applications that make an impact.
          </p>

          {/* Tech Stack Preview */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-3 mb-12">
            {["Python", "React.js", "TensorFlow", "Django", "CNN"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 text-sm font-mono rounded-full bg-secondary border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-start gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#work">Explore My Work</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="mailto:dhanyasrikalisamy@gmail.com">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
