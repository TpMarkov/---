import React from "react";
import { motion } from "motion/react";
import { Box, Sparkles, MoveRight, DownloadCloud, PenTool } from "lucide-react";

interface LuxuryCTAProps {
  lang: "BG" | "EN";
  onTriggerQuote: () => void;
}

export default function LuxuryCTA({ lang, onTriggerQuote }: LuxuryCTAProps) {
  const tr = {
    BG: {
      tag: "ФИЗИЧЕСКИ МОСТ",
      title: "Докоснете Материала Преди Поръчка",
      subtitle: "Искате да усетите плътността на дивия дъб или масления финиш на американския орех? Поръчайте нашата Физическа Селекция от Дървесни Мостри директно до вашия офис.",
      actionPrimary: "Искай Кутия с Мостри",
      actionSecondary: "Свали CAD Скица (Architect)",
      title2: "Споделете Вашия Чертеж",
      subtitle2: "Имате готов проект от архитект или скица на салфетка? Изпратете ни я директно и нашите инженери ще изчислят точен бюджет безплатно.",
    },
    EN: {
      tag: "PHYSICAL EXPERIENCE BLOCK",
      title: "Touch the Grain Before Committing",
      subtitle: "Would you like to experience the exact physical weight of our wild oak or the hand-rubbed linseed satin feel of American walnut? Request our curated Architect Sample Box delivered to your desk.",
      actionPrimary: "Request Sample Box",
      actionSecondary: "Download CAD Drawings (.dwg)",
      title2: "Submit Your Custom Sketch",
      subtitle2: "Already have a blueprint from your interior designer or a quick outline on paper? Submit it via our spec sheet and our craft engineers will compute your quote.",
    }
  }[lang];

  return (
    <section className="py-20 px-6 bg-[#FAF6F0] border-b border-primary/10 relative overflow-hidden" id="luxury-cta-block">
      {/* Dynamic light gold halo behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Box 1: Material Sample Request card */}
          <div className="p-8 md:p-12 bg-white rounded-[40px] border border-primary/15 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between space-y-8 group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <Box className="w-4 h-4 text-primary" />
                <span className="font-sans text-[10px] tracking-[0.2em] font-extrabold text-primary uppercase">
                  {tr.tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark tracking-tight leading-tight">
                {tr.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                {tr.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onTriggerQuote}
                className="inline-flex items-center gap-2 bg-dark text-white border border-[#C5A880]/30 hover:border-primary px-6 py-3.5 rounded-full font-sans text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-dark transition-all duration-300 shadow-md cursor-pointer border-none"
              >
                <span>{tr.actionPrimary}</span>
                <MoveRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => alert(lang === "BG" ? "Каталогът се изтегля..." : "Architect spec box drawing package starting...")}
                className="inline-flex items-center gap-2 bg-transparent text-neutral-600 hover:text-dark border border-neutral-200 hover:border-dark px-6 py-3.5 rounded-full font-sans text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>{tr.actionSecondary}</span>
              </button>
            </div>
          </div>

          {/* Box 2: Custom Blueprint file guidelines card */}
          <div className="p-8 md:p-12 bg-dark rounded-[40px] border border-primary/15 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between space-y-8 text-white group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <PenTool className="w-4 h-4 text-primary" />
                <span className="font-sans text-[10px] tracking-[0.2em] font-extrabold text-primary uppercase">
                  SPECIFICATION ARCHETYPES
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                {tr.title2}
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                {tr.subtitle2}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onTriggerQuote}
                className="inline-flex items-center gap-2 bg-primary text-black font-sans text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white hover:text-dark transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer border-none"
              >
                <span>{lang === "BG" ? "Изпрати Скица" : "Submit Blueprint"}</span>
                <MoveRight className="w-4 h-4" />
              </button>
              
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                {lang === "BG" ? "• Всички формати се приемат" : "• Support PDF, Jpeg, DWG"}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
