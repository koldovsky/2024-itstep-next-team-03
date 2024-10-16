"use client";
import React, { useState } from "react";
import PriceSlider from "./price-slider/price-slider";

const PriceFilter = () => {
  const [priceValue, setPriceValue] = useState<number[]>([4000, 8000]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center w-full gap-4">
        <input
          className="w-full border border-gray-300 pl-2 py-1 rounded-sm max-w-[100px] text-sm"
          type="number"
          min={0}
          value={priceValue[0]}
          onChange={(e) => setPriceValue((prev) => [+e.target.value, prev[1]])}
        />
        <input
          className="w-full border border-gray-300 pl-2 py-1 rounded-sm max-w-[100px] text-sm"
          type="number"
          min={0}
          value={priceValue[1]}
          onChange={(e) => setPriceValue((prev) => [prev[0], +e.target.value])}
        />
        <button className="py-1 px-5 bg-gray-100 text-black text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-sm">
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
