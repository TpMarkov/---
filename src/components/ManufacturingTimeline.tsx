import React from "react";
import { motion } from "motion/react";
import { Forest, Droplets, Hammer, Sparkles, Compass, ShieldCheck, TreePine, Flame, Sparkle } from "lucide-react";

interface ManufacturingTimelineProps {
  lang: "BG" | "EN";
}

export default function ManufacturingTimeline({ lang }: ManufacturingTimelineProps) {
  const tr = {
    BG: {
      tag: "ЗАНАЯТЧИЙСКИ ЦИКЪЛ // ПРЕПОРЪЧАНО ОТ АРХИТЕКТИ",
      title: "Пътят на Култивираната Форма",
      subtitle: "От селектираното вековно стебло до вашия архитектурен дом. Всяка стъпка е подчинена на вечността, устойчивостта и абсолютната геометрична прецизност.",
      step1: "01 // Селекция на Стеблото",
      step1Title: "Екологичен Добив",
      step1Desc: "Избираме само повалени от ветрове или сертифицирани за контролиран добив дъбове на възраст над 120 години от Родопите и Стара Планина. Чисти суровини с невероятен характер.",
      step2: "02 // Сол-Сушене & Зреене",
      step2Title: "Абсолютна Стабилност",
      step2Desc: "Осигуряваме 18 месеца естествено атмосферно сушене на открито, последвано от прецизен вакуумен цикъл. Това премахва вътрешното напрежение в дървесните влакна завинаги.",
      step3: "03 // Ръчно Напасване",
      step3Title: "Дървени Сглобки",
      step3Desc: "Нашите майстори скосяват и напасват сглобки с т.нар. сляпо гнездо и дървени дюбели. Нулево присъствие на бързоръждясващи метални винтове или химически консерванти.",
      step4: "04 // Запечатване С Восък",
      step4Title: "Дишаща Био Защита",
      step4Desc: "Полираме трикратно на ръка. Разтриваме комбинация от ленено масло, карнаубски восък и пречистен пчелен восък. Дървото остава антистатично и ухае на девствена природа.",
      trustHeader: "Защо да ни се доверите?",
      trustBody: "За разлика от индустриалните фабрики, ние не форсираме сушенето, не използваме евтини МДФ лепила, отделящи карциногени, и не маскираме дефекти с оцветени лакове. Нашите мебели са живи скулптури, които дишат заедно с вас.",
    },
    EN: {
      tag: "ARTISANAL CYCLE // SPECIFIED BY DESIGNERS",
      title: "Path of Cultivated Raw Form",
      subtitle: "From selected centuries-old logs to your architectural sanctuary. Every operational milestone is bound to longevity, structural resonance, and sheer geometric poise.",
      step1: "01 // Hardwood Selection",
      step1Title: "Ethical Harvest",
      step1Desc: "We selectively isolate mature European wild oak and ash specimens exceeding 120 years of lifespan, harvested with meticulous forest management standards to support ecology.",
      step2: "02 // Atmos-Air Seasoning",
      step2Title: "Timber Stress Relief",
      step2Desc: "Our raw slabs undergo a generous 18-month open-air seasoning, followed by low-intensity vacuum conditioning. This entirely prevents bowing, warping, and micro-fractures.",
      step3: "03 // Master Wood Joinery",
      step3Title: "No Metal Fasteners",
      step3Desc: "Our artisans meticulously hand-mate double mortise-and-tenon connections coupled with organic oak dowels. We completely eschew standard ferrous screws or volatile industrial glues.",
      step4: "04 // Hand-Rubbed Beeswax",
      step4Title: "Satin Bio-Seal",
      step4Desc: "A triple hand-rubbed finish of organic linseed oils combined with pure beeswax. The raw wood fibers remain porous and breathable, maintaining natural indoor anti-static properties.",
      trustHeader: "Why buy from us?",
      trustBody: "We do not mass-produce, we do not force-dry timber using moisture shocks, and we never coat our surface details with toxic, blocking polyurethane varnishes. Our pieces are organic sculptures designed to acquire heirloom value.",
    },
  }[lang];

  const steps = [
    {
      num: tr.step1,
      title: tr.step1Title,
      desc: tr.step1Desc,
      icon: <TreePine className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1546482502-04417980ee90?q=80&w=600&auto=format&fit=crop", // Lumber trunk wood focus
    },
    {
      num: tr.step2,
      title: tr.step2Title,
      desc: tr.step2Desc,
      icon: <Flame className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", // Cozy warm interior/timber prep focus
    },
    {
      num: tr.step3,
      title: tr.step3Title,
      desc: tr.step3Desc,
      icon: <Hammer className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop", // Carpentry details focus
    },
    {
      num: tr.step4,
      title: tr.step4Title,
      desc: tr.step4Desc,
      icon: <Sparkle className="w-5 h-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600&auto=format&fit=crop", // Polishing focus
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
              <ShieldCheck className="w-4.5 h-4.5" />
              {tr.trustHeader}
            </h4>
            <p className="font-sans text-[11.5px] leading-relaxed text-neutral-300 font-light">
              {tr.trustBody}
            </p>
          </div>
        </div>

        {/* Timeline Grid (4 steps columns) with staggered scroll effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle horizontal connective line for desktop */}
          <div className="absolute top-[165px] left-0 right-0 h-[1.5px] bg-primary/10 hidden lg:block z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative space-y-6 flex flex-col group z-10"
            >
              {/* Step Image and Icon */}
              <div className="relative h-48 rounded-2xl overflow-hidden border border-[#C5A880]/10 shadow-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.6]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating absolute counter */}
                <div className="absolute top-4 left-4 bg-[#0D0D0E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A880]/20 text-[10px] font-mono uppercase tracking-wider text-primary">
                  {step.num}
                </div>

                {/* Floating bottom right Icon */}
                <div className="absolute bottom-4 right-4 bg-primary text-black p-2 rounded-full border border-black/20 shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {step.icon}
                </div>
              </div>

              {/* Step text detail area */}
              <div className="space-y-2.5 pl-1">
                <h3 className="font-serif text-[18px] font-bold text-white tracking-wide group-hover:text-primary transition-colors flex items-center gap-2">
                  {step.title}
                </h3>
                <p className="font-sans text-[11.5px] text-neutral-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
