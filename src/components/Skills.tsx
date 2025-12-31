const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Figma", "AWS", "Vercel"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Leadership", "Agile", "Mentoring"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build exceptional 
            digital products from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20 pt-16 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
            {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
              <div
                key={tech}
                className="font-display text-lg md:text-xl font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
