import React from "react";
import { ArrowUp, Mail, MapPin, Phone, Instagram, Facebook, Send, Bookmark, Sparkles } from "lucide-react";

interface FooterProps {
  lang: "BG" | "EN";
  onScrollToTop: () => void;
}

export default function Footer({ lang, onScrollToTop }: FooterProps) {
  const [subEmail, setSubEmail] = React.useState("");
  const [subSuccess, setSubSuccess] = React.useState(false);

  const tr = {
    BG: {
      aboutTitle: "За Ателие Lilovi 88",
      aboutDesc: "Основан през 1996 г., Lilovi 88 е семеен производител на висококачествени виенски столове (тип Thonet) от масивен бук. Пренасяме наследството на занаятчийското ог огъване в съвременните ресторанти и домове.",
      
      chairsTitle: "Виенски Столове",
      chairsClassic: "Класик модел 14 & 18",
      chairsEmbossed: "Гравирана серия 154T",
      chairsCross: "Кросбек серия / Cross",
      chairsArm: "Премиум столове & Кресла",

      contactTitle: "Контакти",
      address: "ул. 'Индустриална' 44, София, България",
      phone: "+359 888 88 88 88",
      email: "office@lilovi88.com",
      hours: "Пон - Пет: 09:00 - 18:00 ч.",

      catalogueTitle: "Каталог & Бюлетин",
      catalogueDesc: "Разгледайте дигиталния каталог или се абонирайте за новини за фабрични партиди.",
      subPl: "Въведете вашия имейл...",
      subbed: "Добре дошли в кръга!",

      copyright: "© 2026 ЛИЛОВИ 88. Всички права запазени.",
      designCredits: "Български Производител на Виенски Столове Тонет.",
      scrollTitle: "Нагоре",
    },
    EN: {
      aboutTitle: "About Lilovi 88",
      aboutDesc: "Established in 1996, Lilovi 88 is a premier family-owned manufacturer of handcrafted Viennese bentwood chairs in Bulgaria. We blend historic legacy steam-bending techniques with modern durability for upscale interiors.",
      
      chairsTitle: "Viennese Chairs",
      chairsClassic: "Classic No. 14 / No. 18",
      chairsEmbossed: "Embossed Series (154T)",
      chairsCross: "Cross-Back Series",
      chairsArm: "Premium Chairs & Armchairs",

      contactTitle: "Contact Coordinates",
      address: "44 Industrial Str., Sofia, Bulgaria",
      phone: "+359 888 88 88 88",
      email: "office@lilovi88.com",
      hours: "Mon - Fri: 09:00 - 18:00 (GMT+2)",

      catalogueTitle: "Catalogue & Sourcing",
      catalogueDesc: "Browse our 3D Digital Catalogue pagebook or subscribe for wholesale updates.",
      subPl: "Enter your email address...",
      subbed: "Welcome to the circle!",

      copyright: "© 2026 LILOVI 88. All rights reserved.",
      designCredits: "Bulgarian Manufacturer of Premium Thonet-style Bentwood Chairs.",
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 px-6 border-t border-neutral-800" id="footer-section">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Upper Grid of the requested 4 concerns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COLUMN 1: About */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm tracking-widest uppercase text-primary font-bold">
              {tr.aboutTitle}
            </h4>
            <p className="font-sans text-[13px] text-neutral-300 leading-relaxed font-light">
              {tr.aboutDesc}
            </p>
          </div>

          {/* COLUMN 2: Viennese Chairs direct anchors */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm tracking-widest uppercase text-primary font-bold">
              {tr.chairsTitle}
            </h4>
            <ul className="space-y-3 font-sans text-[13px] text-neutral-300 font-light">
              <li>
                <button 
                  onClick={() => scrollToSection("products-section")} 
                  className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  • {tr.chairsClassic}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products-section")} 
                  className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  • {tr.chairsEmbossed}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products-section")} 
                  className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  • {tr.chairsCross}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products-section")} 
                  className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  • {tr.chairsArm}
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm tracking-widest uppercase text-primary font-bold">
              {tr.contactTitle}
            </h4>
            <div className="space-y-4 font-sans text-[13px] text-neutral-300 font-light">
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
                <span>{tr.email}</span>
              </p>
              <p className="text-[11px] text-neutral-400 font-mono">
                {tr.hours}
              </p>
            </div>
          </div>

          {/* COLUMN 4: Catalogue & newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm tracking-widest uppercase text-primary font-bold">
              {tr.catalogueTitle}
            </h4>
            <p className="font-sans text-[13px] text-neutral-300 font-light leading-relaxed">
              {tr.catalogueDesc}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder={tr.subPl}
                  className="w-full bg-neutral-800 text-sm border border-neutral-700 focus:border-primary outline-none py-3 pl-4 pr-12 rounded-xl text-white placeholder-neutral-400 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-primary hover:bg-white hover:text-black transition-colors text-black cursor-pointer"
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

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection("catalogue-section")}
                className="inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-primary text-xs px-3.5 py-1.5 rounded-lg font-mono border border-primary/20 transition-all cursor-pointer"
              >
                <Bookmark className="w-3 h-3" />
                <span>{lang === "BG" ? "Отвори Каталог" : "Launch FlipBook"}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lower section */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs font-sans text-neutral-300 font-medium">
              {tr.copyright}
            </p>
            <p className="text-xs font-sans text-neutral-500">
              {tr.designCredits}
            </p>
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 group font-sans text-[12px] font-extrabold uppercase tracking-widest text-[#C5A880] hover:text-[#0d0d0e] hover:bg-primary transition-all px-5 py-2.5 rounded-full border border-[#C5A880]/30 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>{tr.scrollTitle}</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
