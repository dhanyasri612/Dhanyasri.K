import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimatedSection";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
    ],
  },
  {
    id: "libraries",
    title: "Libraries",
    skills: [
      { name: "React.js", level: 85 },
      { name: "TensorFlow/Keras", level: 85 },
      { name: "Bootstrap 5", level: 80 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 80 },
      { name: "Flask", level: 75 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 78 },
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
    <section id="skills" className="py-16 md:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent/5 rounded-full blur-[100px] md:blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono mb-4 md:mb-6"
          >
            // Skills & Expertise
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            A comprehensive toolkit spanning AI/ML, web development, and software engineering.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => (
              activeTab === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-1.5 sm:mb-2">
                        <span className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Certifications */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 md:mt-24 pt-10 md:pt-16 border-t border-border"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-center font-display text-xl sm:text-2xl font-bold mb-6 md:mb-10 text-foreground"
          >
            Certifications & Courses
          </motion.h3>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-primary/30 bg-gradient-subtle hover:bg-primary/15 hover:border-primary/60 transition-all group"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground font-medium text-xs sm:text-sm group-hover:text-primary transition-colors">
                    {cert.name}
                  </span>
                </div>
                <span className="text-muted-foreground text-[10px] sm:text-xs block mt-0.5 pl-2.5">
                  {cert.org}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm sm:text-base">Competitive Programming Profiles</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "LeetCode", url: "https://leetcode.com/u/dhanyasrikalisamy" },
              { name: "HackerRank", url: "https://hackerrank.com/profile/dhanyasrikalisa1" },
              { name: "GitHub", url: "https://github.com/dhanyasri612" },
            ].map((profile) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-base sm:text-lg font-display font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {profile.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
