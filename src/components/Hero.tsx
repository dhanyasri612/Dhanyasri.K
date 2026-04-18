import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profilePhoto from "@/assets/profile-photo.jpeg";
import ParticlesBackground from "@/components/ParticlesBackground";
import SocialDock from "@/components/SocialDock";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <ParticlesBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative w-full container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14 lg:gap-20">

          {/* ── LEFT: Photo Frame ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
              gyroscope={true}
              className="relative"
            >
              <div className="relative flex flex-col items-center gap-5">
                {/* Offset shadow frame */}
                <div className="absolute top-4 left-4 w-[230px] sm:w-[260px] lg:w-[280px] h-[calc(100%-72px)] rounded-2xl border-2 border-primary/20 pointer-events-none" />

                {/* Main frame */}
                <div className="relative w-[230px] sm:w-[260px] lg:w-[280px] rounded-2xl border-2 border-border bg-card shadow-2xl overflow-hidden">
                  <div className="p-3 bg-card">
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={profilePhoto}
                        alt="Dhanyasri K"
                        className="w-full aspect-[3/4] object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Caption */}
                  <div className="px-4 py-3 border-t border-border/50 bg-secondary/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-foreground tracking-wide">Dhanyasri K</p>
                      <p className="text-[10px] text-muted-foreground font-mono mt-0.5">AI/ML · Dev · Design</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-muted-foreground">Available</span>
                    </div>
                  </div>
                </div>

                {/* Corner dots */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-primary/60" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-primary/30" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-primary/30" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-primary/20" />

                <div className="relative z-10">
                  <SocialDock />
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <div className="flex-1 flex flex-col justify-center gap-6 text-center lg:text-left">

            {/* Greeting + Name */}
            <motion.div {...fadeUp(0.3)}>
              <p className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-3">
                Hello, I'm
              </p>
              <h1
                className="font-display font-bold tracking-tight leading-[1.05] text-foreground"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Dhanyasri <span className="text-gradient">K</span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="h-8 md:h-10 mt-2">
                <span className="text-lg md:text-xl font-mono text-muted-foreground">
                  A passionate{' '}
                  <span className="text-primary font-bold">
                    <Typewriter
                      words={["Full-Stack Developer", "AI / ML Engineer", "UI/UX Designer", "Lifelong Learner"]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.5)}
              className="text-[15px] text-muted-foreground leading-relaxed text-justify max-w-2xl mx-auto lg:mx-0"
            >
              I build intelligent systems and seamless digital experiences —
              from deep learning models and full-stack web apps to polished UI/UX designs.
              Driven by curiosity and a passion for solving real-world problems
              through clean, scalable solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:shadow-glow transition-all"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/ML_RESUME (1).pdf"
                download="Dhanyasri_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border/60 text-foreground text-sm font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <Download className="w-4 h-4" /> Resume
              </motion.a>
            </motion.div>

            {/* Bottom info strip */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap items-center gap-5 justify-center lg:justify-start pt-5 border-t border-border/30"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-mono text-muted-foreground">Open to opportunities</span>
              </div>
              <div className="h-4 w-px bg-border/50 hidden sm:block" />
              <span className="text-sm text-muted-foreground font-mono">📍 India</span>
              <div className="h-4 w-px bg-border/50 hidden sm:block" />
              <span className="text-sm text-muted-foreground font-mono truncate max-w-[150px] md:max-w-none">B.E. CS (AIML) @ KPR Institute</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
