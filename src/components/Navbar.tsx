import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-card/70 shadow-glow backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-primary/20">
              <div className="absolute inset-1 rounded-[14px] bg-gradient-primary opacity-15" />
              <div className="absolute inset-2 rounded-xl border border-primary/25" />
              <span className="relative flex items-end font-display font-bold leading-none">
                <span className="text-[15px] text-foreground transition-colors group-hover:text-primary">D</span>
                <span className="-ml-0.5 text-[15px] text-primary transition-colors group-hover:text-foreground">K</span>
              </span>
              <span className="absolute right-[7px] top-[7px] h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse" />
            </div>
            <span className="hidden sm:block font-display font-bold text-sm text-foreground/80 group-hover:text-foreground transition-colors tracking-tight">
              Dhanyasri <span className="text-primary">K</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold group"
              >
                {link.label}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: hoveredLink === link.label ? "70%" : 0 }}
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full transition-all duration-300"
                />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all border border-transparent hover:border-border"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* Resume button */}
            <a
              href="/ML_RESUME (1).pdf"
              download="Dhanyasri_K_Resume.pdf"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl border border-border/50 text-foreground hover:bg-secondary/60 transition-all"
            >
              Resume
            </a>

            {/* Let's Talk button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Let's Talk <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-base text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all font-semibold flex items-center justify-between group"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-4 py-4 text-center text-sm font-bold bg-primary text-primary-foreground rounded-xl shadow-glow"
              >
                Let's Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
