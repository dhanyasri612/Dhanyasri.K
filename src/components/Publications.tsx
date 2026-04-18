import { useState } from "react";
import { BookOpen, Calendar, Award, User, Info, ChevronRight, RotateCcw, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const publications = [
  {
    title: "Self-Adaptive Vision-Based Smart Parking System",
    status: "ACCEPTED TO PUBLISH",
    volume: "Paper Publication",
    year: "2025",
    journal: "Engineering Advance",
    authors: "Dhamodharan T, Dhanyasri K, Dharshan S V, Dharun Balaji K, Anish Antony",
    about: "Authored a research paper proposing a YOLOv8-Seg–based smart parking system with Dynamic Slot Mapping for fine-grained parking occupancy detection, achieving high accuracy, low latency, and scalability without physical sensors. The system enhances urban parking management through real-time monitoring and efficient space utilization.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const PublicationBook = ({ pub, index }: { pub: typeof publications[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      className="relative w-full max-w-[550px] h-[400px] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      style={{ perspective: "1500px" }}
    >
      {/* ── INSIDE PAGES (Back Layer) ── */}
      <div className="absolute inset-0 rounded-r-2xl rounded-l-sm bg-white dark:bg-card border border-border shadow-lg p-8 md:p-10 flex flex-col z-10 origin-left ml-1">
        <div className="flex-1 overflow-auto custom-scrollbar pr-4">
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Authors</p>
              <p className="text-sm font-semibold text-foreground leading-snug">{pub.authors}</p>
            </div>
            
            <div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Abstract</p>
              <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                {pub.about}
              </p>
            </div>

            <div className="pt-4 border-t border-border/50 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[9px] font-mono text-muted-foreground uppercase mb-1">Journal</p>
                <p className="text-[11px] font-bold text-foreground">{pub.journal}</p>
              </div>
              <div>
                <p className="text-[9px] font-mono text-muted-foreground uppercase mb-1">Volume</p>
                <p className="text-[11px] font-bold text-foreground">{pub.volume}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end items-center gap-2">
           <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-60">
             <RotateCcw className="w-3 h-3 inline mr-1" /> Close
           </span>
        </div>
      </div>

      {/* ── BOOK COVER (Front Layer) ── */}
      <motion.div
        animate={{ rotateY: isOpen ? -115 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", transformOrigin: "left" }}
        className="relative w-full h-full z-20"
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-r-2xl rounded-l-sm overflow-hidden bg-[#0a192f] shadow-2xl border-l-[6px] border-primary/40 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Cover Design */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.2),transparent)]" />
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 ml-4" />
          
          <div className="relative p-8 h-full flex flex-col justify-between">
             <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-primary/80 uppercase tracking-[0.2em] font-bold">Issue {pub.year}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight mb-4 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <div className="h-0.5 w-12 bg-primary/60 mb-6" />
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest leading-relaxed">
                  {pub.journal} <br/> <span className="text-primary/70">{pub.volume}</span>
                </p>
             </div>

             <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-tight">{pub.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 animate-pulse">
                  Click to Read <ChevronRight className="w-3 h-3" />
                </div>
             </div>
          </div>
        </div>

        {/* Back Face (Inside of Cover) */}
        <div
          className="absolute inset-0 rounded-r-sm rounded-l-2xl bg-[#0d2137] border border-white/5 flex flex-col p-8"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
           <div className="h-full border border-white/5 rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-mono text-slate-300 uppercase tracking-widest mb-2">Authenticated Publication</p>
              <p className="text-[10px] text-slate-500 leading-relaxed italic">
                Verified research contribution in the field of intelligent systems and vision-based automation.
              </p>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Publications = () => {
  return (
    <section id="publications" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
      
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative">
        
        {/* Left Aligned Heading */}
        <div className="mb-20">
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-xs font-mono text-primary tracking-[0.25em] uppercase">Academic Research</span>
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Latest <span className="text-gradient">Publications</span>
          </motion.h2>
          
          <motion.p {...fadeUp(0.2)} className="text-sm text-muted-foreground font-mono max-w-xl">
            Click the book covers to explore publication details, authors, and research abstracts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {publications.map((pub, i) => (
            <PublicationBook key={i} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
