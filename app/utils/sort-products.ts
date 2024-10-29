import { Product } from "../components/cards/cards-grid/cards-grid";
import { ProductSortCriteria } from "../enum/ProductSortCriteria";

export const getSortedProducts = (
  criteria: ProductSortCriteria,
  products: Product[]
): Product[] => {
  switch (criteria) {
    case ProductSortCriteria.CHEAP:
      return products.sort((a, b) => a.price - b.price);
    case ProductSortCriteria.EXPENSIVE:
      return products.sort((a, b) => b.price - a.price);
    default:
      return products.sort((a, b) => a.id - b.id);
  }
};

export const defineSortCriteria = (criteria: string): ProductSortCriteria => {
  switch (criteria.toLowerCase()) {
    case "cheap":
      return ProductSortCriteria.CHEAP;
    case "expensive":
      return ProductSortCriteria.EXPENSIVE;
    default:
      return ProductSortCriteria.DEFAULT;
  }
};
