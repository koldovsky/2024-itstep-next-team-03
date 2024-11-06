"use client";
import { ProductSortCriteria } from "@/app/enum/ProductSortCriteria";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useMemo } from "react";

type SortingItemProps = {
  sortBy: string;
  criteria: ProductSortCriteria;
  onSortItemClick: () => void;
  handleSetSelectedCriteria: (criteria: string) => void;
};

const SortingItem = ({
  sortBy,
  criteria,
  onSortItemClick,
  handleSetSelectedCriteria,
}: SortingItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const url = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", criteria);
    return `/shop?${params.toString()}`;
  }, [criteria, searchParams]);

  const handleSortItemClick = () => {
    handleSetSelectedCriteria(sortBy);
    onSortItemClick();
    router.push(url);
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
