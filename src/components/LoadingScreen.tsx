import { useEffect, useState } from "react";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing neural networks...",
    "Loading machine learning models...",
    "Compiling React components...",
    "Preparing portfolio experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 600);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] animate-orbit opacity-30">
          <Brain className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-[20%] right-[15%] animate-orbit opacity-30" style={{ animationDelay: "-5s" }}>
          <Code2 className="w-6 h-6 text-accent" />
        </div>
        <div className="absolute bottom-[25%] left-[20%] animate-orbit opacity-30" style={{ animationDelay: "-10s" }}>
          <Database className="w-7 h-7 text-primary" />
        </div>
        <div className="absolute bottom-[30%] right-[25%] animate-orbit opacity-30" style={{ animationDelay: "-15s" }}>
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center relative">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" style={{ animationDuration: "1.5s" }} />
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />

            {/* Center logo */}
            <div className="relative">
              <span className="font-display text-3xl font-bold text-gradient">DK</span>
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-ring" />
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Name */}
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Dhanyasri K</span>
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-12">AI/ML Engineer & Full-Stack Developer</p>

        {/* Progress Bar Container */}
        <div className="w-80 md:w-96">
          {/* Progress percentage */}
          <div className="flex justify-between items-center mb-3">
            <span className="font-mono text-xs text-muted-foreground">{loadingTexts[currentText]}</span>
            <span className="font-mono text-sm text-primary font-semibold">{progress}%</span>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer" style={{ backgroundSize: "200% 100%" }} />

            {/* Progress fill */}
            <div
              className="absolute left-0 top-0 h-full bg-gradient-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Glow effect */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full blur-md" />
            </div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${progress >= (i + 1) * 20 ? "bg-primary scale-100" : "bg-secondary scale-75"
                  }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="text-xs text-muted-foreground/50 font-mono">Crafting experiences with code & creativity</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
