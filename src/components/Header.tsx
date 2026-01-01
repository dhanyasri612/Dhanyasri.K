import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
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
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-foreground group">
          <span className="text-gradient">D</span>
          <span className="text-foreground group-hover:text-primary transition-colors">K</span>
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="glass" size="sm" asChild>
            <a href="/Dhanyasri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-border">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 flex items-center gap-3">
              <ThemeToggle />
              <Button variant="glass" className="flex-1" asChild>
                <a href="/Dhanyasri_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
              <Button variant="hero" className="flex-1" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
