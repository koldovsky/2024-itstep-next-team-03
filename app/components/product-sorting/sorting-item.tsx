"use client";
import { ProductSortCriteria } from "@/app/enum/ProductSortCriteria";
import { useRouter } from "next/navigation";
import React from "react";

type SortingItemProps = {
  sortBy: string;
  criteria: ProductSortCriteria;
  onSortItemClick: () => void;
};

const SortingItem = ({
  sortBy,
  criteria,
  onSortItemClick,
}: SortingItemProps) => {
  const router = useRouter();

  const handleSortItemClick = () => {
    router.push(`/shop?sort=${criteria}`);
    onSortItemClick();
  };

  return (
    <li
      onClick={handleSortItemClick}
      className="text-sm px-2 py-1 hover:bg-primaryclr transition-all duration-300 cursor-pointer"
    >
      {sortBy}
    </li>
  );
};

export default SortingItem;
