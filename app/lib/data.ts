import { sql } from "@vercel/postgres";
import { Category, Product, Subcategory } from "./definitions";

export async function fetchCategories() {
  try {
    const data = await sql<Category>`SELECT * FROM category`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchProductsByCategory(categoryName: string) {
  try {
    const data = await sql<Product>`
      SELECT * FROM product
      JOIN category ON product.category_id = category.category_id
      WHERE category.category_name ILIKE ${`%${categoryName}%`}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProductsByCategoryId(
  categoryId: number,
  limit: number = 3
) {
  try {
    const data = await sql<Product>`
      SELECT * FROM product
     
      WHERE product.category_id = ${categoryId}
      LIMIT ${limit}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM product`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchProductsBySubcategory(subcategoryName: string) {
  const subcategory = await sql<Subcategory>`
    SELECT * FROM subcategory
    WHERE subcategory_name ILIKE ${`%${subcategoryName}%`}
  `;

  if (subcategory.rows.length === 0) return [];

  const { product_ids } = subcategory.rows[0];
  console.log(product_ids);

  if (!product_ids || product_ids.length === 0) return [];

  const products = [];
  for (const id of product_ids) {
    const product = await sql<Product[]>`
      SELECT * FROM product
      WHERE product_id = ${id}
    `;
    if (product.rows.length > 0) {
      products.push(product.rows[0]);
    }
  }

  return products;
}

export async function fetchSubcategories(category: string) {
  try {
    const data =
      await sql<Subcategory>`SELECT subcategory.subcategory_id, subcategory.subcategory_name
                          FROM category 
                          JOIN subcategory ON subcategory.subcategory_id = ANY(category.subcategory_ids)
                          WHERE category.category_name ILIKE ${`%${category}%`};`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch subcategories.");
  }
}

export async function fetchProductById(id: string) {
  try {
    const data =
      await sql<Product>`SELECT * FROM product WHERE product_id = ${parseInt(
        id,
        10
      )}`;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}
