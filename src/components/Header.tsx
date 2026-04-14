import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="font-display text-xl sm:text-2xl font-bold text-foreground group relative"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gradient">D</span>
          <span className="text-foreground group-hover:text-primary transition-colors">K</span>
          <span className="text-primary">.</span>
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={item.href}
                className="relative px-3 lg:px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="glass" size="sm" className="text-xs lg:text-sm" asChild>
              <a href="/ML_RESUME%20(1).pdf" download="ML_RESUME (1).pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="hero" size="sm" className="text-xs lg:text-sm" asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { maxHeight: 400, opacity: 1 },
          closed: { maxHeight: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="glass border-t border-border">
          <ul className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <motion.li 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.href}
                  className="block py-3 px-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li 
              className="pt-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <ThemeToggle />
              <Button variant="glass" size="sm" className="flex-1 text-xs" asChild>
                <a href="/ML_RESUME%20(1).pdf" download="ML_RESUME (1).pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
              <Button variant="hero" size="sm" className="flex-1 text-xs" asChild>
                <a href="#contact">Talk</a>
              </Button>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
