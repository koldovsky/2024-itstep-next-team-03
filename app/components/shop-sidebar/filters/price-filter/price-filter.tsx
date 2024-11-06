"use client";
import React, { useState, useMemo } from "react";
import PriceSlider from "./price-slider/price-slider";
import { useRouter, useSearchParams } from "next/navigation";

const PriceFilter = () => {
  const [priceValue, setPriceValue] = useState<number[]>([4000, 8000]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const url = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("minPrice", priceValue[0].toString());
    params.set("maxPrice", priceValue[1].toString());
    return `/shop?${params.toString()}`;
  }, [priceValue, searchParams]);

  const handleClickButton = () => {
    router.push(url);
  };

  // Input change handler with basic validation
  const handlePriceInputChange = (index: 0 | 1, value: string) => {
    const newValue = Number(value);
    if (!isNaN(newValue) && newValue >= 0) {
      setPriceValue((prev) =>
        index === 0 ? [newValue, prev[1]] : [prev[0], newValue]
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center w-full gap-4">
        <input
          className="w-full border border-gray-300 pl-2 py-1 rounded-sm max-w-[100px] text-sm"
          type="number"
          min={0}
          value={priceValue[0]}
          onChange={(e) => handlePriceInputChange(0, e.target.value)}
        />
        <input
          className="w-full border border-gray-300 pl-2 py-1 rounded-sm max-w-[100px] text-sm"
          type="number"
          min={0}
          value={priceValue[1]}
          onChange={(e) => handlePriceInputChange(1, e.target.value)}
        />
        <button
          onClick={handleClickButton}
          className="py-1 px-5 bg-gray-100 text-black text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-sm"
        >
          OK
        </button>
      </div>

      <PriceSlider
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        min={0}
        max={20000}
      />
    </div>
  );
};

export default PriceFilter;
