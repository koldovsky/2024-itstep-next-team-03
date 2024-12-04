import { Product } from "@/app/lib/definitions";
import {
  START_CURRENT_PAGE,
  NUMBER_OF_PRODUCTS_PER_PAGE,
} from "@/app/constants/shopConstants";

export const paginateProducts = (currentPage: number, products: Product[]) => {
  const startIndex =
    (currentPage - START_CURRENT_PAGE) * NUMBER_OF_PRODUCTS_PER_PAGE;

  const productsToDisplay = products.slice(
    startIndex,
    startIndex + NUMBER_OF_PRODUCTS_PER_PAGE
  );

  return productsToDisplay;
};
