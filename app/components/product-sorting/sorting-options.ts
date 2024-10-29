import { ProductSortCriteria } from "./../../enum/ProductSortCriteria";

export const SORTING_OPTIONS = [
  {
    id: 1,
    sortBy: "From cheapest to most expensive",
    criteria: ProductSortCriteria.CHEAP,
  },
  {
    id: 2,
    sortBy: "From most expensive to cheapest",
    criteria: ProductSortCriteria.EXPENSIVE,
  },
  {
    id: 3,
    sortBy: "New arrivals",
    criteria: ProductSortCriteria.NEWEST,
  },
  {
    id: 4,
    sortBy: "On sale",
    criteria: ProductSortCriteria.DISCOUNT,
  },
  {
    id: 5,
    sortBy: "Default",
    criteria: ProductSortCriteria.DEFAULT,
  },
];
