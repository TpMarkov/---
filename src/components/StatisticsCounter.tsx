import React from "react";
import { motion } from "motion/react";
import { Award, Trees, Users, MapPin, Sparkles } from "lucide-react";

interface StatisticsCounterProps {
  lang: "BG" | "EN";
}

export default function StatisticsCounter({ lang }: StatisticsCounterProps) {
  const tr = {
    BG: {
      tag: "МАЩАБ И ДОВЕРИЕ",
      title: "Числата зад Трайното Занаятчийство",
      subtitle: "Нито едно число не е случайно. Зад всеки детайл стоят хиляди часове ръчен труд, отговорност за околната среда и доволни клиенти.",
      stat1: "18+",
      stat1Label: "Години Опит",
      stat1Sub: "Основани през 2008 г.",
      stat2: "3200+",
      stat2Label: "Мебели Ръчна Изработка",
      stat2Sub: "Шедьоври по поръчка",
      stat3: "15k+",
      stat3Label: "Засадени Дръвчета",
      stat3Sub: "Възобновяеми сертифицирани гори",
      stat4: "650+",
      stat4Label: "Архитектурни Резидениции",
      stat4Sub: "Завършени цялостни проекта",
    },
    EN: {
      tag: "SCALE AND CREDIBILITY",
      title: "The Numbers Behind Our Standing",
      subtitle: "Every metric represents an evergreen milestone. Thousands of hours of physical labor, carbon neutrality, and spatial refinement.",
      stat1: "18+",
      stat1Label: "Years of Heritage",
      stat1Sub: "Atelier founded in 2008",
      stat2: "3,200+",
      stat2Label: "Sinks & Masterpieces",
      stat2Sub: "Individually hand-mated parts",
      stat3: "15,000+",
      stat3Label: "Hardwood Saplings Planted",
      stat3Sub: "100% active eco re-forestry",
      stat4: "650+",
      stat4Label: "Designer Residencies",
      stat4Sub: "Complete custom projects",
    },
  }[lang];

  return (
    <section className="py-20 px-6 bg-white border-b border-primary/10 relative overflow-hidden" id="stats-counter-section">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Side-by-Side header / grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
                {tr.tag}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-dark leading-tight">
              {tr.title}
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
              {tr.subtitle}
            </p>
          </div>

          {/* Right Counters Grid Column (Symmetrical premium blocks) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
            
            {/* Stat 1 Block */}
            <div className="p-6 md:p-8 bg-[#FAF6F0] rounded-[32px] border border-primary/10 hover:border-primary/30 transition-all duration-300 space-y-3 group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white rounded-2xl border border-primary/15 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-neutral-400">01 // AGE</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight">
                  {tr.stat1}
                </span>
                <span className="block font-serif text-xs md:text-sm font-semibold text-dark mt-2">
                  {tr.stat1Label}
                </span>
                <span className="block font-sans text-[10px] text-neutral-500 font-light mt-0.5">
                  {tr.stat1Sub}
                </span>
              </div>
            </div>

            {/* Stat 2 Block */}
            <div className="p-6 md:p-8 bg-[#FAF6F0] rounded-[32px] border border-primary/10 hover:border-primary/30 transition-all duration-300 space-y-3 group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white rounded-2xl border border-primary/15 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-neutral-400">02 // PIECES</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight">
                  {tr.stat2}
                </span>
                <span className="block font-serif text-xs md:text-sm font-semibold text-dark mt-2">
                  {tr.stat2Label}
                </span>
                <span className="block font-sans text-[10px] text-neutral-500 font-light mt-0.5">
                  {tr.stat2Sub}
                </span>
              </div>
            </div>

            {/* Stat 3 Block */}
            <div className="p-6 md:p-8 bg-[#FAF6F0] rounded-[32px] border border-primary/10 hover:border-primary/30 transition-all duration-300 space-y-3 group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white rounded-2xl border border-primary/15 group-hover:scale-105 transition-transform">
                  <Trees className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-neutral-400">03 // CERT</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight">
                  {tr.stat3}
                </span>
                <span className="block font-serif text-xs md:text-sm font-semibold text-dark mt-2">
                  {tr.stat3Label}
                </span>
                <span className="block font-sans text-[10px] text-neutral-500 font-light mt-0.5">
                  {tr.stat3Sub}
                </span>
              </div>
            </div>

            {/* Stat 4 Block */}
            <div className="p-6 md:p-8 bg-[#FAF6F0] rounded-[32px] border border-primary/10 hover:border-primary/30 transition-all duration-300 space-y-3 group shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white rounded-2xl border border-primary/15 group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-neutral-400">04 // INVENT</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight">
                  {tr.stat4}
                </span>
                <span className="block font-serif text-xs md:text-sm font-semibold text-dark mt-2">
                  {tr.stat4Label}
                </span>
                <span className="block font-sans text-[10px] text-neutral-500 font-light mt-0.5">
                  {tr.stat4Sub}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
