import React from "react";
import { motion } from "motion/react";
import { TreePine, Hammer, Sparkles, ShieldCheck, Box, ThumbsUp, Coffee, Layers } from "lucide-react";

interface ManufacturingTimelineProps {
  lang: "BG" | "EN";
}

export default function ManufacturingTimeline({ lang }: ManufacturingTimelineProps) {
  const tr = {
    BG: {
      tag: "ПРАКТИЧЕСКИ ПРЕДИМСТВА // ПРОИЗВОДСТВО ОТ 1996 Г.",
      title: "Партньор за Вашия Интериорен Проект",
      subtitle: "Lilovi 88 е български производител, специализиран в огъната мебел от масивно дърво. Ние предлагаме пълен контрол над суровините, производствения капацитет и крайната изработка.",
      trustHeader: "Защо да се доверите на фабриката ни?",
      trustBody: "За разлика от вносителите и прекупвачите, ние контролираме жизнения цикъл на всеки стол — от селектираната обла дървесина до последната защитна вакса. Проектираме заведения с гарантиран дългосрочен бюджет.",
      benefit1: "Масивен Бук",
      benefit1Title: "Конструкция от Бук",
      benefit1Desc: "Използваме само най-висококачествен планински бук. Неговата плътна фиброструктура осигурява гъвкавост и неразрушимост при парно огъване.",
      benefit2: "Якост & Търговски Клас",
      benefit2Title: "Търговска издръжливост",
      benefit2Desc: "Всички съединения се сглобяват по класическия виенски метод Thonet, осигурявайки издръжливост при високо механично натоварване в ресторанти.",
      benefit3: "Персонални Байцове",
      benefit3Title: "Цветови Финиши & Байц",
      benefit3Desc: "Предлагаме богат каталог от байцове за дървени елементи, съобразени с актуалните мостри и каталози на водещи мебелни дизайнери.",
      benefit4: "Тапицерия & Обеми",
      benefit4Title: "Custom Тапицерия & Едро",
      benefit4Desc: "Осигуряваме богата персонализация със сертифицирани дамаски, избор на кожа и готовност за големи серийни поръчки на цени от производител.",
    },
    EN: {
      tag: "MANUFACTURING ADVANTAGE // FURNITURE MAKERS SINCE 1996",
      title: "Built by Furniture Makers Since 1996",
      subtitle: "Lilovi 88 is a Bulgarian furniture manufacturer specializing in solid wood seating furniture. We operate our own facility, offering absolute control over timber selection, customization, and bulk dispatch.",
      trustHeader: "Why partner directly with us?",
      trustBody: "We skip middlemen entirely. Every bentwood chair is manufactured in-house following historical European standards, ensuring commercial hospitality longevity, strict quality assurance, and direct wholesale pricing.",
      benefit1: "01 // MATERIAL",
      benefit1Title: "Solid Beechwood",
      benefit1Desc: "Crafted exclusively using premium mountain beechwood. Its dense organic fiber structure allows flawless steam-bending curves without structural weak spots.",
      benefit2: "02 // STRETCH",
      benefit2Title: "Commercial Durability",
      benefit2Desc: "Built to perform in high-traffic environments. All joints are constructed with proven Thonet dual structural reinforcement arches to resist constant load.",
      benefit3: "03 // FINISH",
      benefit3Title: "Custom Stains & Colors",
      benefit3Desc: "Choose from an extensive selection of classic and contemporary stains, bio-friendly oils, and protective lacquers to match your precise spatial palette.",
      benefit4: "04 // VOLUME",
      benefit4Title: "Upholstery & Bulk Orders",
      benefit4Desc: "Customize with thousands of high-durability fabrics or premium aniline leathers. Scaled to handle major hospitality, cafe, and wholesale requirements.",
    },
  }[lang];

  const benefits = [
    {
      num: tr.benefit1,
      title: tr.benefit1Title,
      desc: tr.benefit1Desc,
      icon: <TreePine className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1546482502-04417980ee90?q=80&w=600&auto=format&fit=crop",
    },
    {
      num: tr.benefit2,
      title: tr.benefit2Title,
      desc: tr.benefit2Desc,
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
    },
    {
      num: tr.benefit3,
      title: tr.benefit3Title,
      desc: tr.benefit3Desc,
      icon: <Layers className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop",
    },
    {
      num: tr.benefit4,
      title: tr.benefit4Title,
      desc: tr.benefit4Desc,
      icon: <Box className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0D0D0E] text-white border-b border-primary/10 relative overflow-hidden" id="process-timeline-section">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-[#C5A880]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
                {tr.tag}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              {tr.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-neutral-400 font-light max-w-2xl leading-relaxed">
              {tr.subtitle}
            </p>
          </div>

          {/* Asymmetrical "Why Trust Us?" Block */}
          <div className="lg:col-span-4 p-6 bg-white/5 backdrop-blur-md border border-primary/20 rounded-[24px] space-y-2.5">
            <h4 className="font-serif text-base text-[#C5A880] font-bold flex items-center gap-2">
              <ThumbsUp className="w-4.5 h-4.5" />
              {tr.trustHeader}
            </h4>
            <p className="font-sans text-[11.5px] leading-relaxed text-neutral-300 font-light">
              {tr.trustBody}
            </p>
          </div>
        </div>

        {/* Timeline Grid (4 premium benefit cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle horizontal connective line for desktop */}
          <div className="absolute top-[165px] left-0 right-0 h-[1.5px] bg-primary/10 hidden lg:block z-0" />

          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative space-y-6 flex flex-col group z-10"
              id={`benefit-card-${idx}`}
            >
              {/* Step Image and Icon */}
              <div className="relative h-48 rounded-2xl overflow-hidden border border-[#C5A880]/10 shadow-lg bg-neutral-900">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.6]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating absolute tag */}
                <div className="absolute top-4 left-4 bg-[#0D0D0E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A880]/20 text-[10px] font-mono uppercase tracking-wider text-primary">
                  {benefit.num}
                </div>

                {/* Floating bottom right Icon */}
                <div className="absolute bottom-4 right-4 bg-primary text-[#0d0d0e] p-2 rounded-full border border-black/20 shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {benefit.icon}
                </div>
              </div>

              {/* Step text detail area */}
              <div className="space-y-2.5 pl-1">
                <h3 className="font-serif text-[18px] font-bold text-white tracking-wide group-hover:text-primary transition-colors flex items-center gap-2">
                  {benefit.title}
                </h3>
                <p className="font-sans text-[11.5px] text-neutral-400 leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
