import { fetchCategories } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetchCategories();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories." },
      { status: 500 }
    );
  }
}
