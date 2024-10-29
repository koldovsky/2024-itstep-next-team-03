"use client";
import React, { useState } from "react";
import SortingItem from "./sorting-item";
import Button from "../button/button";
import Image from "next/image";
import sort from "@/public/icons/sort.svg";

import { SORTING_OPTIONS } from "./sorting-options";

const ProductSorting = () => {
  const [isSortingOpen, setIsSortingOpen] = useState<boolean>(false);

  const toggleIsSortingOpen = () => {
    setIsSortingOpen((prev) => !prev);
  };

  return (
    <div className="relative flex flex-row gap-4 items-center ">
      <p>Sort by:</p>

      <Button
        params={{
          content: "Popular",
          url: "",
          className: "sort-btn h-7 text-sm px-3",
          onClick: toggleIsSortingOpen,
        }}
      />

      <Image src={sort} alt="Sort button" className="h-6 w-6" />

      <div
        className={`absolute top-8 right-0 w-70 z-50 bg-white shadow-md ${
          isSortingOpen ? "block" : "hidden"
        }`}
      >
        <ul className="w-full flex flex-col">
          {SORTING_OPTIONS.map((sortItem) => (
            <SortingItem
              key={sortItem.id}
              sortBy={sortItem.sortBy}
              criteria={sortItem.criteria}
              onSortItemClick={toggleIsSortingOpen}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSorting;
