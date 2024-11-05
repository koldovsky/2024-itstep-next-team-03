type ProductItem = {
  id: number;
  productName: string;
  category: string;
  article: string;
  manufacturer: string;
  price: number;
  currency: string;
  quantityAvailable: number;
  clasps: string;
  attributes: AttributeType[];
  description: string;
  imageUrl: string;
};

type AttributeType = {
  attributeName: string;
  attributeValue: string;
};
type Product = {
  id: string
  name: string
  image: string
  originalPrice?: number
  currentPrice: number
  inStock: boolean
}
export type { ProductItem, AttributeType, Product };
