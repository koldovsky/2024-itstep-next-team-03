import { NextResponse } from "next/server";
import {
  fetchProducts,
  fetchProductsByCategory,
  fetchProductsBySubcategory,
} from "../../lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryName = searchParams.get("categoryName");
  const subcategoryName = searchParams.get("subcategoryName");

  try {
    let data;

    if (categoryName) {
      data = await fetchProductsByCategory(categoryName);
    } else if (subcategoryName) {
      data = await fetchProductsBySubcategory(subcategoryName);
    } else {
      data = await fetchProducts();
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products." },
      { status: 500 }
    );
  }
}
