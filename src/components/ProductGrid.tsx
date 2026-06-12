import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { SlidersHorizontal, ArrowUpRight, Grid3X3, Eye } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";

interface ProductGridProps {
  lang: "BG" | "EN";
  onProductClick: (product: Product) => void;
  activeFilter?: CategoryFilter;
  setActiveFilter?: (filter: CategoryFilter) => void;
}

type CategoryFilter = "all" | "classic" | "embossed" | "cross" | "armchair";

interface ProductGridProps {
  lang: "BG" | "EN";
  onProductClick: (product: Product) => void;
  activeFilter?: CategoryFilter;
  setActiveFilter?: (filter: CategoryFilter) => void;
}

export default function ProductGrid({ lang, onProductClick, activeFilter, setActiveFilter }: ProductGridProps) {
  const [localFilter, setLocalFilter] = React.useState<CategoryFilter>("all");

  const filterToUse = activeFilter !== undefined ? activeFilter : localFilter;
  const setFilterToUse = setActiveFilter !== undefined ? setActiveFilter : setLocalFilter;

  const tr = {
    BG: {
      sectionTitle: "Дизайнерски Серии Виенски Столове",
      sectionSub: "Прецизно парно огънати заведения и домове • Селектирайте серия за Вашия интериор",
      all: "Всички",
      classic: "Класик Тонет",
      embossed: "Гравирани серия",
      cross: "Кросбек / Cross",
      armchair: "Премиум & Кресла",
      newBadge: "НОВО",
      viewDetail: "Бърз Преглед",
      starting: "Цени",
      uponRequest: "При запитване",
    },
    EN: {
      sectionTitle: "Handcrafted Viennese Seating",
      sectionSub: "Traditional steam-bent structures engineered to persist for generations • Filter your interior focus",
      all: "All Chairs",
      classic: "Classic Thonet",
      embossed: "Embossed Relief",
      cross: "Cross-Back Series",
      armchair: "Premium & Armchairs",
      newBadge: "NEW IN",
      viewDetail: "Quick View",
      starting: "Pricing",
      uponRequest: "Upon Request",
    },
  }[lang];

  const filteredProducts = PRODUCTS.filter(
    (product) => filterToUse === "all" || product.category === filterToUse
  );

  const filters: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: tr.all },
    { value: "classic", label: tr.classic },
    { value: "embossed", label: tr.embossed },
    { value: "cross", label: tr.cross },
    { value: "armchair", label: tr.armchair },
  ];

  return (
    <section id="products-section" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Section Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border-b border-[#C5A880] pb-1">
              <span className="font-sans text-[10px] tracking-[0.3em] font-extrabold text-primary uppercase">
                [ {lang === "BG" ? "АТЕЛИЕ LILOVI" : "LILOVI ATELIER"} ]
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-dark tracking-tight leading-none">
              {tr.sectionTitle}
            </h2>
            <p className="font-sans text-sm text-neutral-500 max-w-xl font-light">
              {tr.sectionSub}
            </p>
          </div>

          {/* Filtering Tools Row */}
          <div className="flex flex-wrap items-center gap-2 border-t border-b md:border-none border-neutral-100 py-4 md:py-0">
            <div className="flex items-center gap-2 mr-3 text-neutral-500">
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#C5A880]">
                Filters
              </span>
            </div>

            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setFilterToUse(filter.value)}
                className={`font-sans text-[11px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                  filterToUse === filter.value
                    ? "bg-primary border-primary text-dark shadow-lg shadow-primary/20"
                    : "bg-transparent border-neutral-200 text-neutral-600 hover:border-dark hover:text-dark"
                }`}
                aria-label={`Filter by ${filter.label}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Product mesh Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const name = lang === "BG" ? product.nameBG : product.nameEN;
              const desc = lang === "BG" ? product.descriptionBG : product.descriptionEN;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => onProductClick(product)}
                  className="group relative bg-white border border-neutral-100 rounded-[40px] p-5 hover:border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  id={`product-card-${product.id}`}
                >
                  
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-neutral-50 border border-neutral-100">
                    
                    {/* Hover Image Zoom */}
                    <img
                      src={product.image}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />

                    {/* Hover Inspect Banner overlay */}
                    <div className="absolute inset-x-0 bottom-0 py-3.5 bg-dark/70 backdrop-blur-sm flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="font-jura text-[10px] font-bold tracking-widest text-white uppercase">
                        {tr.viewDetail}
                      </span>
                    </div>

                    {/* NEW floating tag */}
                    {product.isNew && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-primary text-[#0d0d0e] font-sans text-[9px] font-extrabold tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-primary/20 border border-white/20">
                        {tr.newBadge}
                      </span>
                    )}

                    {/* Fine dimensions display bottom floating */}
                    <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[9px] font-mono font-bold text-dark border border-neutral-100 px-2.5 py-1 rounded-md shadow-sm">
                      {product.dimensions}
                    </span>

                  </div>

                  {/* Text Details Area */}
                  <div className="mt-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Designer, Title */}
                      <p className="font-sans text-[10px] font-extrabold uppercase text-primary tracking-widest">
                        {product.designer}
                      </p>

                      <div className="flex items-start justify-between gap-4 mt-2">
                        <h3 className="font-serif text-base font-bold text-dark tracking-tight hover:text-primary transition-colors">
                          {name}
                        </h3>
                        <div className="text-right">
                          <span className="block font-sans text-[9px] text-primary/80 tracking-wider uppercase font-bold">
                            {tr.starting}
                          </span>
                          <span className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-tight">
                            {tr.uponRequest}
                          </span>
                        </div>
                      </div>

                      <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light mt-3 line-clamp-2">
                        {desc}
                      </p>
                    </div>

                    {/* Specs / Interaction bar */}
                    <div className="flex items-center justify-between border-t border-neutral-100 pt-4 mt-5">
                      <div className="flex gap-1.5 flex-wrap">
                        {(lang === "BG" ? product.materialsBG : product.materialsEN).slice(0, 2).map((mat, idx) => (
                          <span
                            key={idx}
                            className="font-sans text-[9px] text-neutral-600 font-bold px-2.5 py-1 bg-[#FAF6F0] border border-primary/10 rounded-md uppercase"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>

                      <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-dark group-hover:bg-primary group-hover:border-primary group-hover:text-dark transition-all duration-300 cursor-pointer">
                        <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform" />
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
