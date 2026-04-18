import { GraduationCap, Download, Zap, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    level: "B.E. Computer Science (AI & ML)",
    subtitle: "Honours in Full-Stack Development",
    school: "KPR Institute of Engineering and Technology",
    location: "Coimbatore",
    year: "2023 – 2027",
    grade: "CGPA: 8.86",
  },
  {
    level: "HSC (12th)",
    school: "Literacy Mission Matriculation Higher Secondary School",
    location: "",
    year: "2022 – 2023",
    grade: "94.16%",
  },
  {
    level: "SSLC (10th)",
    school: "Literacy Mission Matriculation Higher Secondary School",
    location: "",
    year: "2020 – 2021",
    grade: "94.16%",
  },
];

const quickFacts = [
  { icon: Brain, label: "AI & ML Specialist" },
  { icon: Zap, label: "Fast Learner" },
  { icon: Rocket, label: "Solution Oriented" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-primary/50" />
          <span className="text-xs font-mono text-primary tracking-[0.25em] uppercase">About Me</span>
        </motion.div>

        {/* ── Top: heading + bio ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">

          {/* Left: heading + bio */}
          <div>
            <motion.h2
              {...fadeUp(0.1)}
              className="font-display text-2xl sm:text-3xl font-bold leading-tight text-foreground mb-6"
            >
              Building{" "}
              <span className="text-gradient">intelligent</span>{" "}
              systems & seamless experiences
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-[15px] text-muted-foreground leading-relaxed text-justify mb-8">
              CS student specializing in AI & ML at KPR Institute, Coimbatore.
              I pair product thinking with hands-on engineering — from deep
              learning models to full-stack apps — to make intelligent systems
              feel simple and accessible.
            </motion.p>
            
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <a
                href="/ML_RESUME (1).pdf"
                download="Dhanyasri_K_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {quickFacts.map((fact, i) => (
              <motion.div
                key={fact.label}
                {...fadeUp(0.3 + i * 0.1)}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <fact.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-foreground">{fact.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Education timeline ── */}
        <motion.div {...fadeUp(0.4)} className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">Education</span>
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.level}
              {...fadeUp(0.45 + i * 0.08)}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-5 min-w-0">
                {/* Timeline dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-primary/30 flex-shrink-0 group-hover:bg-primary group-hover:shadow-glow transition-all" />
                <div className="min-w-0">
                  <p className="text-sm md:text-base font-bold text-foreground">{edu.level}</p>
                  {"subtitle" in edu && (
                    <p className="text-[11px] font-mono font-medium text-primary/70 mt-0.5">{edu.subtitle}</p>
                  )}
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {edu.school}{edu.location ? ` · ${edu.location}` : ""}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 text-left sm:text-right pl-7 sm:pl-0">
                <p className="text-sm font-mono font-bold text-primary">{edu.grade}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
