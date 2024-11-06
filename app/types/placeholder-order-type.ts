export interface orderType {
  id: number;
  totalCost: number;
  finalPrice: number;
  discount: number;
  products: Array<{
    id: number;
    image: string;
    title: string;
    customAttribute: string;
    price: number;
    amount: number;
    discount: number;
  }>;
}
