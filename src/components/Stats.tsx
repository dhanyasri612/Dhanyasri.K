import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "./AnimatedSection";

interface Stat {
  number: string;
  label: string;
  description?: string;
}

const stats: Stat[] = [
  {
    number: "94%",
    label: "Accuracy",
    description: "In ML models built",
  },
  {
    number: "10+",
    label: "Projects",
    description: "Completed and deployed",
  },
  {
    number: "5+",
    label: "Years",
    description: "In development & design",
  },
  {
    number: "100%",
    label: "Dedication",
    description: "To every challenge",
  },
];

const Stats = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-secondary/30">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="p-4 rounded-xl bg-gradient-subtle group-hover:bg-primary/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm md:text-base mb-1">
                  {stat.label}
                </h3>
                {stat.description && (
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
