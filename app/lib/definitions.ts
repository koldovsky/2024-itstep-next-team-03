import { AttributeType } from "../types/products";

export type Category = {
  category_id: number;
  category_name: string;
  category_image_url?: string;
  subcategory_ids?: number[];
};

export type Product = {
  product_id: number;
  product_name: string;
  category_id: number | null;
  article: string | null;
  manufacturer: string | null;
  price: number;
  quantity_available: number | null;
  image_url: string;
  custom_parameters: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: AttributeType[];
  description: string | null;
};

export type Subcategory = {
  subcategory_id: number;
  subcategory_name: string;
  product_ids: number[];
};
