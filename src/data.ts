import { Product, CataloguePage } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    nameBG: "Кадифен Фотьойл 'Astrid'",
    nameEN: "Astrid Velvet Lounge Chair",
    price: 1240,
    category: "living",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Скулптурен фотьойл с първокласна кадифена тапицерия и месингови детайли. Идеален акцент за изискани дневни пространства.",
    descriptionEN: "A sculptural armchair showcasing premium velvet upholstery and warm brass accents. The perfect statement piece for refined living spaces.",
    materialsBG: ["Кралско кадифе", "Масивен бук", "Месингови акценти"],
    materialsEN: ["Royal Velvet", "Solid Beechwood", "Polished Brass"],
    dimensions: "85 x 82 x 78 cm",
    isNew: true,
    designer: "Studio Robert Dabi"
  },
  {
    id: "p2",
    nameBG: "Дъбова Трапезна Маса 'Nordic'",
    nameEN: "Nordic Solid Oak Dining Table",
    price: 2850,
    category: "dining",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Минималистична трапезна маса от селектиран див дъб с естествен маслен финиш. Изразява чистата скандинавска философия.",
    descriptionEN: "A minimalist dining centerpiece made from select wild oak with a natural oil treatment. Embodying pure Scandinavian design philosophy.",
    materialsBG: ["Масивен див дъб", "Натурално немско масло"],
    materialsEN: ["Solid Wild Oak", "Natural German Bio-Oil"],
    dimensions: "220 x 95 x 75 cm",
    isNew: true,
    designer: "Henrik Rolf"
  },
  {
    id: "p3",
    nameBG: "Кожен Диван 'Vesper'",
    nameEN: "Vesper Premium Aniline Sofa",
    price: 5400,
    category: "living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Луксозен триместен диван, тапициран с висококачествена анилинова кожа, която придобива изключителна патина в процеса на ползване.",
    descriptionEN: "Luxurious three-seater sofa wrapped in buttery-soft full-aniline leather, engineered to age into a beautiful, historic patina.",
    materialsBG: ["Естествена анилинова кожа", "Рамка от лята стомана", "Гъши пух"],
    materialsEN: ["Full-Aniline Leather", "Cast Steel Frame", "Chambered Goose Down"],
    dimensions: "240 x 100 x 68 cm",
    designer: "Piero Lissoni"
  },
  {
    id: "p4",
    nameBG: "Орехов Скрин 'Linea'",
    nameEN: "Linea Walnut Credeza & Sideboard",
    price: 3100,
    category: "dining",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Изискан нисък скрин с плавно затварящи се чекмеджета и сложни 3D фрезовани релефни линии по дължината на лицевата част.",
    descriptionEN: "Sophisticated low credenza featuring flush soft-closing push drawers and intricate, custom 3D-milled linear grooves.",
    materialsBG: ["Американски орех", "Фурнирован МДФ кант", "Blum обков"],
    materialsEN: ["American Walnut", "MDF Core Veneer", "Blum Motion Guides"],
    dimensions: "180 x 48 x 72 cm",
    designer: "Alvar Aalto Studio"
  },
  {
    id: "p5",
    nameBG: "Легло Елизиан 'Elysian'",
    nameEN: "Elysian Bouclé Floating Bed",
    price: 3900,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Легло с ефект на левитация, тапицирано в мека италианска текстура букле. Оборудвано с интегрирано индиректно диодно осветление.",
    descriptionEN: "Floating aesthetic bed frame upholstered in Italian organic textured bouclé fabric. Equipped with integrated indirect LED warm lighting.",
    materialsBG: ["Текстуриран плат букле", "Масивен ясен", "Алуминиева база"],
    materialsEN: ["Textured Bouclé Fabric", "Solid Ashwood", "Anodized Aluminum Frame"],
    dimensions: "200 x 220 x 110 cm",
    isNew: true,
    designer: "Vincent Van Duysen"
  },
  {
    id: "p6",
    nameBG: "Минималистично Писалище 'Kyoto'",
    nameEN: "Kyoto Editorial Study Desk",
    price: 1950,
    category: "office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Писалище с изчистен силует, вдъхновен от японската архитектура. Интегрирани кабели, таен органайзер и кожени вложки.",
    descriptionEN: "Study desk with a purity of outline inspired by Japanese master builders. Features integrated cable gates and a leather desktop pad.",
    materialsBG: ["Овъглен ясен (Shou Sugi Ban)", "Естествена телешка кожа"],
    materialsEN: ["Charred Ashwood", "Full Grain Table Leather"],
    dimensions: "140 x 70 x 74 cm",
    designer: "Kengo Kuma Associates"
  }
];

export const CATALOGUE_PAGES: CataloguePage[] = [
  {
    pageNumber: 1,
    titleBG: "Концепция за Пространствена Тишина",
    titleEN: "Concept of Spatial Serenity",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Новият ни каталог представя балансиран прочит на интериорното пространство, където празнотата се среща с занаятчийската прецизност.",
    descriptionEN: "Our new season layout initiates a balanced lecture on interior voids where pristine negative space meets generational craftsmanship.",
    featuredProductIds: ["p1", "p3"]
  },
  {
    pageNumber: 2,
    titleBG: "Ерата на Устойчивите Култури",
    titleEN: "The Era of Organic Cohabitation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Избор на чисти органични суровини: сертифициран масивен дъб и естествени защитни восъци за здравословна жизнена среда.",
    descriptionEN: "Selection of non-toxic materials: FSC-certified European hardwoods and bio-friendly waxes for standard-defining pure living zones.",
    featuredProductIds: ["p2", "p4"]
  },
  {
    pageNumber: 3,
    titleBG: "Изчистена Линия на Съня",
    titleEN: "Symmetrical Lines of Slumber",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    descriptionBG: "Дневна и нощна светлина, подчертаващи финия релеф на буклето и плавните криви на мебелните корпуси.",
    descriptionEN: "Interplay between light and texturing, showcasing detail profiles of low-hanging fixtures, fabrics, and structural joinery.",
    featuredProductIds: ["p5"]
  }
];
