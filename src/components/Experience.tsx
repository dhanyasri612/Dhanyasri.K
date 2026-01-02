import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { fadeInUp, staggerContainer } from "./AnimatedSection";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-4 md:mb-6"
          >
            // Experience
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>

          {/* Experience Card */}
          <motion.div 
            variants={fadeInUp}
            className="relative pl-6 sm:pl-8 border-l-2 border-border"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />
            
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-gradient hover-lift hover-glow transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-gradient transition-all">
                    Machine Learning Intern
                  </h3>
                  <p className="text-primary font-medium text-base sm:text-lg">
                    Nitroware Technologies Pvt Ltd.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-muted-foreground text-xs sm:text-sm font-mono w-fit">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Jan 2025 - Feb 2025
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    Developed a web application for <span className="text-foreground font-medium">bone tumor detection</span> using HTML/CSS, 
                    enabling user-friendly interaction with ML models.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    Built and optimized a <span className="text-foreground font-medium">CNN model</span> to analyze medical images and 
                    classify tumor presence with improved accuracy over baselines.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    Authored comprehensive documentation and reproducibility protocols for 
                    knowledge transfer to future teams.
                  </span>
                </li>
              </ul>

              <div className="mt-4 md:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {["Python", "CNN", "TensorFlow", "HTML/CSS", "Medical Imaging"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
