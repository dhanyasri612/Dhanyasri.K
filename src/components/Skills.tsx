import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimatedSection";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  ExternalLink,
  Award,
} from "lucide-react";
import {
  SiBootstrap,
  SiDjango,
  SiFigma,
  SiFlask,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPandas,
  SiPython,
  SiReact,
  SiSwagger,
  SiTensorflow,
} from "react-icons/si";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    accent: "from-sky-500/25 via-cyan-500/10 to-transparent",
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: Cpu },
      { name: "C", icon: Code2 },
    ],
  },
  {
    id: "libraries",
    title: "Libraries",
    icon: Layers,
    accent: "from-fuchsia-500/25 via-pink-500/10 to-transparent",
    badge: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "TensorFlow/Keras", icon: SiTensorflow },
      { name: "Bootstrap 5", icon: SiBootstrap },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: Server,
    accent: "from-emerald-500/25 via-green-500/10 to-transparent",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: Server },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    id: "ml",
    title: "AI/ML",
    icon: Brain,
    accent: "from-indigo-500/25 via-blue-500/10 to-transparent",
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    skills: [
      { name: "Deep Learning", icon: Brain },
      { name: "CNN", icon: Brain },
      { name: "Scikit-Learn", icon: Sparkles },
      { name: "Pandas/NumPy", icon: SiPandas },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    accent: "from-rose-500/25 via-pink-500/10 to-transparent",
    badge: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    skills: [
      { name: "Git/GitHub", icon: SiGithub },
      { name: "VS Code", icon: Terminal },
      { name: "Figma", icon: SiFigma },
      { name: "REST APIs", icon: SiSwagger },
    ],
  },
];

const certifications = [
  {
    name: "Data Analytics with Python",
    org: "NPTEL",
    verifyUrl: "https://drive.google.com/file/d/1gGW5UGn53JfNzsHRBVjSIil8cQ1A-8CN/view?usp=drive_link",
  },
  {
    name: "Introduction to LLM",
    org: "NPTEL",
    verifyUrl: "https://drive.google.com/file/d/1H2ffBvpELMWG9kII6M_dKlXYIvEaNRUJ/view?usp=drive_link",
  },
  {
    name: "AI Primer",
    org: "Infosys",
    verifyUrl: "https://drive.google.com/file/d/1TD6vmIHKKxyBjGIkfMdQsuTKll5hMSKf/view?usp=drive_link",
  },
  {
    name: "Principles of Generative AI",
    org: "Infosys",
    verifyUrl: "https://drive.google.com/file/d/1PqHuV4g70_BuuHGMTAsPF3F_oraYxn55/view?usp=drive_link",
  },
  {
    name: "C & Java",
    org: "IIT Bombay",
    verifyUrl: "https://drive.google.com/file/d/1P00O7oUFsw96Ur9Ix-w_xxtEW21nxFmU/view?usp=sharing",
  },
];

const profiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/dhanyasrikalisamy" },
  { name: "HackerRank", url: "https://hackerrank.com/profile/dhanyasrikalisa1" },
  { name: "GitHub", url: "https://github.com/dhanyasri612" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-secondary/20 py-16 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-primary/10 blur-[130px]" />
      <div className="absolute right-[-6%] bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-[160px]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-10 md:mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              Technologies
            </span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-right sm:text-[15px]">
              A comprehensive stack built through academic rigor and hands-on projects.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 dark:bg-card/70 dark:backdrop-blur-sm dark:border-border/50"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="p-4 rounded-2xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                      <CategoryIcon className="h-6 w-6" />
                    </div>
                    <span
                      className={`inline-flex rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest ${category.badge}`}
                    >
                      {category.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ x: 8 }}
                          className="flex items-center gap-4 p-3.5 rounded-2xl border border-border/50 bg-secondary/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group/skill"
                        >
                          <div className="p-2 rounded-xl bg-white shadow-sm text-muted-foreground group-hover/skill:text-primary transition-colors dark:bg-background">
                            <SkillIcon className="h-4.5 w-4.5" />
                          </div>
                          <span className="text-sm font-semibold text-foreground/80 group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-24"
        >
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Achievements</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Professional <span className="text-gradient">Certifications</span>
            </h3>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-1 pr-8">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mb-4">{cert.org}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">Verified Credential</span>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Profiles */}
        <motion.div
          {...fadeInUp}
          className="mt-20 pt-12 border-t border-border/30 text-center"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Profiles & Platforms</p>
          <div className="flex flex-wrap justify-center gap-8">
            {profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-display font-bold text-foreground/70 hover:text-primary transition-colors"
              >
                {profile.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
