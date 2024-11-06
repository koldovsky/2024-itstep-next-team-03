"use client";
import { useSearchParams } from "next/navigation";
import { Category } from "@/app/lib/definitions";
import Button from "../../button/button";
import { useMemo } from "react";

const CategoryLink = ({ category }: { category: Category }) => {
  const { category_name } = category;
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort");

  const url = useMemo(() => {
    const categoryParam = `category=${category_name.toLowerCase()}`;
    return sortBy
      ? `/shop?sort=${sortBy}&${categoryParam}`
      : `/shop?${categoryParam}`;
  }, [sortBy, category_name]);

  return (
    <li className="w-full">
      <Button
        params={{
          content: category_name,
          url,
          className:
            "w-full text-start hover:text-primary transition-all duration-300 text-sm",
        }}
      />
    </li>
  );
};

export default CategoryLink;
