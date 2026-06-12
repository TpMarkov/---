import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Award, Sparkles, Shield, Compass, Star } from "lucide-react";

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
      tag: "БЪЛГАРСКИ ПРОИЗВОДИТЕЛ // СЪЗДАДЕНИ ОТ 1996",
      titlePart1: "Премиум виенски столове за",
      titlePart2: "Заведения & Интериорен Дизайн",
      sub: "Повече от 25 години Lilovi 88 произвежда висококачествени дървени столове. Нашата селекция съчетава класически европейски дизайн, дълговечност и занаятчийско майсторство за комерсиални и жилищни интериори.",
      explore: "Вижте Колекцията",
      viewBook: "Запитване за Цени на Едро",
      trustBadge: "100% ПЪЛНО ОГЪНАТ МАСИВЕН БУК",
      qHeader: "СПЕЦИАЛИЗИРАН ПРОИЗВОДИТЕЛ",
      qBody: "Ние сме тясно специализирани в класическата технология за парно огъване на дървесина в тон с Thonet традицията. Нашите столове издържат десетилетия в ресторанти, кафенета и хотели.",
      metricTitle1: "Основани през 1996",
      metricSub1: "Повече от четвърт век занаятчийски опит и десетки хиляди изработени столове",
      metricTitle2: "Масивна Дървесина",
      metricSub2: "Задължително ползване на селектиран бук с висока сушилня плътност",
      metricTitle3: "Гарантирана Якост",
      metricSub3: "Интегрирани усилващи цанги за изключителна здравина при интензивна употреба",
    },
    EN: {
      tag: "BULGARIAN MANUFACTURER // ESTABLISHED 1996",
      titlePart1: "Premium Viennese Chairs for",
      titlePart2: "Hospitality & Interior Design",
      sub: "For over 25 years, Lilovi 88 has been crafting high-quality wooden seating furniture. Our Viennese collection combines classic European design, durability and craftsmanship for commercial and residential interiors.",
      explore: "View Collection",
      viewBook: "Request Wholesale Pricing",
      trustBadge: "100% HAND-BENT SOLID BEECHWOOD",
      qHeader: "SPECIALIST EUROPEAN PRODUCER",
      qBody: "We specialize deeply in steam-bending hardwoods inspired by the legacy of Thonet. Engineered with fortified joints, made to serve fine spaces for decades.",
      metricTitle1: "Est. Since 1996",
      metricSub1: "Over 25 years of manufacturing excellence and thousands of produced items",
      metricTitle2: "Solid Beechwood",
      metricSub2: "Sourced locally with strict environmental guidelines and kiln-dry treatment",
      metricTitle3: "Heavy Duty Grade",
      metricSub3: "Equipped with dual structural reinforcement arches for high-traffic environments",
    },
  }[lang];

  // Parallax offsets
  const backgroundY = scrollY * 0.35;
  const contentY = scrollY * -0.08;

  // Cinematic horizontal text marquee entries
  const tickerItems = Array(12).fill(`• VIENNESE CHAIR SPECIALIST • LILOVI 88 • BENTWOOD MANUFACTURER`);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0d0d0e] text-[#FAF6F0] pt-24 md:pt-28" id="hero-classic">
      
      {/* Cinematic Layer 1: Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full transform transition-transform duration-75 will-change-transform"
        style={{ 
          transform: `translateY(${backgroundY}px)` ,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop" 
          alt="Premium Viennese Chairs in beautiful cafe interior" 
          className="w-full h-full object-cover object-center filter brightness-[0.35] scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {/* Cinematic Layer 2: Complex Golden & Deep Shadow gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0e]/90 via-transparent to-[#0d0d0e] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-[#0d0d0e]/85 z-10 pointer-events-none" />

      {/* Cinematic Layer 3: Main Editorial Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex-grow flex flex-col justify-center z-20">
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-transform duration-75 will-change-transform"
          style={{ transform: `translateY(${contentY}px)` }}
        >
          {/* Main Titles Left Column */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-[#C5A880]/30 px-4 py-2 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-[#C5A880] uppercase">
                {tr.tag}
              </span>
            </div>

            {/* Huge Display Typography Header */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05]">
                <span className="block italic text-neutral-300 font-light text-2xl sm:text-4xl md:text-5xl mb-2">{tr.titlePart1}</span>
                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] via-[#E5D5B8] to-white">
                  {tr.titlePart2}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-[15px] md:text-[17px] leading-relaxed text-neutral-300/95 max-w-[580px] font-light">
                {tr.sub}
              </p>
            </div>

            {/* Asymmetrical Quote Callout Box addressing "What Makes Us Different" */}
            <div className="p-6 md:p-8 bg-black/50 backdrop-blur-md border-l-2 border-[#C5A880] rounded-r-3xl max-w-2xl space-y-3 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                <Award className="w-24 h-24 text-primary" />
              </div>
              <h3 className="font-serif text-sm tracking-widest text-[#C5A880] uppercase font-bold flex items-center gap-2">
                <Star className="w-4 h-4 fill-primary/30" />
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
                className="group relative inline-flex items-center gap-3 bg-primary text-black font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-white hover:text-[#0d0d0e] transition-all duration-300 shadow-[0_4px_30px_rgba(197,168,128,0.25)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.25)] transform active:scale-95 cursor-pointer border-none"
              >
                <span>{tr.explore}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("quote-builder-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 bg-transparent text-[#FAF6F0] hover:text-[#C5A880] border border-white/20 hover:border-[#C5A880]/80 font-sans text-[11px] md:text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer"
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
              <div className="flex flex-col items-center justify-center text-center absolute z-15">
                <span className="font-serif text-lg font-bold text-[#C5A880] tracking-wider">88</span>
                <span className="text-[7px] tracking-widest text-neutral-400 font-sans font-bold uppercase">LILOVI</span>
              </div>
              
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
              <Compass className="w-4.5 h-4.5 text-[#C5A880] transition-transform duration-300 group-hover:rotate-45" />
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
              <Sparkles className="w-4.5 h-4.5 text-[#C5A880] transition-transform duration-300 group-hover:scale-110" />
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
