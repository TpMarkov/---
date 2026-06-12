import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Flame, Compass, Sparkles, Shield, Compass as Needle, Award } from "lucide-react";
import LiloviLogo from "./LiloviLogo";

interface HeroProps {
  lang: "BG" | "EN";
  onExplore: () => void;
  onCatalogue: () => void;
}

export default function Hero({ lang, onExplore, onCatalogue }: HeroProps) {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tr = {
    BG: {
      tag: "ПРЕМИУМ ЛИНИЯ // АТЕЛИЕ LILOVI",
      titlePart1: "КЪДЕТО ПРОСТРАНСТВОТО СРЕЩА",
      titlePart2: "СКУЛПТУРНАТА ТИШИНА",
      sub: "Бутикови мебели от селектирана вековна дървесина, проектирани за вечен архитектурен мащаб и изключителен акустичен комфорт. Ръчна изработка в нашето семейно ателие.",
      explore: "Разгледайте Колекцията",
      viewBook: "Дигитален Лъч-Каталог",
      trustBadge: "100% АВТЕНТИЧНО БЪЛГАРСКО ПРОИЗВОДСТВО",
      qHeader: "КАКВО НИ ПРАВИ РАЗЛИЧНИ?",
      qBody: "За разлика от масовите мебели от ПДЧ, които отделят лепила и губят стойност, ние работим изцяло с масивен дъб и американски орех. Мебелите ни подобряват домашната акустика и придобиват благородна патина.",
      metricTitle1: "Материал",
      metricSub1: "Масивна дъбова дървесина с произход от сертифицирани родни гори",
      metricTitle2: "Сглобка",
      metricSub2: "Занаятчийски двойни гнездови сглобки без метални крепежи",
      metricTitle3: "Стандарт",
      metricSub3: "Ленено био масло и немски вакси, сертифицирани за бебешки играчки",
    },
    EN: {
      tag: "PREMIUM LINE // LILOVI ATELIER",
      titlePart1: "WHERE SPACE ENCOUNTERS",
      titlePart2: "SCULPTURAL SILENCE",
      sub: "Bespoke furniture forged from centuries-old selected hardwoods, engineered for timeless architectural scale and premium acoustic warmth. Handcrafted in our family-owned atelier.",
      explore: "Explore the Collection",
      viewBook: "Digital Pagebook",
      trustBadge: "100% ARTISANAL EUROPEAN HARDWOOD",
      qHeader: "WHAT MAKES US DIFFERENT?",
      qBody: "Unlike fast-furniture constructed from composite particle boards filled with toxic resins, we build exclusively with solid oak, wild ash, and walnut. Our pieces absorb acoustic glare, purify local air quality, and age into heirloom-grade patinas.",
      metricTitle1: "Source Material",
      metricSub1: "Solid premium wild oak sourced with full environmental traceability",
      metricTitle2: "Atelier Joinery",
      metricSub2: "Generational hand-mated mortise-and-tenon joints with wood dowels",
      metricTitle3: "Pure Oil finish",
      metricSub3: "Cold-pressed bio friendly oils and beeswax certified for organic safety",
    },
  }[lang];

  // Parallax offsets
  const backgroundY = scrollY * 0.45;
  const overlayY = scrollY * 0.2;
  const contentY = scrollY * -0.12;

  // Cinematic horizontal text marquee entries
  const tickerItems = Array(10).fill(`• ESTABLISHED 2008 • LILOVI ATELIER • HANDCRAFTED WOODCRAFT`);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-luxury-black text-[#FAF6F0] pt-24 md:pt-28" id="hero-classic">
      
      {/* Cinematic Layer 1: Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full transform transition-transform duration-75 will-change-transform"
        style={{ 
          transform: `translateY(${backgroundY}px)` ,
        }}
      >
        <img 
          src="/src/assets/images/luxury_hero_bg_1781243342969.jpg" 
          alt="Premium luxury wood interior" 
          className="w-full h-full object-cover object-center filter brightness-[0.45] scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Cinematic Layer 2: Complex Golden & Deep Shadow gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-luxury-black/90 via-transparent to-luxury-black z-10 pointer-events-none"
        style={{ transform: `translateY(${overlayY}px)` }}
      />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-luxury-black/70 z-10 pointer-events-none" />

      {/* Cinematic Layer 3: Main Editorial Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex-1 flex flex-col justify-center z-20">
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-transform duration-75 will-change-transform"
          style={{ transform: `translateY(${contentY}px)` }}
        >
          {/* Main Titles Left Column */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3 bg-[#FAF6F0]/10 backdrop-blur-md border border-[#C5A880]/30 px-4 py-2 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-[#C5A880] uppercase">
                {tr.tag}
              </span>
            </div>

            {/* Huge Display Typography Header */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] text-border-glow">
                <span className="block italic text-neutral-300 font-light">{tr.titlePart1}</span>
                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] via-[#E5D5B8] to-white">
                  {tr.titlePart2}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-[15px] md:text-[17px] leading-relaxed text-neutral-300/90 max-w-[580px] font-light">
                {tr.sub}
              </p>
            </div>

            {/* Asymmetrical Quote Callout Box addressing "What Makes Us Different" */}
            <div className="p-6 md:p-8 bg-black/50 backdrop-blur-md border-l-2 border-[#C5A880] rounded-r-3xl max-w-2xl space-y-3 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                <Award className="w-24 h-24 text-primary" />
              </div>
              <h3 className="font-serif text-sm tracking-widest text-[#C5A880] uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {tr.qHeader}
              </h3>
              <p className="font-sans text-xs md:text-[13px] leading-relaxed text-neutral-300 font-light">
                {tr.qBody}
              </p>
            </div>

            {/* Premium CTA Row */}
            <div className="flex flex-wrap gap-4 items-center pt-4">
              {/* Magnetic style primary button */}
              <button
                onClick={onExplore}
                className="group relative inline-flex items-center gap-3 bg-primary text-black font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_4px_30px_rgba(197,168,128,0.25)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.25)] transform active:scale-95 cursor-pointer border-none"
              >
                <span>{tr.explore}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <button
                onClick={onCatalogue}
                className="inline-flex items-center gap-2 bg-transparent text-[#FAF6F0] hover:text-[#C5A880] border border-white/20 hover:border-primary/80 font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                {tr.viewBook}
              </button>
            </div>

          </div>

          {/* Right Brand Stamp Overlay */}
          <div className="hidden lg:flex lg:col-span-4 justify-end relative">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="relative w-44 h-44 flex items-center justify-center rounded-full bg-black/60 border border-[#C5A880]/30 shadow-2xl backdrop-blur-sm"
            >
              <LiloviLogo iconOnly className="w-14 h-14 absolute" />
              
              <svg viewBox="0 0 100 100" className="w-[160px] h-[160px]">
                <path
                  id="circlePathHero"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="font-serif text-[6.5px] font-bold fill-[#C5A880] uppercase tracking-[0.2em]">
                  <textPath href="#circlePathHero">
                    {tr.trustBadge} • {tr.trustBadge} •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Triple Feature Grid representing "What Quality do we offer" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#C5A880]/20 pt-10 mt-16 z-20">
          <div className="space-y-2 group">
            <div className="flex items-center gap-2.5">
              <Needle className="w-4.5 h-4.5 text-[#C5A880] transition-transform duration-300 group-hover:rotate-45" />
              <h4 className="font-serif text-sm tracking-wide text-white font-bold uppercase">
                01 // {tr.metricTitle1}
              </h4>
            </div>
            <p className="font-sans text-[12px] text-neutral-400 leading-relaxed font-light">
              {tr.metricSub1}
            </p>
          </div>

          <div className="space-y-2 group">
            <div className="flex items-center gap-2.5">
              <Flame className="w-4.5 h-4.5 text-[#C5A880] transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-serif text-sm tracking-wide text-white font-bold uppercase">
                02 // {tr.metricTitle2}
              </h4>
            </div>
            <p className="font-sans text-[12px] text-neutral-400 leading-relaxed font-light">
              {tr.metricSub2}
            </p>
          </div>

          <div className="space-y-2 group">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4.5 h-4.5 text-[#C5A880] transition-transform duration-300 group-hover:scale-110" />
              <h4 className="font-serif text-sm tracking-wide text-white font-bold uppercase">
                03 // {tr.metricTitle3}
              </h4>
            </div>
            <p className="font-sans text-[12px] text-neutral-400 leading-relaxed font-light">
              {tr.metricSub3}
            </p>
          </div>
        </div>

      </div>

      {/* Infinite Luxury Marquee Footer strip */}
      <div className="w-full bg-[#111111] py-3.5 border-t border-[#C5A880]/15 overflow-hidden select-none flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 text-[#C5A880] font-sans text-[10.5px] font-bold tracking-[0.2em] uppercase pl-12"
        >
          {tickerItems.concat(tickerItems).map((text, i) => (
            <span key={i} className="flex items-center gap-4">
              <Sparkles className="w-3 h-3 fill-[#C5A880]" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
