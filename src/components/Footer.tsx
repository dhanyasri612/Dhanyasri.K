import { Github, Linkedin, Code2 } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/dhanyasri612", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dhanyasri-k-6b6902299", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/dhanyasrikalisamy", label: "LeetCode" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-bold text-foreground group">
            <span className="text-gradient">D</span>
            <span className="text-foreground group-hover:text-primary transition-colors">S</span>
            <span className="text-primary">.</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dhanyasri K. Crafted with passion & code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
