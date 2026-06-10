import React from "react";
import { ShoppingBag, Globe, Menu, X, Trash2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CartItem } from "../types";

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

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const tr = {
    BG: {
      collection: "Колекция",
      catalogue: "3D Каталог",
      about: "За нас",
      contact: "Контакти",
      cta: "Поискай Оферта",
      bagTitle: "Избрани продукти",
      empty: "Вашият списък е празен.",
      finish: "Финиш:",
      qty: "Кол:",
      quoteBtn: "Продължи към оферта",
      subtotal: "Приблизителна стойност:",
      brandDesc: "Луксозен бранд мебели",
    },
    EN: {
      collection: "Collection",
      catalogue: "3D Catalogue",
      about: "About Us",
      contact: "Contact",
      cta: "Request a Quote",
      bagTitle: "Selected Items",
      empty: "Your quote cart is empty.",
      finish: "Finish:",
      qty: "Qty:",
      quoteBtn: "Proceed to Quote",
      subtotal: "Estimated Value:",
      brandDesc: "Luxury Custom Furniture",
    },
  }[lang];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header id="masthead" className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-12">
            <a
              href="https://atlanta.bg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
              id="brand-logo-link"
            >
              <img
                src="https://atlanta.bg/storage/settings/April2026/NJRfJAwfUwMazRhQmkpD.png"
                alt="Atlanta Furniture"
                className="h-9 w-auto object-contain filter hover:brightness-110 transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="hidden md:flex flex-col border-l border-neutral-200 pl-3 leading-none">
                <span className="font-jura text-[13px] tracking-[0.2em] font-bold text-dark uppercase">
                  ATLANTA
                </span>
                <span className="font-jura text-[9px] text-brand-gray tracking-wider uppercase font-medium mt-0.5">
                  {tr.brandDesc}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => handleScrollTo("products-section")}
                className="font-jura text-[13px] font-bold tracking-wider text-dark hover:text-primary transition-colors cursor-pointer uppercase"
              >
                {tr.collection}
              </button>
              <button
                onClick={() => handleScrollTo("catalogue-section")}
                className="font-jura text-[13px] font-bold tracking-wider text-dark hover:text-primary transition-colors cursor-pointer uppercase"
              >
                {tr.catalogue}
              </button>
              <button
                onClick={() => handleScrollTo("quote-form-section")}
                className="font-jura text-[13px] font-bold tracking-wider text-dark hover:text-primary transition-colors cursor-pointer uppercase"
              >
                {tr.cta}
              </button>
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-neutral-100 rounded-full p-1 border border-neutral-200">
              <button
                onClick={() => setLang("BG")}
                className={`text-[12px] font-sans font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === "BG"
                    ? "bg-white text-primary shadow-sm"
                    : "text-neutral-500 hover:text-dark"
                }`}
                aria-label="Смяна на езика на Български"
              >
                BG
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`text-[12px] font-sans font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                  lang === "EN"
                    ? "bg-white text-primary shadow-sm"
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
              className="relative p-2.5 rounded-full hover:bg-neutral-50 border border-neutral-200 transition-colors cursor-pointer text-dark hover:text-primary group"
              id="cart-trigger-btn"
              aria-label="View quote cart"
            >
              <ShoppingBag className="w-[18px] h-[18px] transition-transform group-hover:scale-110" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-sans font-extrabold w-5 h-5 flex items-center justify-center rounded-full shadow-md shadow-primary/30 border border-white"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 font-jura text-[12px] font-bold tracking-wider uppercase text-white bg-primary px-6 py-2.5 rounded-full hover:bg-red-600 transition-all shadow-[0_4px_15px_rgba(232,91,91,0.3)] active:scale-95 cursor-pointer border-none"
              id="header-cta-btn"
            >
              {tr.cta}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-neutral-100 border border-neutral-200 text-dark cursor-pointer"
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-white p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
                  <span className="font-jura text-[14px] tracking-widest font-extrabold text-dark uppercase">
                    ATLANTA
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-neutral-100 text-dark border border-neutral-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-5 mt-8">
                  <button
                    onClick={() => handleScrollTo("products-section")}
                    className="flex text-[18px] font-jura text-left font-bold text-dark hover:text-primary transition-colors py-2 uppercase"
                  >
                    {tr.collection}
                  </button>
                  <button
                    onClick={() => handleScrollTo("catalogue-section")}
                    className="flex text-[18px] font-jura text-left font-bold text-dark hover:text-primary transition-colors py-2 uppercase"
                  >
                    {tr.catalogue}
                  </button>
                  <button
                    onClick={() => handleScrollTo("quote-form-section")}
                    className="flex text-[18px] font-jura text-left font-bold text-dark hover:text-primary transition-colors py-2 uppercase"
                  >
                    {tr.cta}
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-center font-jura text-[14px] font-extrabold bg-primary text-white py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-red-600 transition-colors uppercase"
                >
                  {tr.cta}
                </button>
                <p className="text-center font-jura text-[10px] text-brand-gray tracking-widest uppercase mt-4">
                  Atlanta Luxury Furnishings 2026
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
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              id="cart-overlay-bg"
            />
            
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 24, stiffness: 180 }}
                className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
                id="cart-drawer-container"
              >
                {/* Drawer Header */}
                <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    <h2 className="font-jura text-lg font-bold text-dark uppercase tracking-wider">
                      {tr.bagTitle} ({totalItems})
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 rounded-full hover:bg-neutral-100 text-dark border border-neutral-100 cursor-pointer"
                    aria-label="Close cart drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-4/5 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center mb-4 border border-neutral-100">
                        <ShoppingBag className="w-6 h-6 text-neutral-300" />
                      </div>
                      <p className="font-jura text-sm font-semibold text-neutral-400 uppercase tracking-widest">
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
                          className="flex gap-4 p-3 bg-neutral-50/80 rounded-2xl border border-neutral-100"
                        >
                          <img
                            src={item.product.image}
                            alt={name}
                            className="w-20 h-20 object-cover rounded-xl border border-neutral-200"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 flex flex-col justify-between py-0.5">
                            <div>
                              <h3 className="font-jura text-sm font-bold text-dark leading-tight line-clamp-1">
                                {name}
                              </h3>
                              <p className="text-xs font-mono text-brand-gray mt-1 flex items-center gap-1.5">
                                <span className="capitalize">{tr.finish}</span>
                                <span className="font-semibold text-dark inline-block px-1.5 py-0.5 bg-white border border-neutral-200 rounded text-[10px]">
                                  {item.selectedFinish}
                                </span>
                              </p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2 border border-neutral-200 bg-white rounded-full px-1.5 py-0.5">
                                <button
                                  onClick={() => updateCartQty(idx, item.quantity - 1)}
                                  className="text-xs px-1 hover:text-primary transition-colors cursor-pointer"
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="font-mono text-xs font-bold text-dark min-w-[12px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateCartQty(idx, item.quantity + 1)}
                                  className="text-xs px-1 hover:text-primary transition-colors cursor-pointer"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="font-mono text-sm font-semibold text-dark">
                                  €{(item.product.price * item.quantity).toLocaleString("de-DE")}
                                </span>
                                <button
                                  onClick={() => removeFromCart(idx)}
                                  className="text-neutral-400 hover:text-primary p-1 rounded-full hover:bg-red-50 transition-colors cursor-pointer"
                                  aria-label="Delete item from cart"
                                >
                                  <Trash2 className="w-4 h-4" />
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
                  <div className="px-6 py-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-jura font-semibold text-brand-gray uppercase tracking-wider">
                        {tr.subtotal}
                      </span>
                      <span className="font-mono text-lg font-bold text-dark">
                        €{totalAmount.toLocaleString("de-DE")}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        onOpenQuote();
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-full font-jura text-[13px] font-bold tracking-wider uppercase hover:bg-red-600 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/35 active:scale-[0.98] cursor-pointer"
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
