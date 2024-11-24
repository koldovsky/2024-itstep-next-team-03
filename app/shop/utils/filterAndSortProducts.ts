import { ProductSortCriteria } from "@/app/enum/ProductSortCriteria";
import { Product } from "@/app/lib/definitions";
import {
  defineSortCriteria,
  getSortedProducts,
} from "@/app/utils/sort-products";

export const filterAndSortProducts = (
  products: Product[],
  minPrice?: string | null,
  maxPrice?: string | null,
  sortBy?: string | null,
  producer?: string | null
) => {
  let result = products;

  if (minPrice || maxPrice) {
    const min = minPrice && !isNaN(Number(minPrice)) ? Number(minPrice) : 0;
    const max =
      maxPrice && !isNaN(Number(maxPrice)) ? Number(maxPrice) : Infinity;

    result = result.filter((product) => {
      const price = product.price;
      return price >= min && price <= max;
    });
  }

  if (sortBy) {
    try {
      const sortCriteria: ProductSortCriteria = defineSortCriteria(sortBy);
      result = getSortedProducts(sortCriteria, result);
    } catch (error) {
      console.error("Invalid sort criteria:", sortBy, error);
    }
  }

  if (producer) {
    const producers = producer
      .split(",")
      .map((item) => item.trim().replace("+", " "));

    result = result.filter(
      (product) =>
        product.manufacturer && producers.includes(product.manufacturer)
    );
  }

  return result;
};
