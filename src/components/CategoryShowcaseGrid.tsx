import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Layers, Box, Coffee, Briefcase } from "lucide-react";

interface CategoryShowcaseGridProps {
  lang: "BG" | "EN";
  onSelectCategory: (category: "all" | "living" | "dining" | "bedroom" | "office") => void;
}

export default function CategoryShowcaseGrid({ lang, onSelectCategory }: CategoryShowcaseGridProps) {
  const tr = {
    BG: {
      tag: "АКЦЕНТНИ ИНТЕРИОРИ",
      title: "Архитектурни Категории",
      subtitle: "Пространства, създадени с художествен замисъл. Подредени по функция, занаятчийска прецизност и обем.",
      explore: "Разгледай категорията",
      living: "Дневна & Салон",
      livingSub: "Скулптурни фотьойли, анилинова кожа и акценти с монументално тегло.",
      dining: "Трапезария & Резиденция",
      diningSub: "Селектиран див дъб, масивни плотове и занаятчийски двойни сглобки.",
      bedroom: "Спалня & Будоар",
      bedroomSub: "Левитиращи рамки, италианско букле и детайли за истински покой.",
      office: "Кабинет & Библиотека",
      officeSub: "Овъглен ясен, скрити структури за кабели и ергономичност.",
    },
    EN: {
      tag: "INTERIOR ARCHETYPE",
      title: "Architectural Categories",
      subtitle: "Spaces designed with fine-art composition. Curated by layout utility, organic warmth, and density.",
      explore: "Explore Collection",
      living: "Living & Salon Suite",
      livingSub: "Sculptural loungers, aniline leather sofas & focal pieces with physical poise.",
      dining: "Dining & Residence",
      diningSub: "Select wild oak centerpieces, heavy timber tops & organic wax joints.",
      bedroom: "Sleeping & Sleep Chamber",
      bedroomSub: "Hover-effect bed frames, custom bouclé structures & sensory rest design.",
      office: "Workspace & Library",
      officeSub: "Shou Sugi Ban charred wood study desks, flush drawers & clean cord integration.",
    },
  }[lang];

  const categories = [
    {
      id: "living" as const,
      title: tr.living,
      sub: tr.livingSub,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      tag: "01 // SALON",
      icon: <Coffee className="w-5 h-5 text-primary" />,
    },
    {
      id: "dining" as const,
      title: tr.dining,
      sub: tr.diningSub,
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
      tag: "02 // RESIDENCE",
      icon: <Layers className="w-5 h-5 text-primary" />,
    },
    {
      id: "bedroom" as const,
      title: tr.bedroom,
      sub: tr.bedroomSub,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop",
      tag: "03 // CHAMBER",
      icon: <Box className="w-5 h-5 text-primary" />,
    },
    {
      id: "office" as const,
      title: tr.office,
      sub: tr.officeSub,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop",
      tag: "04 // STUDIOLO",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
    },
  ];

  const handleClick = (catId: "living" | "dining" | "bedroom" | "office") => {
    onSelectCategory(catId);
    const element = document.getElementById("products-section");
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 px-6 bg-[#FAF6F0] border-b border-primary/10 relative overflow-hidden" id="category-showcase">
      {/* Subtle organic light gold blur dots in the margins to avoid tech-larping */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
              {tr.tag}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-dark">
            {tr.title}
          </h2>
          <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl font-light">
            {tr.subtitle}
          </p>
        </div>

        {/* Dynamic Bento category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => handleClick(cat.id)}
              className="group relative h-[380px] md:h-[420px] rounded-[36px] overflow-hidden bg-dark text-white cursor-pointer border border-[#C5A880]/15 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Background elegant zoomable image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.55] group-hover:brightness-[0.45]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sophisticated Golden Rim border animation */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/40 rounded-[36px] transition-all duration-500 m-3 pointer-events-none" />

              {/* Content Box top section */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.25em] text-primary bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A880]/25">
                  {cat.tag}
                </span>
                <div className="bg-black/60 backdrop-blur-md p-2.5 rounded-full border border-[#C5A880]/20">
                  {cat.icon}
                </div>
              </div>

              {/* Content Box bottom details */}
              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-3">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
                  {cat.sub}
                </p>

                <div className="pt-2 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                  <span>{tr.explore}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Dark Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none opacity-80" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
