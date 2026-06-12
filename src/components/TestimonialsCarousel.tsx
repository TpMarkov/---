import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

interface TestimonialsCarouselProps {
  lang: "BG" | "EN";
}

export default function TestimonialsCarousel({ lang }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = {
    BG: [
      {
        quote: "Масата 'Nordic' от див дъб надмина всички очаквания за проекта ни в Лозенец. Две години по-късно повърхността има страхотна патина и няма никакво изкривяване на влакната. Препоръчвам без резерви.",
        author: "Арх. Силвия Василева",
        role: "Главен Дизайнер, S-Concept Studio",
        location: "София, България",
        rating: 5,
      },
      {
        quote: "Премиум изживяване. От конфигурирането на столовете през изпращането на мостри от дъб, до монтажа на левитиращото легло в спалнята. Lilovi знаят как се създава вечен лукс.",
        author: "д-р Калоян Димитров",
        role: "Директор, Клиника 'Медикус'",
        location: "Пловдив, България",
        rating: 5,
      },
      {
        quote: "За разлика от италианските вносители, Лилови ни предоставиха пълна адаптация по наши размери за ресторанта в Бояна. Акустичният профил на мебелите е фантастичен.",
        author: "арх. Мартин Иванов",
        role: "Основател, Studio Vertex",
        location: "Варна, България",
        rating: 5,
      }
    ],
    EN: [
      {
        quote: "The Nordic Solid Oak Table completely redefined the spacious luxury of our central Sofia penthouse project. The architectural weight and joinery are of museum quality. Two years in, and it remains absolutely immaculate.",
        author: "Silvia Vasileva, Architect",
        role: "Principal Director, S-Concept Studio",
        location: "Sofia, Bulgaria",
        rating: 5,
      },
      {
        quote: "True generational quality. The floating bouclé bed looks sculptural, and the acoustic absorption of the American Walnut Credenza inside our studio is phenomenal. Exceptional delivery pipeline.",
        author: "Dr. Kaloyan Dimitrov",
        role: "Collector & Creative Lead",
        location: "Plovdiv, Bulgaria",
        rating: 5,
      },
      {
        quote: "Lilov offers actual architectural customization that mass-manufacturers cannot dream of executing. Real timber thickness, natural beeswaxes, and no toxic resins. Pure, tactile form.",
        author: "Martin Ivanov, Architect",
        role: "Founder, Vertex Studios",
        location: "Sofia, Bulgaria",
        rating: 5,
      }
    ]
  }[lang];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const tr = {
    BG: {
      tag: "ОТЗИВИ И ДОВЕРИЕ // АРХИТЕКТУРЕН КЛАС",
      title: "Гласът на Пространствата",
      subtitle: "Прочетете мненията на водещи архитекти, интериорни дизайнери и собственици на изящни уеб-пространства, избрали ателие Lilovi.",
    },
    EN: {
      tag: "TESTIMONIALS & TRUST // ARCHITECTURAL GRADE",
      title: "Voices of Curated Spaces",
      subtitle: "Read recommendations from leading architects, spatial planners, and collectors who custom-specified Lilovi timber structures.",
    }
  }[lang];

  return (
    <section className="py-24 px-6 bg-white border-b border-primary/10 relative overflow-hidden" id="testimonials-section">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-sans text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase">
              {tr.tag}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-dark">
            {tr.title}
          </h2>
          <p className="font-sans text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Carousel Frame */}
        <div className="relative bg-[#FAF6F0] border border-[#C5A880]/15 rounded-[40px] p-8 md:p-14 shadow-sm hover:shadow-md transition-shadow duration-300">
          
          <Quote className="w-20 h-20 text-[#C5A880]/10 absolute top-8 left-8 pointer-events-none" />

          {/* Animating slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 relative z-10"
            >
              
              {/* Star Rating Rendering */}
              <div className="flex gap-1.5 justify-center md:justify-start">
                {Array(current.rating).fill(null).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 text-[#C5A880] fill-[#C5A880]" />
                ))}
              </div>

              {/* Quote Block Text */}
              <blockquote className="font-serif text-lg md:text-2xl text-dark leading-relaxed font-medium">
                “{current.quote}”
              </blockquote>

              <div className="pt-4 border-t border-[#C5A880]/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-[17px] font-bold text-dark">
                    {current.author}
                  </h4>
                  <p className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mt-0.5">
                    {current.role}
                  </p>
                </div>
                
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.16em] bg-white border border-[#C5A880]/20 px-3 py-1 rounded-full self-start md:self-center">
                  📍 {current.location}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Stepper buttons */}
          <div className="flex gap-3 justify-center md:justify-end mt-8 md:-mt-1 md:relative md:z-20">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-primary hover:text-dark rounded-full border border-[#C5A880]/25 transition-all cursor-pointer shadow-sm text-dark hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-primary hover:text-dark rounded-full border border-[#C5A880]/25 transition-all cursor-pointer shadow-sm text-dark hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
