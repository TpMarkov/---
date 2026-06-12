export interface Product {
  id: string;
  nameBG: string;
  nameEN: string;
  price: number;
  category: "classic" | "embossed" | "cross" | "armchair";
  image: string;
  descriptionBG: string;
  descriptionEN: string;
  materialsBG: string[];
  materialsEN: string[];
  dimensions: string;
  isNew?: boolean;
  designer: string;
}

export interface CataloguePage {
  pageNumber: number;
  titleBG: string;
  titleEN: string;
  image: string;
  descriptionBG: string;
  descriptionEN: string;
  featuredProductIds: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFinish: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  items: {
    productId: string;
    quantity: number;
    finish: string;
  }[];
  preferredContact: "email" | "phone";
}
