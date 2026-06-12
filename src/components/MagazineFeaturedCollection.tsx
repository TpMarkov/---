import React from "react";
import { motion } from "motion/react";
import { Quote, Sparkles, MoveRight, CheckCircle2 } from "lucide-react";

interface MagazineFeaturedCollectionProps {
  lang: "BG" | "EN";
  onTriggerQuote: () => void;
}

export default function MagazineFeaturedCollection({ lang, onTriggerQuote }: MagazineFeaturedCollectionProps) {
  const tr = {
    BG: {
      tag: "АРХИТЕКТУРЕН МОНОГРАФ // ИЗДАНИЕ 2026",
      title: "Легендарният Класически Модел 18 на Фокус",
      subtitle: "Списание 'Архитектурни обеми' представя съвместния ни монограф за прераждането на вечния виенски стол в модерните обществени интериори.",
      quote: "„Ние не просто огъваме букова дървесина под пара. Ние вграждаме европейската дизайн история в неразрушими органични извивки.“",
      designer: "— Георги Лилов, Главен Дизайнер & Технолог",
      bullet1: "Парно Огъване при 100°C",
      bullet1Sub: "Буковият детайл се третира с пара, за да се постигне перфектен овален гръб без шевове и напрежение.",
      bullet2: "Усилващи Странични Дъги",
      bullet2Sub: "Допълнителни огънати цанги в основата предотвратяват разхлабването при интензивно триене на пода.",
      bullet3: "Ратан или Релефен Бук",
      bullet3Sub: "Изберете автентична ратанова плетка за лекота или здрав буков релеф за вечна експлоатация.",
      cta: "Поискайте Фабрични Спецификации",
      secondaryDesc: "Нашият класически виенски стол не съдържа МДФ лепила, пластмасови добавки или евтини вредни смоли. Той е изработен изцяло от дълговечен масивен бук."
    },
    EN: {
      tag: "ARCHITECTURAL MONOGRAPH // 2026 ISSUE",
      title: "The Iconic Bentwood No. 18 in Focus",
      subtitle: "A collaborative editorial monograph showcasing the timeless Thonet tradition and how Lilovi 88 re-engineers classics for prestigious commercial settings.",
      quote: "“We do not merely bend hardwood fibers. We weave European design history and structural permanence into seamless organic curves.”",
      designer: "— Georgi Lilov, Lead Atelier Designer & Master Bender",
      bullet1: "100°C Steam Conditioning",
      bullet1Sub: "Every backrest undergoes intensive steam saturation to yield smooth, continuous bent wood curves without fracturing raw fibers.",
      bullet2: "Double Support Reinforcements",
      bullet2Sub: "Equipped with traditional steam-bent reinforcing arches to protect the structural legs from demanding restaurant floor traction.",
      bullet3: "Woven Cane or Relief Seat",
      bullet3Sub: "Available in signature airy woven rattan cane for high breathability, or robust steam-pressed embossed solid wood.",
      cta: "Configure Project Spec Sheet",
      secondaryDesc: "No volatile composite chemicals or low-grade materials are ever permitted inside our shop. A clean, premium, and reliable contract furniture standard."
    }
  }[lang];

  return (
    <section className="py-24 px-6 bg-[#0D0D0E] text-[#FAF6F0] border-b border-primary/15 relative overflow-hidden" id="magazine-featured">
      {/* Editorial aesthetic frame borders */}
      <div className="absolute top-0 bottom-0 left-6 right-6 border-l border-r border-[#C5A880]/10 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Decorative Grid Numbers */}
        <div className="flex justify-between items-center text-[#C5A880]/50 font-mono text-[10px] uppercase tracking-[0.3em] border-b border-[#C5A880]/15 pb-4 mb-16">
          <span>NO. 18 // Certified Bentwood Specialty</span>
          <span>LILOVI 88 BENTWOOD // 2026</span>
        </div>

        {/* Editorial Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: High-Contrast Large Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[40px] overflow-hidden border border-[#C5A880]/15 shadow-2xl bg-dark h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop"
                alt="Premium European bentwood chair details"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating issue label bottom */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#FAF6F0]/10 backdrop-blur-md p-4 rounded-2xl border border-primary/20 flex justify-between items-center text-xs">
                <span className="font-serif italic text-white">{lang === "BG" ? "Стол Тонет Но. 18" : "Thonet Chair No. 18"}</span>
                <span className="font-mono text-[10px] text-[#C5A880] font-bold">LILOVI 88 Spec</span>
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

            {/* Three Technical Bullet Points */}
            <div className="space-y-6 pt-2">
              <div className="flex gap-4 items-start">
                <div className="p-1 rounded-full bg-primary/20 border border-primary/40 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-bold">{tr.bullet1}</h4>
                  <p className="font-sans text-xs md:text-sm text-neutral-400 font-light mt-0.5">{tr.bullet1Sub}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-1 rounded-full bg-primary/20 border border-primary/40 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-bold">{tr.bullet2}</h4>
                  <p className="font-sans text-xs md:text-sm text-neutral-400 font-light mt-0.5">{tr.bullet2Sub}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-1 rounded-full bg-primary/20 border border-primary/40 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-bold">{tr.bullet3}</h4>
                  <p className="font-sans text-xs md:text-sm text-neutral-400 font-light mt-0.5">{tr.bullet3Sub}</p>
                </div>
              </div>
            </div>

            {/* Explanatory footer description + Action button */}
            <div className="pt-4 border-t border-[#C5A880]/15 space-y-6">
              <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-xl">
                {tr.secondaryDesc}
              </p>

              <div>
                <button
                  onClick={onTriggerQuote}
                  className="group inline-flex items-center gap-3 bg-primary text-black font-sans text-xs font-bold tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-white hover:text-dark transition-all duration-300 transform active:scale-95 cursor-pointer border-none"
                >
                  <span>{tr.cta}</span>
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
