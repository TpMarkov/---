import React from "react";
import { motion } from "motion/react";
import { Quote, Sparkles, MoveRight, HelpCircle, CheckCircle2 } from "lucide-react";

interface MagazineFeaturedCollectionProps {
  lang: "BG" | "EN";
  onTriggerQuote: () => void;
}

export default function MagazineFeaturedCollection({ lang, onTriggerQuote }: MagazineFeaturedCollectionProps) {
  const tr = {
    BG: {
      tag: "АРХИТЕКТУРЕН МОНОГРАФ // ИЗДАНИЕ 2026",
      title: "Колекция 'Pure Form' На Фокус",
      subtitle: "Списание 'Архитектурни обеми' представя съвместния ни монограф за чистия български занаят и вечните домашни ценности.",
      quote: "„Ние не просто правим мебели. Ние спираме времето в плътността на естествения вековен дъб.“",
      designer: "— Георги Лилов, Главен Дизайнер & Скулптор",
      bullet1: "Мониторинг на Влажността",
      bullet1Sub: "Дървесината зрее до достигане на прецизните 8% влажност за максимална устойчивост.",
      bullet2: "Акустични Профили",
      bullet2Sub: "Дебелите 4см плотове поглъщат нежеланите отражения на звука в просторните модерни салони.",
      bullet3: "Тактилност & Сензитивност",
      bullet3Sub: "Всяка повърхност е полирана трикратно до усещане за кадифен органичен допир.",
      cta: "Архитектурна Спецификация",
      secondaryDesc: "Нашите мебели не съдържат ПДЧ, формалдехидни смоли или изкуствени пластмасови покрития. Те са естествен, здравословен елемент от вашата семейна история."
    },
    EN: {
      tag: "ARCHITECTURAL MONOGRAPH // 2026 ISSUE",
      title: "The 'Pure Form' Collection Spread",
      subtitle: "A collaborative editorial study detailing Bulgarian artisanal woodcraft, organic timber structures, and domestic presence.",
      quote: "“We do not merely join lumber components together. We arrest time within the heavy density of living solid oak.”",
      designer: "— Georgi Lilov, Lead Atelier Designer & Carver",
      bullet1: "8% Fiber Equilibrium",
      bullet1Sub: "Every structural slab is monitored to a precise 8% moisture index to completely halt movement.",
      bullet2: "Acoustic Glare Absorption",
      bullet2Sub: "Extra-thick 40mm timber tabletops naturally damp acoustic bounce inside high-ceiling living zones.",
      bullet3: "Tactile Satin Perfection",
      bullet3Sub: "Triple hand-planing until raw textures mimic the velvety softness of organic material warmth.",
      cta: "Configure Custom Specification",
      secondaryDesc: "Completely zero composite boards, toxic formaldehydes, or micro-plastic paints. A safe, durable, and solid investment representing genuine multigenerational European design."
    }
  }[lang];

  return (
    <section className="py-24 px-6 bg-[#0D0D0E] text-[#FAF6F0] border-b border-primary/15 relative overflow-hidden" id="magazine-featured">
      {/* Editorial aesthetic frame borders */}
      <div className="absolute top-0 bottom-0 left-6 right-6 border-l border-r border-[#C5A880]/10 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Decorative Grid Numbers */}
        <div className="flex justify-between items-center text-[#C5A880]/50 font-mono text-[10px] uppercase tracking-[0.3em] border-b border-[#C5A880]/15 pb-4 mb-16">
          <span>NO. 08 // Bespoke Monograph Edition</span>
          <span>LILOVI WOODWORK // 2026</span>
        </div>

        {/* Editorial Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: High-Contrast Large Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[40px] overflow-hidden border border-[#C5A880]/15 shadow-2xl bg-dark h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop"
                alt="Linea Walnut sideboard close-up"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating issue label bottom */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#FAF6F0]/10 backdrop-blur-md p-4 rounded-2xl border border-primary/20 flex justify-between items-center text-xs">
                <span>{lang === "BG" ? "Linea Орехов Скрин" : "Linea Walnut Credenza"}</span>
                <span className="font-mono text-[10px] text-[#C5A880] font-bold">€3,100</span>
              </div>
            </div>
          </div>

          {/* Column Right: Elegant Editorial Content & Bullet Detailings (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[10.5px] font-bold tracking-[0.25em] text-[#C5A880] uppercase block">
                {tr.tag}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                {tr.title}
              </h2>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
                {tr.subtitle}
              </p>
            </div>

            {/* Giant Graphic Quote Block */}
            <div className="p-8 bg-white/5 border border-primary/10 rounded-[32px] space-y-4 relative overflow-hidden shadow-inner">
              <Quote className="w-12 h-12 text-[#C5A880]/15 absolute top-4 left-4" />
              <p className="font-serif text-lg md:text-xl text-neutral-200 tracking-tight leading-relaxed pl-6 relative z-10">
                {tr.quote}
              </p>
              <p className="font-sans text-xs text-[#C5A880] tracking-wider pl-6 italic font-medium">
                {tr.designer}
              </p>
            </div>

            {/* Structured Value Proposition Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#C5A880]/15">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <h4 className="font-serif text-xs uppercase text-white font-bold tracking-wider">
                    {tr.bullet1}
                  </h4>
                </div>
                <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                  {tr.bullet1Sub}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <h4 className="font-serif text-xs uppercase text-white font-bold tracking-wider">
                    {tr.bullet2}
                  </h4>
                </div>
                <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                  {tr.bullet2Sub}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <h4 className="font-serif text-xs uppercase text-white font-bold tracking-wider">
                    {tr.bullet3}
                  </h4>
                </div>
                <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                  {tr.bullet3Sub}
                </p>
              </div>

            </div>

            {/* Secondary safety description & CTA button to prompt the quote form */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="font-sans text-[11.5px] text-neutral-400 leading-relaxed max-w-md font-light">
                {tr.secondaryDesc}
              </p>

              <button
                onClick={onTriggerQuote}
                className="inline-flex items-center gap-2 bg-primary text-black font-sans text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white hover:text-dark transition-all duration-300 transform active:scale-95 cursor-pointer self-start sm:self-center border-none"
              >
                <span>{tr.cta}</span>
                <MoveRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
