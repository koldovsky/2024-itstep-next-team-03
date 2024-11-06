"use client";
import { useEffect, useState } from "react";
import CategoryLink from "./category-link";
import { Category } from "@/app/lib/definitions";
import { useSearchParams } from "next/navigation";
import Subcategories from "./subcategories";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const url = "/api/categories";
        const response = await fetch(url);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    loadCategories();
  }, [category]);

  return (
    <ul className="flex flex-col gap-1">
      {category || subcategory ? (
        <Subcategories category={category} subcategory={subcategory} />
      ) : (
        categories.map((category) => (
          <CategoryLink key={category.category_id} category={category} />
        ))
      )}
    </ul>
  );
};

export default Categories;
