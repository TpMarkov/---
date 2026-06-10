import React from "react";
import { ArrowUp, Mail, MapPin, Phone, Instagram, Facebook, Send } from "lucide-react";
import LiloviLogo from "./LiloviLogo";

interface FooterProps {
  lang: "BG" | "EN";
  onScrollToTop: () => void;
}

export default function Footer({ lang, onScrollToTop }: FooterProps) {
  const [subEmail, setSubEmail] = React.useState("");
  const [subSuccess, setSubSuccess] = React.useState(false);

  const tr = {
    BG: {
      desc: "Висококачествени интериорни концепции, ръчно напасвани сглобки и луксозни естествени суровини от сърцето на България.",
      newsletter: "Бюлетин за новости",
      subPl: "Въведете вашия имейл...",
      subbed: "Успешен абонамент!",
      addressTitle: "Шоурум И Координати",
      address: "ул. 'Индустриална' 44, София, България",
      phone: "+359 888 88 88 88",
      officeHours: "Пон - Пет: 09:00 - 18:00",
      copyright: "© 2026 ЛИЛОВИ МЕБЕЛИ. Всички права запазени.",
      designCredits: "Концепция вдъхновена от Lilovi Furniture & 3D FlipBook",
      scrollTitle: "Нагоре",
    },
    EN: {
      desc: "Premium interior architectures, custom hand-mated joinery, and raw hardwood selections manufactured with pride in Bulgaria.",
      newsletter: "Bespoke Newsletter",
      subPl: "Enter your email address...",
      subbed: "Welcome to the circle!",
      addressTitle: "Showroom Coordinates",
      address: "44 Industrial Str., Sofia, Bulgaria",
      phone: "+359 888 88 88 88",
      officeHours: "Mon - Fri: 09:00 - 18:00",
      copyright: "© 2026 LILOVI FURNISHINGS. All rights reserved.",
      designCredits: "High Fidelity Recreation of Lilovi Furniture Digital Experience",
      scrollTitle: "Back to Top",
    },
  }[lang];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubSuccess(true);
    setSubEmail("");
    setTimeout(() => setSubSuccess(false), 3000);
  };

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <LiloviLogo className="h-10 w-auto" />
              <span className="font-jura text-[16px] font-black tracking-[0.2em] uppercase">
                LILOVI
              </span>
            </div>
            <p className="font-sans text-[13px] text-neutral-300 leading-relaxed">
              {tr.desc}
            </p>
          </div>

          {/* Quick links & Contact stats */}
          <div className="space-y-6">
            <h4 className="font-jura text-xs font-bold tracking-widest uppercase text-primary">
              {tr.addressTitle}
            </h4>
            <div className="space-y-4 font-sans text-[13px] text-neutral-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                <span>{tr.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>{tr.phone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>office@lilovi88.com</span>
              </p>
              <p className="text-xs text-neutral-400 font-sans font-medium">
                {tr.officeHours}
              </p>
            </div>
          </div>

          {/* Nav coordinates */}
          <div className="space-y-6">
            <h4 className="font-jura text-xs font-bold tracking-widest uppercase text-primary">
              Site Navigation
            </h4>
            <div className="flex flex-col gap-3 font-jura text-[13px] font-bold uppercase tracking-wider text-neutral-300">
              <a href="#products-section" className="hover:text-primary transition-colors">
                {lang === "BG" ? "Колекция" : "Collection Grid"}
              </a>
              <a href="#catalogue-section" className="hover:text-primary transition-colors">
                {lang === "BG" ? "3D Каталог" : "3D Digital Catalogue"}
              </a>
              <a href="#quote-form-section" className="hover:text-primary transition-colors">
                {lang === "BG" ? "Поискай Оферта" : "Quote Request"}
              </a>
            </div>
          </div>

          {/* Custom newsletter bar */}
          <div className="space-y-6">
            <h4 className="font-jura text-xs font-bold tracking-widest uppercase text-primary">
              {tr.newsletter}
            </h4>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder={tr.subPl}
                  className="w-full bg-neutral-800 text-sm border border-neutral-700 focus:border-primary outline-none py-3.5 pl-4 pr-12 rounded-xl text-white placeholder-neutral-400 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 p-1.5 rounded-lg bg-primary hover:bg-red-600 transition-colors text-white cursor-pointer"
                  aria-label="Subscribe with email"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subSuccess && (
                <p className="text-xs font-sans text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span>✔</span>
                  <span>{tr.subbed}</span>
                </p>
              )}
            </form>

            {/* Social accounts */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white hover:bg-neutral-800 transition-all"
                aria-label="Visit Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white hover:bg-neutral-800 transition-all"
                aria-label="Visit Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower section */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <p className="text-xs font-sans text-neutral-300 font-medium">
              {tr.copyright}
            </p>
            <p className="text-xs font-sans text-neutral-400">
              {tr.designCredits}
            </p>
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 group font-jura text-[12px] font-extrabold uppercase tracking-widest text-[#E85B5B] hover:text-white hover:bg-[#E85B5B] transition-all px-5 py-2.5 rounded-full border border-[#E85B5B]/30 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>{tr.scrollTitle}</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
