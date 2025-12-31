import { useState } from "react";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 75 },
      { name: "TensorFlow/Keras", level: 85 },
      { name: "Bootstrap 5", level: 80 },
    ],
  },
  {
    id: "ml",
    title: "AI/ML",
    skills: [
      { name: "Deep Learning", level: 85 },
      { name: "CNN", level: 90 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "Matplotlib", level: 75 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "REST APIs", level: 80 },
      { name: "Docker", level: 65 },
    ],
  },
];

const certifications = [
  { name: "Data Analytics with Python", org: "NPTEL" },
  { name: "Introduction to LLM", org: "NPTEL" },
  { name: "AI Primer", org: "Infosys" },
  { name: "Principles of Generative AI", org: "Infosys" },
  { name: "C & Java", org: "IIT Bombay" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6">
            // Skills & Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, web development, and software engineering.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-3xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`space-y-6 transition-all duration-300 ${
                activeTab === category.id ? "block" : "hidden"
              }`}
            >
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-mono text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                      style={{
                        width: activeTab === category.id ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24 pt-16 border-t border-border">
          <h3 className="text-center font-display text-2xl font-bold mb-10 text-foreground">
            Certifications & Courses
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="px-5 py-3 rounded-xl border-gradient hover-lift transition-all group"
              >
                <span className="text-foreground font-medium group-hover:text-gradient transition-all">
                  {cert.name}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  — {cert.org}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Competitive Programming Profiles</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "LeetCode", url: "https://leetcode.com/u/dhanyasrikalisamy" },
              { name: "HackerRank", url: "https://hackerrank.com/profile/dhanyasrikalisa1" },
              { name: "GitHub", url: "https://github.com/dhanyasri612" },
            ].map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-display font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
