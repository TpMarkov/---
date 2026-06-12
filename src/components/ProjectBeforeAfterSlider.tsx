import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowLeftRight, HelpCircle } from "lucide-react";

interface ProjectBeforeAfterSliderProps {
  lang: "BG" | "EN";
}

export default function ProjectBeforeAfterSlider({ lang }: ProjectBeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // LClick held
      handleMove(e.clientX);
    }
  };

  const tr = {
    BG: {
      tag: "ПРОЕКТНА ТРАНСФОРМАЦИЯ // RESIDENCE SOFIA",
      title: "Архитектурна Метаморфоза",
      subtitle: "Вижте разликата между грубия бетонен контур при първоначалния оглед и завършения луксозен салон, обзаведен изцяло от ателие Lilovi. Движете плъзгача за сравнение.",
      before: "ПРЕДИ // Груб Конструктивен Строеж",
      after: "СЛЕД // Сигнатурен Интериор Лилови",
    },
    EN: {
      tag: "PROJECT TRANSFORMATION // RESIDENCE MILANO",
      title: "Architectural Metamorphosis",
      subtitle: "Slide the dual-handle back and forth to inspect the transformation between the raw structural concrete shell and the finalized luxury warm timber salon by Lilovi.",
      before: "BEFORE // Raw Structural Concrete",
      after: "AFTER // Hand-crafted Lilovi Salon",
    }
  }[lang];

  return (
    <section className="py-24 px-6 bg-[#FAF6F0] border-b border-primary/10 relative overflow-hidden" id="before-after-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
              {tr.tag}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-dark leading-tight">
            {tr.title}
          </h2>
          <p className="font-sans text-sm text-neutral-600 font-light leading-relaxed max-w-2xl">
            {tr.subtitle}
          </p>
        </div>

        {/* Before After Interactive Container stage */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] rounded-[40px] overflow-hidden select-none cursor-ew-resize border border-[#C5A880]/20 shadow-xl"
        >
          
          {/* AFTER Image (Background full size) */}
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop" 
            alt="Finished designer salon" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute right-6 top-6 bg-dark/70 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C5A880]/30 text-[10px] font-sans font-bold tracking-widest text-[#FAF6F0] uppercase z-10">
            {tr.after}
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div 
            className="absolute top-0 bottom-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute top-0 bottom-0 left-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop" 
                alt="Under construction concrete room" 
                className="absolute inset-x-0 top-0 bottom-0 w-full h-full object-cover pointer-events-none filter brightness-[0.5]"
                style={{ width: containerRef.current?.getBoundingClientRect().width }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="absolute left-6 top-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-[10px] font-sans font-bold tracking-widest text-neutral-300 uppercase z-10 pointer-events-none">
            {tr.before}
          </div>

          {/* Slider line separator handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-[#C5A880] cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Grab circles button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-dark border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-2xl transition-transform duration-300 group-hover:scale-110 active:scale-95">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Small detail tip */}
        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest text-center mt-4">
          {lang === "BG" ? "* Задръжте и плъзгайте наляво-надясно за сравнение" : "* Hold and slide left-to-right to inspect woodwork fit"}
        </p>

      </div>
    </section>
  );
}
