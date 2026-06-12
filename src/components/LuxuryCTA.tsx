import React from "react";
import { motion } from "motion/react";
import { ArrowRight, HelpCircle, PhoneCall, Sparkles } from "lucide-react";

interface LuxuryCTAProps {
  lang: "BG" | "EN";
  onTriggerQuote: () => void;
}

export default function LuxuryCTA({ lang, onTriggerQuote }: LuxuryCTAProps) {
  const tr = {
    BG: {
      tag: "ПРОФЕСИОНАЛНО ОБЗАВЕЖДАНЕ",
      title: "Търсите първокласни виенски столове?",
      subtitle: "Независимо дали обзавеждате изискано кафене, ресторант, хотел или мащабен интериорен проект, нашият екип от проектанти и занаятчии ще Ви помогне да изберете перфектната серия на цени от производител.",
      btnQuote: "Заявете Индивидуална Оферта",
      btnContact: "Свържете се с Нас",
      qualityGuarantee: "Произведено в България съгласно сертифицираните европейски стандарти за якост.",
    },
    EN: {
      tag: "CONTRACT FURNITURE PARTNERS",
      title: "Looking for Premium Viennese Chairs?",
      subtitle: "Whether you are furnishing a café, restaurant, hotel or interior project, our team can help you select the perfect collection from our Bulgarian manufacturing facility.",
      btnQuote: "Request a Quote",
      btnContact: "Contact Us",
      qualityGuarantee: "100% Manufactured in European Union following rigorous EN hospitality durability standards.",
    }
  }[lang];

  const handleContactScroll = () => {
    const footerElement = document.getElementById("footer-section");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden" id="luxury-cta-block">
      {/* Golden halo visual glow effect for luxury vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full filter blur-[180px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Animated tag */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 bg-white/5 border border-[#C5A880]/30 px-4 py-2 rounded-full backdrop-blur-md"
        >
          <Sparkles className="w-4.5 h-4.5 text-primary" />
          <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
            {tr.tag}
          </span>
        </motion.div>

        {/* Big high-contrast display title */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
          {tr.title}
        </h2>

        {/* Explanatory subtitle */}
        <p className="font-sans text-[15px] sm:text-lg leading-relaxed text-neutral-300 font-light max-w-3xl mx-auto">
          {tr.subtitle}
        </p>

        {/* Buttons pair */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <button
            onClick={onTriggerQuote}
            className="group inline-flex items-center gap-3 bg-primary text-black font-sans text-xs font-bold tracking-widest uppercase px-8 py-5 rounded-full hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_4px_30px_rgba(197,168,128,0.2)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.2)] transform active:scale-95 cursor-pointer border-none"
          >
            <span>{tr.btnQuote}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={handleContactScroll}
            className="inline-flex items-center gap-2.5 bg-transparent text-white hover:text-primary border border-white/20 hover:border-primary/80 font-sans text-xs font-bold tracking-widest uppercase px-8 py-5 rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{tr.btnContact}</span>
          </button>
        </div>

        {/* Standard warning footer */}
        <p className="font-sans text-[10px] tracking-wider text-neutral-500 uppercase font-bold pt-6 max-w-md mx-auto leading-relaxed">
          {tr.qualityGuarantee}
        </p>

      </div>
    </section>
  );
}
