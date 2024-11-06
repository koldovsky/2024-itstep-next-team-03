import { NextResponse, NextRequest } from "next/server";
import { fetchSubcategories } from "@/app/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  try {
    if (!category)
      return NextResponse.json(
        { message: "category is not provided" },
        { status: 400 }
      );
    const data = await fetchSubcategories(category!);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch subcategories:", error);
    return NextResponse.json(
      { message: "Failed to fetch subcategories." },
      { status: 500 }
    );
  }
}
