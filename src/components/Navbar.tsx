import React from "react";
import { ShoppingBag, Globe, Menu, X, Trash2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CartItem } from "../types";
import LiloviLogo from "./LiloviLogo";

interface NavbarProps {
  lang: "BG" | "EN";
  setLang: (lang: "BG" | "EN") => void;
  cart: CartItem[];
  removeFromCart: (index: number) => void;
  updateCartQty: (index: number, qty: number) => void;
  setIsCartOpen: (open: boolean) => void;
  isCartOpen: boolean;
  onOpenQuote: () => void;
}

export default function Navbar({
  lang,
  setLang,
  cart,
  removeFromCart,
  updateCartQty,
  setIsCartOpen,
  isCartOpen,
  onOpenQuote,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const tr = {
    BG: {
      collection: "Колекция",
      catalogue: "3D Каталог",
      about: "Процес",
      testimonials: "Мнения",
      cta: "Искане за Оферта",
      bagTitle: "Избрани продукти",
      empty: "Списъкът е празен.",
      finish: "Олио/Финиш:",
      qty: "Кол:",
      quoteBtn: "Форма за Оферта",
      subtotal: "Междинна сума (без ДДС):",
      brandDesc: "Занаятчийски мебелен дизайн",
    },
    EN: {
      collection: "Collection",
      catalogue: "Pagebook",
      about: "Craft",
      testimonials: "Reviews",
      cta: "Request Quote",
      bagTitle: "Selected Masterpieces",
      empty: "Catalog cart is currently empty.",
      finish: "Finishwood:",
      qty: "Qty:",
      quoteBtn: "Finalize Quote Spec",
      subtotal: "Estimated Value (excl. VAT):",
      brandDesc: "Artisanal Atelier Design",
    },
  }[lang];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header 
        id="masthead" 
        className={`sticky top-0 z-50 transition-all duration-300 w-full px-6 py-4 ${
          scrolled 
            ? "luxury-glass-light border-b border-primary/25 shadow-lg shadow-[#C5A880]/5" 
            : "bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#C5A880]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-12">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3.5 group"
              id="brand-logo-link"
            >
              <LiloviLogo className="h-9 md:h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="hidden md:flex flex-col border-l border-primary/30 pl-3 leading-none">
                <span className="font-serif text-[18px] font-bold tracking-[0.25em] text-dark uppercase leading-none">
                  Lilovi
                </span>
                <span className="font-sans text-[8px] text-primary-dark tracking-[0.2em] uppercase font-bold mt-1">
                  {tr.brandDesc}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => handleScrollTo("products-section")}
                className="relative font-sans text-[11.5px] font-bold tracking-widest text-[#111111]/80 hover:text-primary transition-colors cursor-pointer uppercase py-1 group"
              >
                {tr.collection}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <button
                onClick={() => handleScrollTo("catalogue-section")}
                className="relative font-sans text-[11.5px] font-bold tracking-widest text-[#111111]/80 hover:text-primary transition-colors cursor-pointer uppercase py-1 group"
              >
                {tr.catalogue}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <button
                onClick={() => handleScrollTo("process-timeline-section")}
                className="relative font-sans text-[11.5px] font-bold tracking-widest text-[#111111]/80 hover:text-primary transition-colors cursor-pointer uppercase py-1 group"
              >
                {tr.about}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <button
                onClick={() => handleScrollTo("testimonials-section")}
                className="relative font-sans text-[11.5px] font-bold tracking-widest text-[#111111]/80 hover:text-primary transition-colors cursor-pointer uppercase py-1 group"
              >
                {tr.testimonials}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
              <button
                onClick={() => handleScrollTo("quote-form-section")}
                className="relative font-sans text-[11.5px] font-bold tracking-widest text-primary hover:text-primary-dark transition-colors cursor-pointer uppercase py-1 group"
              >
                * {tr.cta}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/40 transition-all duration-300 group-hover:bg-primary" />
              </button>
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-white/60 border border-primary/20 rounded-full p-0.5">
              <button
                onClick={() => setLang("BG")}
                className={`text-[10px] font-sans font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === "BG"
                    ? "bg-dark text-[#FAF6F0] shadow-sm"
                    : "text-neutral-500 hover:text-dark"
                }`}
                aria-label="Смяна на езика на Български"
              >
                БГ
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`text-[10px] font-sans font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === "EN"
                    ? "bg-dark text-[#FAF6F0] shadow-sm"
                    : "text-neutral-500 hover:text-dark"
                }`}
                aria-label="Change language to English"
              >
                EN
              </button>
            </div>

            {/* Quote Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-[#FAF6F0] border border-primary/20 transition-all duration-300 cursor-pointer text-dark hover:text-primary hover:border-primary group"
              id="cart-trigger-btn"
              aria-label="View quote cart"
            >
              <ShoppingBag className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-dark text-primary text-[9px] font-sans font-extrabold w-4.5 h-4.5 flex items-center justify-center rounded-full border border-primary shadow"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 font-sans text-[10.5px] font-extrabold tracking-widest uppercase text-white bg-dark border border-[#C5A880]/30 hover:border-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-dark transition-all duration-500 shadow-md cursor-pointer"
              id="header-cta-btn"
            >
              {lang === "BG" ? "ПОИСКАЙ ОФЕРТА" : "REQUEST PRICING"}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-neutral-100 border border-[#C5A880]/20 text-dark cursor-pointer"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slideout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-dark text-[#FAF6F0] p-6 shadow-2xl flex flex-col justify-between border-l border-primary/20"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-2.5">
                    <LiloviLogo className="h-8 w-auto" />
                    <span className="font-serif text-[17px] tracking-widest font-extrabold text-white">
                      LILOVI
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-white border border-white/20"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  <button
                    onClick={() => handleScrollTo("products-section")}
                    className="flex text-[15px] font-sans text-left font-bold text-neutral-300 hover:text-primary transition-colors py-2 uppercase tracking-wider"
                  >
                    — {tr.collection}
                  </button>
                  <button
                    onClick={() => handleScrollTo("catalogue-section")}
                    className="flex text-[15px] font-sans text-left font-bold text-neutral-300 hover:text-primary transition-colors py-2 uppercase tracking-wider"
                  >
                    — {tr.catalogue}
                  </button>
                  <button
                    onClick={() => handleScrollTo("process-timeline-section")}
                    className="flex text-[15px] font-sans text-left font-bold text-neutral-300 hover:text-primary transition-colors py-2 uppercase tracking-wider"
                  >
                    — {tr.about}
                  </button>
                  <button
                    onClick={() => handleScrollTo("testimonials-section")}
                    className="flex text-[15px] font-sans text-left font-bold text-neutral-300 hover:text-primary transition-colors py-2 uppercase tracking-wider"
                  >
                    — {tr.testimonials}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center font-sans text-[12px] font-bold tracking-widest bg-primary text-dark py-4 rounded-full shadow-lg hover:bg-[#A48962] transition-colors uppercase"
                >
                  {tr.cta}
                </button>
                <p className="text-center font-sans text-[9px] text-[#C5A880]/60 tracking-widest uppercase">
                  Lilovi Artistic Woodcraft 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Sidebar for Quote Cart */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              id="cart-overlay-bg"
            />
            
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 24, stiffness: 180 }}
                className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col justify-between border-l border-primary/20"
                id="cart-drawer-container"
              >
                {/* Drawer Header */}
                <div className="px-6 py-5 border-b border-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    <h2 className="font-serif text-lg font-bold text-dark uppercase tracking-wider">
                      {tr.bagTitle} ({totalItems})
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-full hover:bg-primary/10 text-dark border border-primary/25 cursor-pointer"
                    aria-label="Close cart drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-4/5 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-4 border border-primary/15 shadow-inner">
                        <ShoppingBag className="w-5 h-5 text-primary/40" />
                      </div>
                      <p className="font-serif text-[15px] font-semibold text-neutral-400 capitalize tracking-wide">
                        {tr.empty}
                      </p>
                    </div>
                  ) : (
                    cart.map((item, idx) => {
                      const name = lang === "BG" ? item.product.nameBG : item.product.nameEN;
                      return (
                        <motion.div
                          key={`${item.product.id}-${item.selectedFinish}-${idx}`}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="flex gap-4 p-3 bg-white border border-primary/10 rounded-2xl shadow-sm"
                        >
                          <img
                            src={item.product.image}
                            alt={name}
                            className="w-20 h-20 object-cover rounded-xl border border-primary/10"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 flex flex-col justify-between py-0.5">
                            <div>
                              <h3 className="font-serif text-sm font-bold text-dark leading-tight line-clamp-1">
                                {name}
                              </h3>
                              <p className="text-[11px] font-sans text-neutral-500 mt-1 flex items-center gap-1.5">
                                <span className="capitalize">{tr.finish}</span>
                                <span className="font-semibold text-primary font-mono text-[10px]">
                                  {item.selectedFinish}
                                </span>
                              </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2 border border-primary/10 bg-[#FAF6F0] rounded-full px-2 py-0.5">
                                <button
                                  onClick={() => updateCartQty(idx, item.quantity - 1)}
                                  className="text-[11px] font-bold px-1 hover:text-primary transition-colors cursor-pointer"
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="font-mono text-xs font-bold text-dark min-w-[12px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateCartQty(idx, item.quantity + 1)}
                                  className="text-[11px] font-bold px-1 hover:text-primary transition-colors cursor-pointer"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-bold text-dark">
                                  €{(item.product.price * item.quantity).toLocaleString("de-DE")}
                                </span>
                                <button
                                  onClick={() => removeFromCart(idx)}
                                  className="text-neutral-400 hover:text-primary p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
                                  aria-label="Delete item from cart"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  )}
                </div>

                {/* Footer block */}
                {cart.length > 0 && (
                  <div className="px-6 py-5 border-t border-primary/10 bg-white/90 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-sans text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                        {tr.subtotal}
                      </span>
                      <span className="font-mono text-md font-bold text-primary">
                        €{totalAmount.toLocaleString("de-DE")}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        onOpenQuote();
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-dark text-white border border-[#C5A880]/30 hover:border-primary py-3.5 rounded-full font-sans text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-dark transition-all duration-300 shadow-md cursor-pointer"
                      id="proceed-quote-drawer-btn"
                    >
                      <span>{tr.quoteBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

