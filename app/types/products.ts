type ProductItem = {
  id: number;
  productName: string;
  category: string;
  article: string;
  manufacturer: string;
  price: number;
  currency: string;
  quantityAvailable: number;
  clasps: string[];
  attributes: AttributeType[];
  description: string;
};

type AttributeType = {
  attributeName: string;
  attributeValue: string;
};

export type { ProductItem, AttributeType };
