import { Github, Linkedin, Mail, Code2, Figma, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const profileLinks = [
  { icon: Github,        href: "https://github.com/dhanyasri612",                                                     label: "GitHub" },
  { icon: Linkedin,      href: "https://linkedin.com/in/dhanyasri-k-6b6902299",                                       label: "LinkedIn" },
  { icon: Mail,          href: "mailto:dhanyasrikalisamy@gmail.com",                                                   label: "Email" },
  { icon: Code2,         href: "https://leetcode.com/u/dhanyasrikalisamy",                                             label: "LeetCode" },
  { icon: Figma,         href: "https://www.figma.com/design/fECgy3WOUzc8MnWM0aH6cN/Untitled?t=WDxTV7tfcdZaQOQd-1", label: "Figma" },
  { icon: MessageCircle, href: "#contact",                                                                             label: "Contact" },
];

const SocialDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      className="flex justify-center"
    >
      <div
        className="rounded-2xl p-[1.5px]"
        style={{
          background: "linear-gradient(135deg, hsl(175 80% 50% / 0.6), hsl(200 90% 55% / 0.3), hsl(280 70% 60% / 0.5))",
        }}
      >
        <div className="flex items-center gap-0.5 rounded-[14px] bg-card/90 px-2 py-1.5 backdrop-blur-md">
          {profileLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06, type: "spring", stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.15 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <link.icon className="w-[17px] h-[17px]" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialDock;
