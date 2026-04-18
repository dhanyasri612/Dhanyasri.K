import { Github, Linkedin, Code2, Mail, Figma } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/dhanyasri612", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/dhanyasri-k-6b6902299",
    label: "LinkedIn",
  },
  {
    icon: Figma,
    href: "https://www.figma.com/design/fECgy3WOUzc8MnWM0aH6cN/Untitled?t=WDxTV7tfcdZaQOQd-1",
    label: "Figma",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/u/dhanyasrikalisamy",
    label: "LeetCode",
  },
  { icon: Mail, href: "mailto:dhanyasrikalisamy@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
                Footer
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-foreground mb-5">
                  Stay <span className="text-gradient">Connected</span>
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed text-justify">
                  Quick links, social profiles, and a final stop before the end of the page.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mb-8 grid grid-cols-1 gap-8 md:mb-12 md:grid-cols-3 md:gap-12">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <a
                href="#"
                className="inline-block font-display text-2xl font-bold text-foreground group hover:text-gradient transition-all"
              >
                <span className="text-gradient">D</span>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  K
                </span>
                <span className="text-primary">.</span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Building innovative AI/ML solutions and beautiful digital
                experiences with passion and precision.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-display font-semibold text-foreground text-sm md:text-base">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-display font-semibold text-foreground text-sm md:text-base">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email" ? "noopener noreferrer" : undefined
                    }
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent md:my-12" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <p className="text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
              © {new Date().getFullYear()} Dhanyasri K. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Crafted with{" "}
              <span className="text-primary font-semibold">passion</span> &{" "}
              <span className="text-accent font-semibold">code</span>
            </p>
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              Back to top ↑
            </a>
          </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
