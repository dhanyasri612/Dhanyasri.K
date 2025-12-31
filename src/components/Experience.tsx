import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6">
            // Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>

          {/* Experience Card */}
          <div className="relative pl-8 border-l-2 border-border">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-primary shadow-glow" />
            
            <div className="group p-8 rounded-3xl border-gradient hover-lift hover-glow transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                    Machine Learning Intern
                  </h3>
                  <p className="text-primary font-medium text-lg">
                    Nitroware Technologies Pvt Ltd.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-mono">
                  <Calendar className="w-4 h-4" />
                  Jan 2025 - Feb 2025
                </div>
              </div>

              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    Developed a web application for <span className="text-foreground font-medium">bone tumor detection</span> using HTML/CSS, 
                    enabling user-friendly interaction with ML models.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    Built and optimized a <span className="text-foreground font-medium">CNN model</span> to analyze medical images and 
                    classify tumor presence with improved accuracy over baselines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    Authored comprehensive documentation and reproducibility protocols for 
                    knowledge transfer to future teams.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "CNN", "TensorFlow", "HTML/CSS", "Medical Imaging"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
