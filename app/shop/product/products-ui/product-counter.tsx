"use client";
import React, { ChangeEvent } from "react";

interface ProductCounterProps {
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}

const ProductCounter = ({ quantity, setQuantity }: ProductCounterProps) => {
  const incrementCount = () => {
    setQuantity(quantity + 1);
  };

  const decrementCount = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleCountInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (+value < 0) return;
    setQuantity(+value);
  };

  return (
    <div className="h-14 w-fit px-5 border border-gray-300 flex items-center gap-7 font-bold text-black">
      <button onClick={decrementCount} className="text-xl md:text-2xl">
        -
      </button>

      <input
        value={quantity}
        onChange={handleCountInputChange}
        className="w-4 outline-none border-0 text-center"
      />

      <button onClick={incrementCount} className="text-xl md:text-2xl">
        +
      </button>
    </div>
  );
};

export default ProductCounter;
