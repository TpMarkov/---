import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { CATALOGUE_PAGES, PRODUCTS } from "../data";
import { Product } from "../types";

interface CatalogueFlipBookProps {
  lang: "BG" | "EN";
  onProductClick: (product: Product) => void;
}

export default function CatalogueFlipBook({ lang, onProductClick }: CatalogueFlipBookProps) {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const [flippedDirection, setFlippedDirection] = React.useState<"next" | "prev" | null>(null);

  const activePage = CATALOGUE_PAGES[currentPageIndex];

  const tr = {
    BG: {
      sectionTitle: "Дигитален Двустранен Каталог",
      sectionSub: "Интерактивно 3D изживяване • Разлистете книгата, за да усетите пространството",
      prev: "Предишна",
      next: "Следваща",
      page: "Страница",
      featured: "Проектирани мебели в тази селекция:",
      viewItem: "Преглед на модела",
      designIdea: "Дизайнерска Бележка",
    },
    EN: {
      sectionTitle: "Interactive Twin-Spread Catalogue",
      sectionSub: "3D Digital Experience • Flip through pages to inspect curated modern environments",
      prev: "Prev Page",
      next: "Next Page",
      page: "Page",
      featured: "Featured bespoke furnishings in this setting:",
      viewItem: "Quick View Product",
      designIdea: "Curatorial Statement",
    },
  }[lang];

  const handleNext = () => {
    if (currentPageIndex < CATALOGUE_PAGES.length - 1) {
      setFlippedDirection("next");
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setFlippedDirection("prev");
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  // Find featured products for the active page
  const featuredProducts = PRODUCTS.filter((p) =>
    activePage.featuredProductIds.includes(p.id)
  );

  return (
    <section id="catalogue-section" className="bg-warm-bg py-20 px-6 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-primary bg-primary/10 rounded-full px-4 py-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-jura text-[10px] tracking-[0.25em] font-extrabold uppercase">
              *** LIVE PREVIEW SHOWCASE ***
            </span>
          </div>
          <h2 className="font-jura text-3xl md:text-4xl font-extrabold text-dark uppercase tracking-tight">
            {tr.sectionTitle}
          </h2>
          <p className="font-jura text-[12px] tracking-wider text-brand-gray uppercase">
            {tr.sectionSub}
          </p>
        </div>

        {/* 3D Book Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left/Right Controls with Book Spine */}
          <div className="lg:col-span-8 flex flex-col items-center">
            
            <div className="relative w-full aspect-[16/10] bg-[#EAE3D5] rounded-3xl p-3 md:p-5 shadow-2xl border border-[#D5CDBC] max-w-4xl overflow-hidden">
              {/* Inner shadows to look like realistic book texture */}
              <div className="absolute inset-y-0 left-1/2 w-[3px] bg-gradient-to-r from-black/40 via-black/15 to-transparent z-20 shadow-lg" />
              
              {/* Book Spine Highlight Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none z-10" />

              {/* Spread Canvas */}
              <div className="w-full h-full bg-[#FAF7F0] rounded-2xl border border-white/50 flex shadow-inner relative overflow-hidden">
                
                {/* Left Page (Static information block or landscape view) */}
                <div className="w-1/2 h-full p-4 md:p-8 flex flex-col justify-between border-r border-[#ECE5D8] bg-[#FAF7F0] relative">
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5 font-sans text-[10px] font-extrabold tracking-widest text-primary uppercase">
                      <Sparkles className="w-3 h-3 fill-primary" />
                      <span>{tr.designIdea}</span>
                    </div>

                    <h3 className="font-jura text-lg md:text-2xl font-extrabold text-dark tracking-tight uppercase leading-snug">
                      {lang === "BG" ? activePage.titleBG : activePage.titleEN}
                    </h3>

                    <p className="font-sans text-[11px] md:text-sm text-neutral-500 leading-relaxed font-normal">
                      {lang === "BG" ? activePage.descriptionBG : activePage.descriptionEN}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>LILOVI CATALOGUE</span>
                    <span>© 2024–2025</span>
                  </div>

                  {/* Left Side Page Number */}
                  <div className="absolute bottom-4 left-6 font-jura text-xs font-bold text-neutral-400">
                    {activePage.pageNumber * 2 - 1}
                  </div>
                </div>

                {/* Right Page (Image page which can flip in/out) */}
                <div className="w-1/2 h-full relative bg-[#FAF7F0] overflow-hidden">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPageIndex}
                      initial={{
                        rotateY: flippedDirection === "next" ? -90 : 90,
                        opacity: 0,
                      }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{
                        rotateY: flippedDirection === "next" ? 90 : -90,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        transformOrigin: "left center",
                        transformStyle: "preserve-3d",
                      }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={activePage.image}
                        alt="Catalogue Page Scene"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Realistic paper highlight glare reflection */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/5 pointer-events-none" />

                      {/* Right Side Page Number */}
                      <div className="absolute bottom-4 right-6 font-jura text-xs font-bold text-neutral-400">
                        {activePage.pageNumber * 2}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>

              </div>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentPageIndex === 0}
                className="p-3.5 rounded-full bg-white border border-neutral-200 text-dark disabled:opacity-30 disabled:pointer-events-none hover:text-primary transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous catalogue page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-jura text-xs font-bold tracking-[0.2em] text-dark uppercase">
                {tr.page} [ {currentPageIndex + 1} / {CATALOGUE_PAGES.length} ]
              </span>

              <button
                onClick={handleNext}
                disabled={currentPageIndex === CATALOGUE_PAGES.length - 1}
                className="p-3.5 rounded-full bg-white border border-neutral-200 text-dark disabled:opacity-30 disabled:pointer-events-none hover:text-primary transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next catalogue page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Info Block - list of products inside this spread - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-neutral-200/80 p-6 md:p-8 rounded-[40px] shadow-xl relative top-0 hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-jura text-xs font-bold tracking-widest text-[#E85B5B] uppercase mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#E85B5B] rounded-full animate-ping" />
                <span>{tr.featured}</span>
              </h4>

              <div className="space-y-4">
                {featuredProducts.map((p) => {
                  const pName = lang === "BG" ? p.nameBG : p.nameEN;
                  return (
                    <div
                      key={p.id}
                      className="group flex gap-4 p-3 hover:bg-neutral-50 rounded-2xl border border-neutral-100 transition-all cursor-pointer"
                      onClick={() => onProductClick(p)}
                    >
                      <img
                        src={p.image}
                        alt={pName}
                        className="w-14 h-14 object-cover rounded-xl border border-neutral-200"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div className="space-y-0.5">
                          <h5 className="font-jura text-xs font-extrabold text-dark uppercase tracking-wide group-hover:text-primary transition-colors">
                            {pName}
                          </h5>
                          <p className="font-mono text-xs text-brand-gray font-semibold">
                            €{p.price.toLocaleString("de-DE")}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 font-jura text-[10px] uppercase font-bold text-neutral-400 group-hover:text-primary transition-colors mt-1.5">
                          <Eye className="w-3 h-3" />
                          <span>{tr.viewItem}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
