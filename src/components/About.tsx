import { Brain, Code2, Sparkles, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "./AnimatedSection";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Building CNN models for medical imaging and emotion recognition systems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Creating scalable web apps with React, Django, and Flask.",
  },
  {
    icon: Sparkles,
    title: "Creative Problem Solver",
    description: "Turning complex challenges into elegant, impactful solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-4 md:mb-6"
            >
              // About Me
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight"
            >
              Passionate about creating{" "}
              <span className="text-gradient">intelligent</span> digital solutions
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-4 md:space-y-6 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
            >
              <p>
                I'm a <span className="text-foreground font-medium">Computer Science student</span> specializing 
                in AI & ML at KPR Institute of Engineering and Technology, Coimbatore. 
                With a strong foundation in both frontend and backend development, 
                I bridge the gap between intelligent algorithms and beautiful user interfaces.
              </p>
              <p>
                My journey includes hands-on experience at{" "}
                <span className="text-foreground font-medium">Nitroware Technologies</span> as a 
                Machine Learning Intern, where I developed medical imaging solutions 
                that achieved high accuracy in tumor detection.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 md:mt-10 p-4 sm:p-6 rounded-2xl border-gradient hover-glow"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">
                    B.E. Computer Science (AI & ML)
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2 truncate">
                    KPR Institute of Engineering and Technology
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                    <span className="text-primary font-mono font-semibold">CGPA: 8.92</span>
                    <span className="text-muted-foreground">2023 - 2027</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-4 md:space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInRight}
                className="group p-4 sm:p-6 rounded-2xl border-gradient hover-lift hover-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 md:mt-24 pt-8 md:pt-16 border-t border-border"
        >
          {[
            { value: "8.92", label: "CGPA" },
            { value: "94%", label: "HSC Score" },
            { value: "4+", label: "Projects Completed" },
            { value: "5+", label: "Certifications" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
