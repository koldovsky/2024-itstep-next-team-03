"use client";
import React, { useState, ChangeEvent } from "react";

const ProductCounter = () => {
  const [countValue, setCountValue] = useState<number>(2);

  const incrementCount = () => {
    setCountValue((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (countValue === 1) return;
    setCountValue((prev) => prev - 1);
  };

  const handleCountInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (+value < 0) return;
    setCountValue(+value);
  };

  return (
    <div className="h-full w-fit px-5 border border-gray-300 flex items-center gap-7 font-bold text-black">
      <button onClick={decrementCount} className="text-2xl">
        -
      </button>

      <input
        value={countValue}
        onChange={handleCountInputChange}
        className="w-4 outline-none border-0 text-center"
      />

      <button onClick={incrementCount} className="text-2xl">
        +
      </button>
    </div>
  );
};

export default ProductCounter;
