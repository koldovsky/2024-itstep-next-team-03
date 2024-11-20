import { NextResponse } from "next/server";
import { fetchProductsCount } from "../../lib/data";

export async function GET() {
  try {
    const count = await fetchProductsCount();
    return NextResponse.json({ success: true, count });
  } catch (error) {
    console.error("Error fetching products count:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch products count." },
      { status: 500 }
    );
  }
}
