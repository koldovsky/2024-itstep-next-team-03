import { NUMBER_OF_PRODUCTS_PER_PAGE } from "@/app/constants/shopConstants";
import { Product } from "@/app/lib/definitions";

export const computeTotalPages = (products: Product[]) => {
  return products.length > 0
    ? Math.ceil(products.length / NUMBER_OF_PRODUCTS_PER_PAGE)
    : 0;
};
