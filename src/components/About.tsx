import { Brain, Code2, Sparkles, GraduationCap } from "lucide-react";

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
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6">
              // About Me
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Passionate about creating{" "}
              <span className="text-gradient">intelligent</span> digital solutions
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
            </div>

            {/* Education Card */}
            <div className="mt-10 p-6 rounded-2xl border-gradient hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    B.E. Computer Science (AI & ML)
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    KPR Institute of Engineering and Technology
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary font-mono font-semibold">CGPA: 8.92</span>
                    <span className="text-muted-foreground">2023 - 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border-gradient hover-lift hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { value: "8.92", label: "CGPA" },
            { value: "94%", label: "HSC Score" },
            { value: "4+", label: "Projects Completed" },
            { value: "5+", label: "Certifications" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
