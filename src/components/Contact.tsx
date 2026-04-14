import { Mail, Phone, MapPin, Send, Github, Linkedin, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "./AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled content
    const mailtoLink = `mailto:dhanyasrikalisamy@gmail.com?subject=Hello from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
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
              // Let's Connect
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's build something amazing together!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <motion.a 
                  variants={fadeInLeft}
                  href="mailto:dhanyasrikalisamy@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-gradient hover-glow transition-all group"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium text-sm sm:text-base truncate">dhanyasrikalisamy@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  variants={fadeInLeft}
                  href="tel:+918825938529"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-gradient hover-glow transition-all group"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium text-sm sm:text-base">+91 88259 38529</p>
                  </div>
                </motion.a>

                <motion.div 
                  variants={fadeInLeft}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-gradient"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium text-sm sm:text-base">Coimbatore, Tamil Nadu</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div 
                variants={fadeInLeft}
                className="pt-4 sm:pt-6 border-t border-border"
              >
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Connect with me</p>
                <div className="flex gap-3 sm:gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/dhanyasri612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/dhanyasri-k-6b6902299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.figma.com/design/fECgy3WOUzc8MnWM0aH6cN/Untitled?t=WDxTV7tfcdZaQOQd-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Figma className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="lg:col-span-3"
            >
              <form 
                onSubmit={handleSubmit} 
                className="p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-gradient space-y-4 sm:space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
