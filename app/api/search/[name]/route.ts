import { NextResponse } from "next/server";
import { searchProductByName } from "@/app/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const productName = params.name;

  try {
    let data;

    if (productName) {
      data = await searchProductByName(productName);
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
