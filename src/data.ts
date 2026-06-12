import { Product, CataloguePage } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "thonet-classic",
    nameBG: "Стол Thonet (Класик)",
    nameEN: "Chair Thonet (Classic No. 18)",
    price: 185, // Pricing is kept in schema but hidden on the front-end to comply with 'no pricing on homepage'
    category: "classic",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Истинска европейска икона. Произведен по традиционна немска технология за парно огъване на масивна букова дървесина, с класически плетен ратан или плътен ергономичен седалков пръстен.",
    descriptionEN: "A true European design icon. Manufactured using traditional steam-bending techniques on solid beechwood, featuring an optional hand-woven organic rattan cane seat or a solid contoured ring.",
    materialsBG: ["Селективен масивен бук", "Естествен ратанов плет", "Био восъчен финиш"],
    materialsEN: ["Premium Solid Beechwood", "Natural Hand-Woven Cane", "Organic Beeswax Finish"],
    dimensions: "84 x 42 x 48 cm",
    isNew: true,
    designer: "Michael Thonet Tradition"
  },
  {
    id: "thonet-153",
    nameBG: "Стол Thonet 153",
    nameEN: "Chair Thonet 153",
    price: 195,
    category: "classic",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Вариация с изчистен силует и допълнителна заздравителна дъга, перфектен за натоварени ресторанти и виенски тип кафенета, изискващи изключителна лекота и здравина.",
    descriptionEN: "A structural masterpiece featuring a reinforced dual-arch design, specifically crafted to withstand high-traffic commercial environments like bistros and cafes.",
    materialsBG: ["Парно огънат бук", "Месингови сглобки"],
    materialsEN: ["Steam-bent Wild Beech", "Internal Brass Dowels"],
    dimensions: "85 x 43 x 47 cm",
    designer: "Lilovi 88 Atelier"
  },
  {
    id: "thonet-154",
    nameBG: "Стол Thonet 154",
    nameEN: "Chair Thonet 154 (Archway)",
    price: 215,
    category: "embossed",
    image: "https://images.unsplash.com/photo-1617806118233-18e1db207faf?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Изискан стол от масив с нежна вертикална рамка в облегалката. Осигурява плавна опора на гърба и придава въздушна текстура на трапезарията.",
    descriptionEN: "Elegant solid beechwood dining seating with beautiful vertical slats. Offers superb spine support and lightweight presence to high-concept spaces.",
    materialsBG: ["Масивен бук", "Естествени пигменти"],
    materialsEN: ["Solid Mountain Beech", "Natural Earth Pigments"],
    dimensions: "86 x 44 x 49 cm",
    isNew: true,
    designer: "Viennese Studio"
  },
  {
    id: "thonet-154t",
    nameBG: "Стол Thonet 154T",
    nameEN: "Chair Thonet 154T (Embossed)",
    price: 230,
    category: "embossed",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Лимитиран модел с художествено гравиран или ембосиран релеф по седалката и облегалката, пресъздаващ аристократичния дух на стара Виена.",
    descriptionEN: "Strictly limited artisan edition with custom engraved details across the seat and backing, resurrecting the artistic heritage of Viennese high society.",
    materialsBG: ["Ръчно гравиран бук", "Масло от ленено семе"],
    materialsEN: ["Artisanal Carved Beechwood", "Cold-Pressed Linseed Protection"],
    dimensions: "86 x 44 x 49 cm",
    designer: "Vintage Vienna Archetype"
  },
  {
    id: "cross-1",
    nameBG: "Стол Cross 1",
    nameEN: "Chair Cross 1 (Bistro Classic)",
    price: 175,
    category: "cross",
    image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Класическият френски бистро стол с кръстосани метални и дървени шини. Идеален за рустикални пространства, дизайнерски тераси и бутикови трапезарии.",
    descriptionEN: "The quintessential French bistro dining chair with elegant cross-straps. Brings unparalleled rustic elegance to boutique projects, cafes, and modern dining layouts.",
    materialsBG: ["Масивен бук", "Кръстосана патинирана стомана"],
    materialsEN: ["Premium Solid Hardwood", "Strap-steel Cross Supports"],
    dimensions: "88 x 45 x 46 cm",
    designer: "Parisian Design Guild"
  },
  {
    id: "cross-2",
    nameBG: "Стол Cross 2",
    nameEN: "Chair Cross 2 (Upholstered)",
    price: 198,
    category: "cross",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Комфортна версия на модела Cross с интегрирана мека тапицерия от анилинова кожа или луксозен текстил, съчетаваща класика с мекота при дълго седене.",
    descriptionEN: "Ultra-comfortable upgrade of the iconic Cross chair, featuring integrated soft padding in aniline leather or premium textured bouclé.",
    materialsBG: ["Масивен бук", "Анилинова кожа", "Акустична пяна"],
    materialsEN: ["Solid Oak Frame", "Soft Full Aniline Leather", "Acoustic Insulation Foam"],
    dimensions: "88 x 45 x 47 cm",
    isNew: true,
    designer: "High-End Bistro Series"
  },
  {
    id: "chair-154",
    nameBG: "Стол 154",
    nameEN: "Chair 154",
    price: 205,
    category: "armchair",
    image: "https://images.unsplash.com/photo-1601392740375-903c7ea75f11?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Чиста и непреходна геометрия. Проектиран с широк овален седалков пръстен за максимално разпределение на теглото в изтънчени интериори.",
    descriptionEN: "Purity of structural form. Engineered with a wide contoured ring seat to spread loads perfectly across upscale private and public properties.",
    materialsBG: ["Масивен родопски бук", "Органична вакса"],
    materialsEN: ["Solid Balkan Beechwood", "Natural Soya Bio-Wax"],
    dimensions: "84 x 46 x 48 cm",
    designer: "Atelier Lilovi Standard"
  },
  {
    id: "chair-154p",
    nameBG: "Стол 154P с Подлакътници",
    nameEN: "Chair 154P (With Armrests)",
    price: 245,
    category: "armchair",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Премиум версия с флуидни, парно огънати подлакътници, преливащи плавно от облегалката. Кралски комфорт за изискани хотели и конферентни зали.",
    descriptionEN: "Masterwork luxury chair featuring continuous steam-bent armrests transitioning into the back frame. Standard-setting ergonomics for fine halls and salons.",
    materialsBG: ["Масивен огънат бук", "Ергономично огънати подлакътници"],
    materialsEN: ["Steam-bent Beech Frame", "Seamless Solid Wooden Armrests"],
    dimensions: "84 x 52 x 50 cm",
    isNew: true,
    designer: "Master Carver Series"
  }
];

export const CATALOGUE_PAGES: CataloguePage[] = [
  {
    pageNumber: 1,
    titleBG: "Изкуството на Огънатата Дървесина",
    titleEN: "The Craft of Hand-Bent Beechwood",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Ръчна изработка по технологии от 1850-те години. Всяко дървено парче се омекотява с високо налягане на парата преди формоване.",
    descriptionEN: "Generational craftsmanship using legacy 1850s bending rigs. Every beechwood element is treated with high-pressure steam before master shaping.",
    featuredProductIds: ["thonet-classic", "thonet-153"]
  },
  {
    pageNumber: 2,
    titleBG: "Ресторантски Трапезни Проекти",
    titleEN: "Hostel & Fine Dining Spaces",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Чист, антистатичен финиш от пчелен восък и натурални защитни масла, сертифициран за интензивна търговска среда.",
    descriptionEN: "A clean, anti-static coating of organic beeswax and mineral wood oil, certified for commercial durability in luxury hospitality zones.",
    featuredProductIds: ["cross-1", "cross-2"]
  },
  {
    pageNumber: 3,
    titleBG: "Ергономичният Детайл на Седалката",
    titleEN: "Contoured Comfort Architecture",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Обмислена височина, здравина без пирони и сложни сглобки, които отговарят на класическите Тонет пропорции.",
    descriptionEN: "Precisely tuned dimensions, joinery constructed without weak metal screws, aligned faithfully to pure Thonet geometric benchmarks.",
    featuredProductIds: ["chair-154", "chair-154p"]
  }
];
