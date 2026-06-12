import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

interface FAQSectionProps {
  lang: "BG" | "EN";
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const tr = {
    BG: {
      tag: "ЧЕСТО ЗАДАВАНИ ВЪПРОСИ // ЧЗВ",
      title: "Професионални Въпроси & Отговори",
      subtitle: "Всичко, което трябва да знаете за избора, здравината и поръчката на нашите виенски столове.",
      q1: "Какво представляват виенските столове?",
      a1: "Виенските столове (или чадърни/огънати столове) са класически модели мебели, изработени по традиционна технология за огъване на дървесина с пара под налягане. Този революционен занаятчийски метод е патентован от Михаел Тонет във Виена през XIX век и се отличава с обли форми, изключителна лекота на теглото и устойчивост на натоварване.",
      
      q2: "Защо столовете тип Thonet са толкова популярни?",
      a2: "Сериите Thonet съчетават изключителен минимализъм на формата с неочаквана здравина. Те са първият в света индустриален вечен бестселър — елегантни, без излишни метални сглобки, лесни за местене и адаптиращи се както към класически виенски кафенета, така и към модерни минималистични лофтове.",
      
      q3: "Подходящи ли са виенските столове за ресторанти?",
      a3: "Да, те са създадени точно за това. Олекотеното им тегло улеснява ежедневното почистване и пренареждане на залата, а допълнителните укрепващи дъги (цанги) между краката предотвратяват усукване и разглобяване дори след дълги години интензивна комерсиална експлоатация.",
      
      q4: "Може ли Lilovi 88 да произведе поръчки за хотели и мащабни обекти?",
      a4: "Като автентичен български производител с над 25 години опит, ние разполагаме с капацитета да захраним големи B2B поръчки за комплексно обзавеждане на хотели, ваканционни комплекси, вериги пицарии и ресторанти с еднакъв стандарт на качеството и спазени срокове на доставка.",
      
      q5: "Предлагате ли персонализирани финиши и тапицерия?",
      a5: "Да, предлагаме богати възможности за персонализация. Дървената конструкция може да бъде байцвана в десетки цветове — от естествен бук и меден дъб до венге или черен мат. Седалките могат да бъдат изработени от класически плетен ратан, релефна дървесина (модел 154T) или меко тапицирани с водоустойчиви микрофибърни платове или естествена анилинова кожа.",
      
      q6: "Извършвате ли международни доставки?",
      a6: "Да, Lilovi 88 доставя готова продукция до партньори, интериорни студиа и дистрибутори в цяла Европа. Организираме застрахован сухопътен и карго транспорт на палети за безопасна логистика директно от производствената ни база в България.",
    },
    EN: {
      tag: "KNOWLEDGE BASE // FAQ",
      title: "Expertise & FAQ",
      subtitle: "Everything you need to know about purchasing, specifying, and maintaining our premium Viennese bentwood collection.",
      q1: "What are Viennese chairs?",
      a1: "Vennese chairs (often called Thonet or bentwood chairs) are iconic furniture pieces made using steam-bent solid beechwood. Invented and patented by Michael Thonet in Vienna during the 19th century, this revolutionary craft creates sculptural, lightweight seating with organic circular lines and immense structural integrity.",
      
      q2: "Why are Thonet chairs so popular?",
      a2: "Thonet seating succeeded in blending structural minimalism with outstanding mechanical strength. Loved by architects for over 150 years, they occupy minimal physical space, introduce fluid lines into environments, and seamlessly accent classic bistros and contemporary spaces alike.",
      
      q3: "Are Viennese chairs suitable for restaurants and commercial dining?",
      a3: "Absolutely. Their lightweight build makes floor layout changes and daily cleaning exceptionally easy for service staff. Most importantly, our models are reinforced with secondary structural steam-bent arch rings, making them virtually indestructible under continuous heavy use.",
      
      q4: "Can Lilovi 88 manufacture chairs for hotels and large hospitality projects?",
      a4: "Yes. As a dedicated manufacturer with a 25-year heritage in Bulgaria, we possess the raw capacity and machinery to handle heavy B2B contract orders for major international hotel chains, restaurant franchises, and developer properties within reliable, strict timelines.",
      
      q5: "Do you offer custom stains, colors, and upholstery finishes?",
      a5: "Yes, customization is our core advantage. We offer a spectrum of wood stains (from raw beech and warm oak to walnut, wenge, and deep black aniline dyes). Seating can be configured with classic woven cane, embossed relief wood patterns, or upholstered with commercial-grade spot-resistant fabrics or premium leathers.",
      
      q6: "Do you ship internationally?",
      a6: "Yes. From our central European manufacturing facility in Bulgaria, we coordinate insured freight dispatch of full-pallet shipments directly to hospitality properties, interior studios, and furniture distributors throughout Europe.",
    },
  }[lang];

  const faqs = [
    { q: tr.q1, a: tr.a1 },
    { q: tr.q2, a: tr.a2 },
    { q: tr.q3, a: tr.a3 },
    { q: tr.q4, a: tr.a4 },
    { q: tr.q5, a: tr.a5 },
    { q: tr.q6, a: tr.a6 },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white border-b border-primary/10 relative scroll-mt-24" id="faq-section">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 border-b border-primary/20 pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
              {tr.tag}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-dark">
            {tr.title}
          </h2>
          <p className="font-sans text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Structured FAQ Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-3xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-[#FAF6F0]/60 border-primary/30 shadow-md shadow-primary/5" 
                    : "bg-transparent border-neutral-100 hover:border-neutral-200"
                }`}
                id={`faq-item-${idx}`}
              >
                {/* Accordion Trigger button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-serif text-base md:text-lg font-bold text-dark tracking-tight pr-2">
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? "bg-primary border-primary text-[#0d0d0e] rotate-90" 
                      : "bg-[#FAF6F0]/20 border-neutral-200 text-neutral-600"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-primary/5">
                        <p className="font-sans text-xs md:text-sm leading-relaxed text-neutral-600 font-light pr-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* hidden JSON-LD schema for Search Engine spiders (Technical SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

      </div>
    </section>
  );
}
