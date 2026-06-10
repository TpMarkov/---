import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ShoppingBag, ShieldCheck, Truck, Scale } from "lucide-react";
import { Product, CartItem } from "../types";

interface QuickViewModalProps {
  lang: "BG" | "EN";
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export default function QuickViewModal({
  lang,
  product,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  const [selectedFinish, setSelectedFinish] = React.useState<string>("");
  const [quantity, setQuantity] = React.useState<number>(1);
  const [addedMessage, setAddedMessage] = React.useState<boolean>(false);

  // Auto-set the first finish when product opens
  React.useEffect(() => {
    if (product) {
      const finishes = lang === "BG" ? FINISH_OPTIONS_BG : FINISH_OPTIONS_EN;
      setSelectedFinish(finishes[0]);
      setQuantity(1);
      setAddedMessage(false);
    }
  }, [product, lang]);

  if (!product) return null;

  const FINISH_OPTIONS_BG = [
    "Натурал Мистик Дъб",
    "Опушен Кралски Орех",
    "Матово Черен Въглен",
    "Бял Минерален Ясен",
  ];
  const FINISH_OPTIONS_EN = [
    "Natural Mystic Oak",
    "Smoked Royal Walnut",
    "Matte Charcoal Black",
    "Mineral White Ash",
  ];

  const finishes = lang === "BG" ? FINISH_OPTIONS_BG : FINISH_OPTIONS_EN;
  const name = lang === "BG" ? product.nameBG : product.nameEN;
  const desc = lang === "BG" ? product.descriptionBG : product.descriptionEN;

  const tr = {
    BG: {
      selectFinish: "Изберете Дървесен Финиш / Тапицерия:",
      qty: "Количество:",
      addCart: "Добави към списъка",
      materials: "Материали",
      dimensions: "Минимални габарити:",
      designer: "Проектант:",
      trust1: "Естествена селектирана суровина",
      trust2: "Италианско сертифицирано лакиране",
      successAdded: "Продуктът е добавен успешно!",
    },
    EN: {
      selectFinish: "Select Timberwood / Premium Finish:",
      qty: "Select Quantity:",
      addCart: "Add to Selection List",
      materials: "Finely Curated Materials",
      dimensions: "Standard Dimensions:",
      designer: "Lead Designer:",
      trust1: "Premium select raw material",
      trust2: "Italian premium certified lacquering",
      successAdded: "Successfully added to your selection list!",
    },
  }[lang];

  const handleAddSubmit = () => {
    onAddToCart({
      product,
      quantity,
      selectedFinish,
    });
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
          id="yith-quick-view-overlay"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 border border-neutral-100 flex flex-col md:flex-row"
          id="yith-quick-view-modal"
        >
          {/* Close button in absolute corner */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 border border-neutral-100 hover:text-primary hover:scale-105 transition-all text-dark cursor-pointer shadow-md"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Media Zoom Frame */}
          <div className="w-full md:w-1/2 relative bg-neutral-50 min-h-[300px] md:min-h-[480px]">
            <img
              src={product.image}
              alt={name}
              className="w-full h-full object-cover absolute inset-0"
              referrerPolicy="no-referrer"
            />
            
            {/* Ambient gradients */}
            <div className="absolute inset-x-0 bottom-0 py-6 px-6 bg-gradient-to-t from-black/60 to-transparent text-white flex flex-col justify-end h-1/2">
              <span className="font-jura text-[10px] tracking-widest text-primary font-bold uppercase">
                {product.designer}
              </span>
              <h3 className="font-jura text-lg font-bold uppercase mt-1 tracking-wide leading-tight">
                {name}
              </h3>
            </div>
          </div>

          {/* Right Column: Spec / Options Area */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
            <div className="space-y-6">
              
              {/* Heading */}
              <div className="space-y-1">
                <span className="font-jura text-[10px] tracking-[0.25em] font-extrabold text-primary uppercase">
                  [ PRODUCT PARAMETERS ]
                </span>
                <h2 className="font-jura text-2xl font-black text-dark uppercase tracking-wide">
                  {name}
                </h2>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-mono text-xl font-bold text-dark">
                    €{product.price.toLocaleString("de-DE")}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    EXCL. VAT
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-brand-gray leading-relaxed font-normal">
                {desc}
              </p>

              {/* Timber wood finish variants selector */}
              <div className="space-y-2">
                <label className="font-jura text-[11px] font-bold tracking-wider text-dark uppercase">
                  {tr.selectFinish}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {finishes.map((fn) => {
                    const isSelected = selectedFinish === fn;
                    return (
                      <button
                        key={fn}
                        type="button"
                        onClick={() => setSelectedFinish(fn)}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-[11px] font-jura font-semibold uppercase flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-neutral-200 hover:border-dark text-neutral-600 bg-white"
                        }`}
                      >
                        <span className="truncate">{fn}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specs bullet listings */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-neutral-100 py-4 font-jura text-xs">
                <div>
                  <div className="text-neutral-400 uppercase tracking-widest">{tr.designer}</div>
                  <div className="font-bold text-dark uppercase mt-0.5">{product.designer}</div>
                </div>
                <div>
                  <div className="text-neutral-400 uppercase tracking-widest">{tr.dimensions}</div>
                  <div className="font-bold text-dark uppercase mt-0.5">{product.dimensions}</div>
                </div>
              </div>

            </div>

            {/* Shopping trigger controls */}
            <div className="pt-6 space-y-4">
              
              {/* Success Notification Banner */}
              <AnimatePresence>
                {addedMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl"
                  >
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span className="font-sans text-xs font-semibold">
                      {tr.successAdded}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3">
                {/* Qty counter */}
                <div className="flex items-center border border-neutral-200 bg-neutral-50 rounded-full px-3">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1 font-bold text-dark hover:text-primary transition-colors cursor-pointer text-sm"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="font-mono text-sm font-bold text-dark px-4 min-w-[32px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1 font-bold text-dark hover:text-primary transition-colors cursor-pointer text-sm"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to selection button */}
                <button
                  onClick={handleAddSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-full font-jura text-xs font-bold tracking-widest uppercase hover:bg-emerald-600 hover:shadow-emerald-500/10 shadow-lg shadow-primary/25 hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                  id="add-to-selection-btn"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{tr.addCart}</span>
                </button>
              </div>

              {/* Guarantees links */}
              <div className="flex justify-around text-[10px] font-sans text-brand-gray pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  {tr.trust1}
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-primary" />
                  {tr.trust2}
                </span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
