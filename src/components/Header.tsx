import { Github, Linkedin, Mail, Code2, Figma, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const iconLinks = [
  {
    icon: Github,
    href: "https://github.com/dhanyasri612",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/dhanyasri-k-6b6902299",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:dhanyasrikalisamy@gmail.com",
    label: "Email",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/u/dhanyasrikalisamy",
    label: "LeetCode",
  },
  {
    icon: Figma,
    href: "https://www.figma.com/design/fECgy3WOUzc8MnWM0aH6cN/Untitled?t=WDxTV7tfcdZaQOQd-1",
    label: "Figma",
  },
  {
    icon: MessageCircle,
    href: "#contact",
    label: "Contact",
  },
];

const Header = () => {
  return (
    <header className="relative z-40 pt-7 md:pt-10 pb-4 md:pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient tracking-wide">
            Dhanyasri K
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-primary/90 font-medium">
            Full-Stack Developer | AI &amp; ML Enthusiast | UI/UX Enthusiast
          </p>

          <div className="mt-6 mx-auto w-fit rounded-xl border border-primary/25 bg-card/60 backdrop-blur-md px-3 sm:px-5 py-2.5 sm:py-3 shadow-card">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {iconLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={item.label}
                  title={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 + index * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
