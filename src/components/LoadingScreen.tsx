import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setMounted(false);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Minimalist Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-12"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    borderRadius: ["40%", "50%", "40%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-primary/20"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    borderRadius: ["50%", "35%", "50%"]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-primary/10"
                />
                <span className="text-4xl font-display font-bold tracking-tighter text-gradient">DK</span>
              </div>
            </motion.div>

            {/* Typography */}
            <div className="text-center mb-10 overflow-hidden">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl font-display font-bold tracking-tight text-foreground mb-2"
              >
                Dhanyasri K
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground"
              >
                Portfolio Experience
              </motion.p>
            </div>

            {/* Elegant Progress Indicator */}
            <div className="w-48 relative">
              <div className="h-[1px] w-full bg-border/50 absolute top-1/2 -translate-y-1/2" />
              <motion.div 
                className="h-[1px] bg-primary absolute top-1/2 -translate-y-1/2 origin-left"
                style={{ width: `${progress}%` }}
              />
              
              <div className="flex justify-between mt-6">
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Loading</span>
                <span className="text-[9px] font-mono text-primary font-bold">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Minimalist Bottom Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10"
          >
            <p className="text-[8px] font-mono uppercase tracking-[0.5em] text-muted-foreground">© MMXXVI</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

