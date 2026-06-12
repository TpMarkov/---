import React from "react";
import { Phone, Mail, MapPin, ArrowUp, Send, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingWidgetsProps {
  lang: "BG" | "EN";
}

export default function FloatingWidgets({ lang }: FloatingWidgetsProps) {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Control visibility of floating triggers
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tr = {
    BG: {
      header: "Ателие Лилови",
      sub: "Директна връзка с майстора-проектант",
      phone: "+359 898 565 241",
      email: "atelier@lilovi.com",
      addr: "с. Орешак, ул. Балканска 42",
      prompt: "Позвъни Сега",
    },
    EN: {
      header: "Lilov Atelier Office",
      sub: "Direct line with our master designers",
      phone: "+359 898 565 241",
      email: "atelier@lilovi.com",
      addr: "42 Balkanska str, Oreshak, BG",
      prompt: "Call Atelier",
    }
  }[lang];

  return (
    <>
      {/* Scroll Progress Bar Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-900/40 z-[99] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-primary via-[#FAF6F0] to-primary transition-all duration-75 ease"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Buttons & Panels Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 15 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-72 bg-dark border border-[#C5A880]/35 text-[#FAF6F0] rounded-[28px] p-6 shadow-2xl relative space-y-4 mb-2 origin-bottom-right"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                aria-label="Close contact widget"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Branding Header */}
              <div className="space-y-1">
                <h4 className="font-serif text-base text-[#C5A880] font-bold">
                  {tr.header}
                </h4>
                <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                  {tr.sub}
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-3.5 pt-2 text-xs border-t border-primary/15">
                {/* Telephone */}
                <a 
                  href={`tel:${tr.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-3 hover:text-primary transition-colors group py-1"
                >
                  <div className="p-2 bg-white/5 rounded-xl border border-white/15 group-hover:bg-primary/20">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-mono font-medium">{tr.phone}</span>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${tr.email}`} 
                  className="flex items-center gap-3 hover:text-primary transition-colors group py-1"
                >
                  <div className="p-2 bg-white/5 rounded-xl border border-white/15 group-hover:bg-primary/20">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-sans font-light underline">{tr.email}</span>
                </a>

                {/* Address */}
                <div className="flex items-center gap-3 py-1">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/15">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-sans font-light text-neutral-300">{tr.addr}</span>
                </div>
              </div>

              {/* Active Call trigger button */}
              <a 
                href={`tel:${tr.phone.replace(/\s+/g, '')}`} 
                className="w-full flex items-center justify-center gap-2 bg-primary text-black py-2.5 rounded-xl font-sans text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
              >
                <Phone className="w-3 h-3 fill-current animate-bounce" />
                <span>{tr.prompt}</span>
              </a>

            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-2">
          {/* Main Floating Bubble trigger button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-4 bg-dark text-primary rounded-full border-2 border-primary/40 hover:border-primary shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center`}
            aria-label="Direct line contact trigger"
          >
            {isOpen ? <X className="w-5 h-5 text-primary" /> : <MessageCircle className="w-5 h-5 text-primary animate-pulse" />}
          </button>

          {/* Quick Back to Top trigger */}
          <AnimatePresence>
            {isVisible && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleScrollToTop}
                className="p-4 bg-white/95 text-dark border border-primary/25 rounded-full shadow-2xl hover:bg-[#FAF6F0] hover:text-primary transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                aria-label="Back to top of the page"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
