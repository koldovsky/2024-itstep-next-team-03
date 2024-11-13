import { fetchManufacturers } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetchManufacturers();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch manufacturers:", error);
    return NextResponse.json(
      { message: "Failed to fetch manufacturers." },
      { status: 500 }
    );
  }
}
