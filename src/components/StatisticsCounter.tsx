import React from "react";
import { motion } from "motion/react";
import { 
  Building, 
  Coffee, 
  Hotel, 
  Compass, 
  CheckCircle2, 
  Users, 
  Award, 
  Timer, 
  Globe2, 
  Hammer,
  Sparkles
} from "lucide-react";

interface StatisticsCounterProps {
  lang: "BG" | "EN";
}

export default function StatisticsCounter({ lang }: StatisticsCounterProps) {
  const tr = {
    BG: {
      whyTag: "ЛЕГЕНДАТА НА ТОНЕТ",
      whyTitle: "Столът, който никога не излиза от мода",
      whyDesc: "Произлизащи от емблематичната традиция на Thonet, виенските столове остават символ на непреходна елегантность в продължение на повече от век. Техният олекотен дизайн, фино огънати детайли от масивно дърво и вечен силует ги правят идеалното решение за:",
      
      app1: "Ресторанти",
      app2: "Кафенета & Сладкарници",
      app3: "Бутикови Хотели",
      app4: "Барове & Клубове",
      app5: "Интериорни Дизайнери",
      app6: "Луксозни Жилищни Обекти",

      proofTag: "СОЦИАЛНО ДОКАЗАТЕЛСТВО",
      proofTitle: "Доверено от професионалисти в ресторантьорството",
      
      stat1: "25+ години",
      stat1Label: "Занаятчийски Опит",
      stat1Sub: "Постоянство от 1996 г.",

      stat2: "50k+",
      stat2Label: "Произведени Столове",
      stat2Sub: "Доставени до стотици обекти",

      stat3: "100%",
      stat3Label: "Европейско Производство",
      stat3Sub: "Всички суровини са от ЕС",

      stat4: "15+",
      stat4Label: "Държави на Експорт",
      stat4Sub: "Широка партньорска мрежа",
    },
    EN: {
      whyTag: "THE BENTWOOD HISTORY",
      whyTitle: "The Chair That Never Goes Out of Style",
      whyDesc: "Originating from the iconic Thonet tradition, Viennese chairs have remained a symbol of elegance for more than a century. Their lightweight construction, curved solid wood elements and timeless silhouette make them ideal for:",
      
      app1: "Restaurants",
      app2: "Cafés",
      app3: "Hotels",
      app4: "Bars",
      app5: "Interior Designers",
      app6: "Luxury Residential Projects",

      proofTag: "HOSPITALITY TRUST",
      proofTitle: "Trusted by Hospitality Professionals",
      
      stat1: "25+ Years",
      stat1Label: "Experience",
      stat1Sub: "Atelier manufacturing since 1996",

      stat2: "50,000+",
      stat2Label: "Chairs Produced",
      stat2Sub: "Serving hundreds of properties",

      stat3: "European",
      stat3Label: "Manufacturing",
      stat3Sub: "100% locally sourced & produced",

      stat4: "International",
      stat4Label: "Clients",
      stat4Sub: "Trusted across 15+ countries",
    },
  }[lang];

  const applications = [
    { label: tr.app1, icon: <Building className="w-5 h-5 text-primary" /> },
    { label: tr.app2, icon: <Coffee className="w-5 h-5 text-primary" /> },
    { label: tr.app3, icon: <Hotel className="w-5 h-5 text-primary" /> },
    { label: tr.app4, icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { label: tr.app5, icon: <Compass className="w-5 h-5 text-primary" /> },
    { label: tr.app6, icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
  ];

  return (
    <div id="why-viennese-section" className="scroll-mt-24">
      {/* SECTION 2: WHY VIENNESE CHAIRS */}
      <section className="py-24 px-6 bg-white border-b border-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 border-b border-[#C5A880]/30 pb-1">
                <span className="font-sans text-[10px] tracking-[0.3em] font-extrabold text-primary uppercase">
                  [ {tr.whyTag} ]
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-dark leading-tight">
                {tr.whyTitle}
              </h2>
              <p className="font-sans text-sm md:text-base text-neutral-500 leading-relaxed font-light">
                {tr.whyDesc}
              </p>
            </div>

            {/* Right Ideal Grid Icons Block */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((app, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex items-center gap-4 p-5 bg-[#FAF6F0] rounded-2xl border border-primary/5 hover:border-primary/25 transition-all duration-300"
                  >
                    <div className="p-3 bg-white rounded-xl border border-primary/10 shadow-sm">
                      {app.icon}
                    </div>
                    <span className="font-sans text-xs md:text-sm font-bold text-dark uppercase tracking-wider">
                      {app.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}
      <section className="py-24 px-6 bg-[#FAF6F0]/20 border-b border-primary/10 relative overflow-hidden" id="social-proof-section">
        {/* Subtle decorative vector mesh coordinates */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Credibility copy left block */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
                  {tr.proofTag}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-dark leading-tight">
                {tr.proofTitle}
              </h2>
              <p className="font-sans text-sm text-neutral-500 font-light leading-relaxed">
                {lang === "BG"
                  ? "Ние изграждаме дълготрайни партньорства с интериорни архитекти, дизайнерски бюра и брандове в престижната хотелиерска индустрия."
                  : "We build long-standing alliances with interior design firms, sourcing associates, and hospitality operators across key European markets."}
              </p>
            </div>

            {/* Symmetrical Counters Right column */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-8">
              
              {/* Stat 1: 25+ Years */}
              <div className="p-6 md:p-8 bg-white rounded-[32px] border border-primary/10 hover:border-primary/25 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-primary/10">
                    <Timer className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-neutral-400">01 // HISTORY</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
                    {tr.stat1}
                  </span>
                  <span className="block font-sans text-xs font-semibold text-neutral-700 mt-2 uppercase tracking-wider">
                    {tr.stat1Label}
                  </span>
                  <span className="block font-sans text-[10px] text-neutral-400 font-light mt-0.5">
                    {tr.stat1Sub}
                  </span>
                </div>
              </div>

              {/* Stat 2: 50,000+ Chairs */}
              <div className="p-6 md:p-8 bg-white rounded-[32px] border border-primary/10 hover:border-primary/25 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-primary/10">
                    <Hammer className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-neutral-400">02 // CAPACITY</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
                    {tr.stat2}
                  </span>
                  <span className="block font-sans text-xs font-semibold text-neutral-700 mt-2 uppercase tracking-wider">
                    {tr.stat2Label}
                  </span>
                  <span className="block font-sans text-[10px] text-neutral-400 font-light mt-0.5">
                    {tr.stat2Sub}
                  </span>
                </div>
              </div>

              {/* Stat 3: European Manufacturing */}
              <div className="p-6 md:p-8 bg-white rounded-[32px] border border-primary/10 hover:border-primary/25 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-neutral-400">03 // LOCALLY</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
                    {tr.stat3}
                  </span>
                  <span className="block font-sans text-xs font-semibold text-neutral-700 mt-2 uppercase tracking-wider">
                    {tr.stat3Label}
                  </span>
                  <span className="block font-sans text-[10px] text-neutral-400 font-light mt-0.5">
                    {tr.stat3Sub}
                  </span>
                </div>
              </div>

              {/* Stat 4: International Clients */}
              <div className="p-6 md:p-8 bg-white rounded-[32px] border border-primary/10 hover:border-primary/25 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-primary/10">
                    <Globe2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-neutral-400">04 // EXPORTS</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
                    {tr.stat4}
                  </span>
                  <span className="block font-sans text-xs font-semibold text-neutral-700 mt-2 uppercase tracking-wider">
                    {tr.stat4Label}
                  </span>
                  <span className="block font-sans text-[10px] text-neutral-400 font-light mt-0.5">
                    {tr.stat4Sub}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
