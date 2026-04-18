import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Nitroware Technologies Pvt Ltd.",
    location: "Remote",
    period: "Jan 2025 – Feb 2025",
    bullets: [
      "Developed a web app for bone tumor detection using HTML/CSS, enabling user-friendly interaction with ML models.",
      "Built and optimized a CNN model to analyze medical images and classify tumor presence with improved accuracy.",
      "Authored documentation and reproducibility protocols for knowledge transfer to future teams.",
    ],
    tags: ["Python", "CNN", "TensorFlow", "HTML/CSS", "Medical Imaging"],
    accent: "bg-teal-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-primary/50" />
          <span className="text-xs font-mono text-primary tracking-[0.25em] uppercase">Experience</span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-16"
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border/50 hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.1)}
              className="relative md:pl-12 group"
            >
              {/* Timeline marker */}
              <div className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-4 border-background ${exp.accent} shadow-glow hidden md:block z-10 group-hover:scale-125 transition-transform duration-300`} />

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side: Role & Company */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                </div>

                {/* Right side: Details */}
                <div className="lg:w-2/3 p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
                  <ul className="space-y-4 mb-8">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <ChevronRight className="w-4 h-4 mt-0.5 text-primary/60 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono rounded-lg border border-border/40 bg-secondary/30 text-muted-foreground hover:border-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
