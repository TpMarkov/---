import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ClipboardList, Send, Sparkles, User, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { CartItem, QuoteRequest } from "../types";

interface QuoteRequestSectionProps {
  lang: "BG" | "EN";
  cart: CartItem[];
  updateCartQty: (index: number, qty: number) => void;
  removeFromCart: (index: number) => void;
  onSubmitSuccess: () => void;
}

export default function QuoteRequestSection({
  lang,
  cart,
  updateCartQty,
  removeFromCart,
  onSubmitSuccess,
}: QuoteRequestSectionProps) {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    contactMethod: "email" as "email" | "phone",
  });

  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [uniqueQuoteId, setUniqueQuoteId] = React.useState("");

  const tr = {
    BG: {
      title: "Индивидуално Запитване за Оферта",
      desc: "Създавате хотел, корпоративен офис или мечтания дом? Опишете проекта си и нашите проектанти ще изготвят прецизна оферта в рамките на 2 часа.",
      stepsTitle: "Вашата селекция:",
      emptyCart: "За да изготвим оферта първо добавете продукти от нашата колекция или каталога по-горе.",
      totalEst: "Приблизителна Стойност (без ДДС):",
      formTitle: "Данни за Запитването",
      namePl: "Име и Фамилия",
      emailPl: "Имейл адрес",
      phonePl: "Телефонен номер",
      notesPl: "Опишете специфики на проекта (размери, финиши, план на сграда)...",
      prefContact: "Предпочитан начин за контакт:",
      emailOpt: "По имейл",
      phoneOpt: "По телефон",
      submitBtn: "Изпрати запитване за оферта",
      submitting: "Изпращане на спецификация...",
      successTitle: "Запитването е Изпратено!",
      successDesc: "Благодарим ви! Спецификацията и запитването са изпратени на нашия проектантски отдел.",
      regNum: "Референтен номер на оферта:",
      followUp: "Служител ще се свърже с Вас в следващите 2 работни часа за финализиране на детайлите.",
      brandNote: "ЛИЛОВИ МЕБЕЛИ • ДИГИТАЛНА ИНТЕГРАЦИЯ",
    },
    EN: {
      title: "Corporate & Bespoke Quote Builder",
      desc: "Creating a boutique hotel, premium workplace, or high-end luxury villa? Submit your layout specification for certified pricing within 2 operational hours.",
      stepsTitle: "Your Selected Spec Sheet:",
      emptyCart: "Please add furniture pieces from the collections above to construct your custom quote sheet.",
      totalEst: "Estimated Base Value (excl. VAT):",
      formTitle: "Request Details",
      namePl: "Your Full Name",
      emailPl: "Corporate Email Address",
      phonePl: "Direct Telephone Number",
      notesPl: "Describe custom floor plans, architectural specs, or wood grain alterations...",
      prefContact: "Preferred Contact Channel:",
      emailOpt: "Corporate Email",
      phoneOpt: "Telephone",
      submitBtn: "Send Spec for Quote",
      submitting: "Uploading Layout Specs...",
      successTitle: "Quote Request Received!",
      successDesc: "Verification complete. Your specifications have been forwarded to our pricing coordinates.",
      regNum: "Registry Quote Code:",
      followUp: "A dedicated design consultant will contact you via your chosen channel within 2 hours.",
      brandNote: "LILOVI ARCHITECTURAL • SMART SYSTEM",
    },
  }[lang];

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!formData.fullName || !formData.email || !formData.phone) return;

    // Generate random quote reference ID
    const randomId = "QT-" + Math.floor(100000 + Math.random() * 900000);
    setUniqueQuoteId(randomId);
    setFormSubmitted(true);
    onSubmitSuccess();
  };

  return (
    <section id="quote-form-section" className="py-24 px-6 bg-zinc-50 border-t border-b border-neutral-100 scroll-mt-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-primary bg-primary/10 rounded-full px-4 py-1">
            <ClipboardList className="w-3.5 h-3.5" />
            <span className="font-jura text-[10px] tracking-[0.25em] font-extrabold uppercase">
              *** {lang === "BG" ? "ЗАПИТВАНЕ ЗА ЦЕНА" : "COMMERCIAL QUOTES"} ***
            </span>
          </div>
          <h2 className="font-jura text-3xl md:text-4xl font-extrabold text-dark uppercase tracking-tight">
            {tr.title}
          </h2>
          <p className="font-sans text-sm text-brand-gray max-w-2xl mx-auto leading-relaxed">
            {tr.desc}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.div
                key="form-entry"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left Side: Cart Elements Display (5 cols) */}
                <div className="lg:col-span-5 bg-neutral-50/50 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-neutral-100 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="font-jura text-xs font-bold text-[#E85B5B] uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span>{tr.stepsTitle}</span>
                    </h3>

                    {cart.length === 0 ? (
                      <p className="font-jura text-xs font-bold text-neutral-400 uppercase leading-relaxed tracking-wider py-8">
                        {tr.emptyCart}
                      </p>
                    ) : (
                      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
                        {cart.map((item, idx) => {
                          const name = lang === "BG" ? item.product.nameBG : item.product.nameEN;
                          return (
                            <div
                              key={`${item.product.id}-${item.selectedFinish}-${idx}`}
                              className="flex gap-4 p-3 bg-white border border-neutral-200/60 rounded-2xl"
                            >
                              <img
                                src={item.product.image}
                                alt={name}
                                className="w-12 h-12 object-cover rounded-xl border border-neutral-200"
                                referrerPolicy="no-referrer"
                              />
                              <div className="flex-1 flex flex-col justify-between py-0.5">
                                <div className="space-y-0.5">
                                  <h4 className="font-jura text-[11px] font-bold text-dark leading-tight line-clamp-1 uppercase tracking-wide">
                                    {name}
                                  </h4>
                                  <p className="text-[9px] font-mono text-brand-gray">
                                    {item.selectedFinish}
                                  </p>
                                </div>
                                <div className="flex items-center justify-between mt-1 text-[11px] font-mono">
                                  <span className="text-neutral-500">
                                    {item.quantity} x €{item.product.price.toLocaleString("de-DE")}
                                  </span>
                                  <span className="font-bold text-dark">
                                    €{(item.product.price * item.quantity).toLocaleString("de-DE")}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {cart.length > 0 && (
                    <div className="border-t border-neutral-200/60 pt-6 mt-6 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-jura text-brand-gray uppercase tracking-widest">
                        <span>{tr.totalEst}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="font-mono text-2xl font-black text-dark">
                          €{totalAmount.toLocaleString("de-DE")}
                        </span>
                        <span className="font-mono text-[10px] text-brand-gray font-bold">
                          * EXCL. LOGISTICS & VAT
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Quote Contact Form (7 cols) */}
                <form
                  onSubmit={handleFormSubmit}
                  className="lg:col-span-7 p-6 md:p-8 space-y-6"
                >
                  <h3 className="font-jura text-xs font-bold text-dark uppercase tracking-widest border-b border-neutral-100 pb-3">
                    {tr.formTitle}
                  </h3>

                  <div className="space-y-4">
                    {/* Full name input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-gray">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={tr.namePl}
                        className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-xs text-dark focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                      />
                    </div>

                    {/* Email and Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-gray">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={tr.emailPl}
                          className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-xs text-dark focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-gray">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={tr.phonePl}
                          className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-xs text-dark focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Preferred Contact method */}
                    <div className="space-y-2">
                      <label className="font-jura text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
                        {tr.prefContact}
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer font-sans text-xs text-dark">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === "email"}
                            onChange={handleInputChange}
                            className="accent-primary w-4 h-4 cursor-pointer"
                          />
                          <span>{tr.emailOpt}</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer font-sans text-xs text-dark">
                          <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={formData.contactMethod === "phone"}
                            onChange={handleInputChange}
                            className="accent-primary w-4 h-4 cursor-pointer"
                          />
                          <span>{tr.phoneOpt}</span>
                        </label>
                      </div>
                    </div>

                    {/* Notes Custom blueprint details */}
                    <div className="relative">
                      <div className="absolute top-4 left-4 text-brand-gray">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder={tr.notesPl}
                        className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-xs text-dark focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={cart.length === 0}
                      className="w-full flex items-center justify-center gap-2 font-jura text-[12px] font-bold tracking-widest uppercase text-white bg-primary disabled:bg-neutral-200 disabled:text-neutral-400 disabled:pointer-events-none disabled:shadow-none py-4 rounded-full hover:bg-red-600 transition-all shadow-xl shadow-primary/30 cursor-pointer border-none"
                      id="quote-submit-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>{tr.submitBtn}</span>
                    </button>
                    
                    <p className="text-center text-[9px] font-sans text-brand-gray mt-3">
                      * BY SUBMITTING YOU AGREE TO OUR PRIVACY STANDARDS. DATA IS ENCRYPTED.
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              // Stunning Success Screen Layout
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12 text-center space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-500 shadow-xl shadow-emerald-500/10">
                  <Check className="w-8 h-8 stroke-[3px]" />
                </div>

                <div className="space-y-2">
                  <span className="font-jura text-[10px] tracking-[0.3em] font-extrabold text-emerald-600 uppercase">
                    {tr.brandNote}
                  </span>
                  <h3 className="font-jura text-2xl md:text-3xl font-black text-dark uppercase tracking-wide">
                    {tr.successTitle}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-brand-gray max-w-xl mx-auto">
                    {tr.successDesc}
                  </p>
                </div>

                <div className="bg-neutral-50 px-6 py-4 rounded-2xl border border-neutral-100 inline-block">
                  <span className="font-jura text-xs text-brand-gray uppercase tracking-widest">
                    {tr.regNum}
                  </span>
                  <span className="block font-mono text-lg font-bold text-dark tracking-wider mt-1">
                    {uniqueQuoteId}
                  </span>
                </div>

                <p className="font-jura text-xs font-semibold text-[#E85B5B] uppercase tracking-wider max-w-md">
                  {tr.followUp}
                </p>

                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    // Clear cart would be done by parent
                  }}
                  className="font-jura text-[10px] tracking-widest uppercase font-bold text-neutral-500 hover:text-dark px-6 py-2.5 border border-neutral-200 hover:border-dark rounded-full transition-all cursor-pointer"
                >
                  Create New Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
