import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Hotel, Coffee, Utensils, PenTool } from "lucide-react";

interface CategoryShowcaseGridProps {
  lang: "BG" | "EN";
  onSelectCategory: (category: "all" | "classic" | "embossed" | "cross" | "armchair") => void;
}

export default function CategoryShowcaseGrid({ lang, onSelectCategory }: CategoryShowcaseGridProps) {
  const tr = {
    BG: {
      tag: "ПРИЛОЖЕНИЯ & ВДЪХНОВЕНИЕ",
      title: "Проектирани за Изискани Пространства",
      subtitle: "Нашите виенски столове са избор на стотици заведения, реномирани хотели, уютни кафенета и престижни архитектурни проекти в цяла Европа.",
      explore: "Виж съвместими модели",
      restaurants: "Ресторанти",
      restaurantsSub: "Издръжлива конструкция от масивен бук и класически силует за първокласно хранене.",
      hotels: "Хотели",
      hotelsSub: "Аристократични модели с подлакътници за лоби зони, апартаменти и заседателни зали.",
      cafes: "Кафенета & Бистра",
      cafesSub: "Леки, маневрени и непреходни виенски класики за динамична ежедневна атмосфера.",
      interiors: "Интериорни Проекти",
      interiorsSub: "Ръчно гравирани занаятчийски издания за изтънчени архитектурни концепции и частни резиденции.",
    },
    EN: {
      tag: "SPATIAL EXCELLENCE",
      title: "Designed for Beautiful Spaces",
      subtitle: "Our Viennese chairs are the ultimate choice for fine dining, design-driven hotels, cozy local bistros, and sophisticated custom residential estates across Europe.",
      explore: "Browse Corresponding Models",
      restaurants: "Restaurants",
      restaurantsSub: "Heavy-duty solid beechwood frames and timeless silhouettes built for high-cuisine salons.",
      hotels: "Hotels & Lodgings",
      hotelsSub: "Prestigious armchairs and lounge versions for grand lobbies, suites, and premium event halls.",
      cafes: "Cafés & Bistros",
      cafesSub: "Lightweight, maneuverable, and iconic bentwood chairs bringing charm to everyday spaces.",
      interiors: "Interior Design Projects",
      interiorsSub: "Custom stained, embossed, and crafted furniture editions for discerning architects and creative concepts.",
    },
  }[lang];

  const spaces = [
    {
      id: "classic" as const,
      title: tr.restaurants,
      sub: tr.restaurantsSub,
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
      tag: "01 // SALONS & DINING",
      icon: <Utensils className="w-5 h-5 text-primary" />,
    },
    {
      id: "armchair" as const,
      title: tr.hotels,
      sub: tr.hotelsSub,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      tag: "02 // LOBBY & RESIDENCE",
      icon: <Hotel className="w-5 h-5 text-primary" />,
    },
    {
      id: "cross" as const,
      title: tr.cafes,
      sub: tr.cafesSub,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
      tag: "03 // CAFE & BISTRO",
      icon: <Coffee className="w-5 h-5 text-primary" />,
    },
    {
      id: "embossed" as const,
      title: tr.interiors,
      sub: tr.interiorsSub,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      tag: "04 // DESIGN LABS",
      icon: <PenTool className="w-5 h-5 text-primary" />,
    },
  ];

  const handleClick = (spaceId: "classic" | "embossed" | "cross" | "armchair") => {
    onSelectCategory(spaceId);
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
    <section className="py-24 px-6 bg-[#FAF6F0] border-b border-primary/10 relative overflow-hidden" id="application-showcase">
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

        {/* Bento Space Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {spaces.map((space, idx) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => handleClick(space.id)}
              className="group relative h-[380px] md:h-[420px] rounded-[36px] overflow-hidden bg-dark text-white cursor-pointer border border-[#C5A880]/15 shadow-md hover:shadow-2xl transition-all duration-500"
              id={`application-card-${space.id}`}
            >
              {/* Background elegant zoomable image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.55] group-hover:brightness-[0.45]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sophisticated Golden Rim border animation */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/40 rounded-[36px] transition-all duration-500 m-3 pointer-events-none" />

              {/* Content Box top section */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.25em] text-primary bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A880]/25">
                  {space.tag}
                </span>
                <div className="bg-black/60 backdrop-blur-md p-2.5 rounded-full border border-[#C5A880]/20">
                  {space.icon}
                </div>
              </div>

              {/* Content Box bottom details */}
              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-3">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:text-primary transition-colors">
                  {space.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
                  {space.sub}
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
