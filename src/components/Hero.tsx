import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Flame, Compass, Sparkles } from "lucide-react";
import LiloviLogo from "./LiloviLogo";

interface HeroProps {
  lang: "BG" | "EN";
  onExplore: () => void;
  onCatalogue: () => void;
}

export default function Hero({ lang, onExplore, onCatalogue }: HeroProps) {
  const tr = {
    BG: {
      tag: "ПРЕМИУМ ЛИНИЯ 2024–2025",
      headlinePart1: "ИЗКУСТВОТО НА",
      headlinePart2: "ПРОСТРАНСТВАТА",
      sub: "Архитектурен обем, прецизни сглобки и чиста геометрия. Ние трансформираме ежедневните пространства в трайни изящни произведения на интериорното изкуство.",
      viewCollection: "Разгледай Колекцията",
      openCatalogue: "Дигитален Каталог",
      metric1: "Материали",
      metric1Sub: "100% Възобновяеми сертифицирани гори",
      metric2: "Сглобка",
      metric2Sub: "Ръчно напасвани компоненти",
      badgeText: "LILOVI WOODEN ELEGANCE",
    },
    EN: {
      tag: "PREMIUM SEASON 2024–2025",
      headlinePart1: "THE ART OF DWELLING",
      headlinePart2: "WITHIN PURE SPACES",
      sub: "Architectural volumes, seamless joints, and pure geometric weight. We transition daily domestic zones into everlasting structures of functional fine art.",
      viewCollection: "Explore Collection",
      openCatalogue: "Digital FlipBook",
      metric1: "Sustainability",
      metric1Sub: "100% Certified organic hardwoods",
      metric2: "Joinery",
      metric2Sub: "Generational hand-mated parts",
      badgeText: "LILOVI WOODEN ELEGANCE",
    },
  }[lang];

  // Moving ticker repeating items
  const tickerItems = Array(12).fill(`*** ${lang === "BG" ? "КАТАЛОГ" : "CATALOGUE"} 2024–2025 ***`);

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pb-24 border-b border-neutral-100">
      
      {/* Announcement Running Ticker */}
      <div className="w-full bg-primary py-3 overflow-hidden select-none border-y border-primary/20 flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 text-white font-jura text-[12px] font-bold tracking-[0.25em] uppercase pl-12"
        >
          {tickerItems.concat(tickerItems).map((text, i) => (
            <span key={i} className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 fill-white inline animate-pulse" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Background Decorative Elements for Artistic Flair Theme */}
      <div className="absolute top-24 right-0 w-[40%] h-full bg-[#fcfcfc]/80 -z-10 pointer-events-none" />
      <div className="absolute bottom-24 left-12 opacity-[0.03] text-[150px] md:text-[220px] font-bold select-none pointer-events-none -z-10 tracking-widest font-jura leading-none">
        DESIGN
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 lg:mt-20 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block - 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-primary/10 text-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm"
            >
              {lang === "BG" ? "ОСНОВАНА ПРЕЗ 2008" : "ESTABLISHED 2008"}
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-jura text-[72px] md:text-[88px] leading-[0.85] font-extrabold text-[#333] tracking-tighter uppercase"
              >
                {tr.headlinePart1} <br />
                <span className="text-primary">
                  {tr.headlinePart2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-sans text-lg leading-relaxed text-brand-gray max-w-[480px] font-normal"
              >
                {tr.sub}
              </motion.p>
            </div>

            {/* Trusted indicators row from theme HTML */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex items-center space-x-6 pt-2"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-400"></div>
              </div>
              <div className="text-xs leading-tight uppercase font-bold tracking-wide text-neutral-700">
                {lang === "BG" ? "Доверие от 500+" : "Trusted by 500+"} <br/> <span className="text-primary">{lang === "BG" ? "дизайнери по света" : "Designers globally"}</span>
              </div>
            </motion.div>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center pt-2"
            >
              <button
                onClick={onExplore}
                className="font-jura text-xs uppercase font-bold tracking-widest bg-primary hover:bg-red-600 text-white px-8 py-3.5 rounded-full transition-all shadow-[0_4px_15px_rgba(232,91,91,0.3)] active:scale-95 cursor-pointer border-none"
              >
                {tr.viewCollection}
              </button>
              
              <button
                onClick={onCatalogue}
                className="font-jura text-xs font-bold tracking-widest uppercase bg-transparent text-[#333] hover:text-primary border border-neutral-300 hover:border-primary/80 px-8 py-3.5 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                {tr.openCatalogue}
              </button>
            </motion.div>

            {/* Metrics Footer (Artistic Style) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-8 mt-12"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Compass className="w-4 h-4" />
                  <span className="font-jura text-xs tracking-widest uppercase">
                    {tr.metric1}
                  </span>
                </div>
                <p className="font-jura text-sm font-semibold text-[#333] leading-tight">
                  {tr.metric1Sub}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-jura text-xs tracking-widest uppercase">
                    {tr.metric2}
                  </span>
                </div>
                <p className="font-jura text-sm font-semibold text-[#333] leading-tight">
                  {tr.metric2Sub}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image Block - 5 cols (Asymmetric Stack) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Spinning Badge Overlay */}
            <div className="absolute -top-10 -left-10 z-10 hidden sm:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="relative w-28 h-28 flex items-center justify-center rounded-full bg-white border border-neutral-100 shadow-xl"
              >
                <LiloviLogo iconOnly className="w-10 h-10 absolute" />
                
                {/* SVG Text Curve */}
                <svg viewBox="0 0 100 100" className="w-[100px] h-[100px]">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text className="font-jura text-[7px] font-bold fill-dark uppercase tracking-widest">
                    <textPath href="#circlePath">
                      {tr.badgeText} • {tr.badgeText} •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>

            {/* Asymmetrical Framer Frames */}
            <div className="relative grid grid-cols-12 gap-4">
              
              {/* Box 1 (Main Big Image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="col-span-12 relative overflow-hidden rounded-[40px] border border-neutral-100 shadow-2xl h-[420px]"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200&auto=format&fit=crop"
                  alt="High end Minimal Chair"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white space-y-1 pointer-events-none">
                  <span className="font-jura text-xs tracking-widest text-[#E85B5B] font-bold uppercase">
                    01 // STUDY CHAIR
                  </span>
                  <h3 className="font-jura text-lg font-bold uppercase tracking-wider">
                    Astrid Velvet Accent
                  </h3>
                </div>
              </motion.div>

              {/* Box 2 (Smaller Floating Image Overlap) */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="col-span-7 relative -mt-20 z-10 overflow-hidden rounded-[40px] border border-neutral-100 shadow-xl h-[180px]"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
                  alt="Sofa green"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Box 3 (Artistic Catalogue sticker, bg-primary red) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="col-span-5 bg-[#E85B5B] rounded-[40px] p-6 flex flex-col justify-between -mt-20 z-10 h-[180px] text-white shadow-xl"
              >
                <div className="text-xs font-jura tracking-widest uppercase opacity-90 font-bold">
                  {lang === "BG" ? "НОВО ИЗДАНИЕ" : "CATALOGUE RELEASE"}
                </div>
                <div className="space-y-1">
                  <div className="font-jura text-xs opacity-80 uppercase font-medium">
                    {lang === "BG" ? "Колекция:" : "Collection:"}
                  </div>
                  <div className="font-jura text-lg font-extrabold uppercase tracking-wide leading-tight">
                    PURE FORM
                  </div>
                  <div className="font-jura text-xs font-bold opacity-90">
                    2024 - 2025
                  </div>
                </div>
                <button
                  onClick={onExplore}
                  className="inline-flex items-center gap-1.5 font-jura text-xs uppercase font-bold text-white hover:underline mt-2 cursor-pointer self-start"
                >
                  <span>{lang === "BG" ? "Разгледaj" : "Request Quote"}</span>
                  <ArrowDown className="w-3 h-3 -rotate-90" />
                </button>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
