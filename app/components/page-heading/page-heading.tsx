"use client";
import { useSearchParams } from "next/navigation";

interface PageHeadingProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function PageHeading({ params }: PageHeadingProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  let pageHeading = params.content;

  if (subcategory) {
    pageHeading = subcategory;
  } else if (category) {
    pageHeading = category;
  }

  return (
    <h1
      className={`${params.className} text-2xl md:text-3xl font-bold uppercase`}
    >
      {pageHeading}
    </h1>
  );
}
