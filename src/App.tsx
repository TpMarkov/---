import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CatalogueFlipBook from "./components/CatalogueFlipBook";
import ProductGrid from "./components/ProductGrid";
import QuickViewModal from "./components/QuickViewModal";
import QuoteRequestSection from "./components/QuoteRequestSection";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import { Product, CartItem } from "./types";
import LiloviLogo from "./components/LiloviLogo";

import CategoryShowcaseGrid from "./components/CategoryShowcaseGrid";
import ManufacturingTimeline from "./components/ManufacturingTimeline";
import StatisticsCounter from "./components/StatisticsCounter";
import MagazineFeaturedCollection from "./components/MagazineFeaturedCollection";
import ProjectBeforeAfterSlider from "./components/ProjectBeforeAfterSlider";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import LuxuryCTA from "./components/LuxuryCTA";
import FloatingWidgets from "./components/FloatingWidgets";

export default function App() {
  const [lang, setLang] = React.useState<"BG" | "EN">("EN");
  const [isLoading, setIsLoading] = React.useState(true);
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = React.useState<"all" | "living" | "dining" | "bedroom" | "office">("all");

  // Load cart on mount
  React.useEffect(() => {
    const savedCart = localStorage.getItem("atlanta_furniture_selected_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse saved cart", e);
      }
    }
    // Simulate entry preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const saveCartToStorage = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("atlanta_furniture_selected_cart", JSON.stringify(updatedCart));
  };

  const handleAddToCart = (newItem: CartItem) => {
    const existingIndex = cart.findIndex(
      (item) =>
        item.product.id === newItem.product.id &&
        item.selectedFinish === newItem.selectedFinish
    );

    let updated = [...cart];
    if (existingIndex > -1) {
      updated[existingIndex].quantity += newItem.quantity;
    } else {
      updated.push(newItem);
    }
    saveCartToStorage(updated);
  };

  const handleRemoveFromCart = (index: number) => {
    const updated = cart.filter((_, idx) => idx !== index);
    saveCartToStorage(updated);
  };

  const handleUpdateQty = (index: number, newQty: number) => {
    if (newQty < 1) {
      handleRemoveFromCart(index);
      return;
    }
    const updated = cart.map((item, idx) =>
      idx === index ? { ...item, quantity: newQty } : item
    );
    saveCartToStorage(updated);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenQuoteSection = () => {
    handleScrollToSection("quote-form-section");
  };

  const handleClearCartOnSubmit = () => {
    saveCartToStorage([]);
  };

  return (
    <>
      {/* 1. Interactive Preloader Frame */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50 bg-[#0d0d0e] flex flex-col items-center justify-center p-6 shadow-inner"
            id="site-preloader"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <LiloviLogo className="h-14 md:h-16 w-auto mb-1" />
              <div className="space-y-1">
                <span className="block font-serif text-2xl font-bold tracking-widest text-[#C5A880] uppercase">
                  ATELIER LILOVI
                </span>
                <span className="block font-sans text-[10px] text-neutral-400 tracking-[0.25em] uppercase font-light">
                  Bespoke European Woodcraft & Digital Showroom
                </span>
              </div>
              
              {/* Spinning progress loader bubble */}
              <div className="relative w-24 h-[1px] bg-white/10 overflow-hidden mt-6 rounded-full">
                <motion.div
                  animate={{ left: ["-100%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-[#C5A880]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Site Contents Frame */}
      <div id="page" className="flex flex-col min-h-screen bg-white">
        
        {/* Navigation Bar */}
        <Navbar
          lang={lang}
          setLang={setLang}
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          updateCartQty={handleUpdateQty}
          setIsCartOpen={setIsCartOpen}
          isCartOpen={isCartOpen}
          onOpenQuote={handleOpenQuoteSection}
        />

        {/* Hero Section Banner */}
        <Hero
          lang={lang}
          onExplore={() => handleScrollToSection("products-section")}
          onCatalogue={() => handleScrollToSection("catalogue-section")}
        />

        {/* Dynamic Category Showcase Grid */}
        <CategoryShowcaseGrid
          lang={lang}
          onSelectCategory={setActiveCategoryFilter}
        />

        {/* Brand Credibility Numerical Statistis */}
        <StatisticsCounter lang={lang} />

        {/* Digital Interactive FlipBook */}
        <div id="catalogue-section" className="scroll-mt-24">
          <CatalogueFlipBook
            lang={lang}
            onProductClick={(p) => setSelectedProduct(p)}
          />
        </div>

        {/* Curated Products Bento Grid */}
        <ProductGrid
          lang={lang}
          onProductClick={(p) => setSelectedProduct(p)}
          activeFilter={activeCategoryFilter}
          setActiveFilter={setActiveCategoryFilter}
        />

        {/* Manufacturing Handcraft Timeline */}
        <ManufacturingTimeline lang={lang} />

        {/* Magazine Editorial Highlight */}
        <MagazineFeaturedCollection
          lang={lang}
          onTriggerQuote={handleOpenQuoteSection}
        />

        {/* Spatial Transformation Before/After slider */}
        <ProjectBeforeAfterSlider lang={lang} />

        {/* Designer client recommendations */}
        <TestimonialsCarousel lang={lang} />

        {/* Architecture sample request Call to Action */}
        <LuxuryCTA
          lang={lang}
          onTriggerQuote={handleOpenQuoteSection}
        />

        {/* Commercial Integrated Quote Builder */}
        <QuoteRequestSection
          lang={lang}
          cart={cart}
          updateCartQty={handleUpdateQty}
          removeFromCart={handleRemoveFromCart}
          onSubmitSuccess={handleClearCartOnSubmit}
        />

        {/* Comprehensive Brand Footer */}
        <Footer
          lang={lang}
          onScrollToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Interactive Quick View modal (WooCommerce spec layout) */}
        <QuickViewModal
          lang={lang}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />

        {/* Compliant Localized Cookie consent banner */}
        <CookieConsent lang={lang} />

        {/* Floating Scroll & Contact widgets */}
        <FloatingWidgets lang={lang} />

      </div>
    </>
  );
}

