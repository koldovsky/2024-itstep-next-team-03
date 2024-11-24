'use client'
import Image from "next/image";
import { useState } from "react";

import { decrementQuantity, incrementQuantity } from "@/app/utils/cart-utils";

interface OrderProductType {
  params: {
    id: number;
    src: string;
    alt: string;
    title: string;
    customAttribute: string;
    price: number;
    discount: number;
    amount: number;
    type: "checkout" | "complete" | "cart";
  };
}

export default function OrderProduct({ params }: OrderProductType) {
  const [quantity, setQuantity] = useState(params.amount);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      decrementQuantity(params.id);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    incrementQuantity(params.id);
  };

  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-row gap-6 text-xs">
        <div className="relative w-32 h-auto aspect-square lg:h-28 lg:w-28 xl:h-20 2xl:h-24">
          <Image
            src={params.src}
            alt={params.alt}
            sizes="auto auto"
            fill
            className="object-cover"
          />
        </div>
        <div
          className={`flex ${
            params.type === "cart"
              ? "flex-row items-start justify-between w-full"
              : "flex-col"
          } gap-2 mr-4 justify-between`}
        >
          <div className="flex flex-col gap-2">
            <p className="font-bold">{params.title}</p>
            <p
              className={
                params.type === "checkout"
                  ? ""
                  : "text-[var(--input-text-clr)] opacity-70"
              }
            >
              {params.customAttribute}
            </p>
            {params.type === "cart" && (
              <p className="text-[var(--input-text-clr)] underline decoration-dashed underline-offset-4">
                Remove
              </p>
            )}
          </div>

          {params.type === "checkout" || params.type === "cart" ? (
            <div
              className={`h-full md:h-fit flex flex-col md:flex-row items-center justify-end md:justify-between gap-4 md:gap-8 lg:gap-14`}
            >
              {params.discount === 0 ? (
                <p>{params.price} ₴</p>
              ) : (
                <div className="flex flex-col gap-1">
                  <p>{params.price - params.discount} ₴</p>
                  <p className="line-through text-[var(--input-text-clr)] opacity-70">
                    {params.price} ₴
                  </p>
                </div>
              )}
              <div className="h-6 w-fit text-xs px-2 border border-[var(--input-clr)] bg-white flex items-center gap-3 font-bold text-black">
                <button onClick={handleDecrement}>-</button>
                <div>{quantity}</div>
                <button onClick={handleIncrement}>+</button>
              </div>
              {params.type === "cart" && (
                <p className="hidden md:block">
                  {params.amount * (params.price - params.discount)} ₴
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                <p className="font-bold">Price:</p>
                <p className="text-[var(--input-text-clr)] opacity-70">
                  {params.price - params.discount} ₴
                </p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="font-bold">Quantity:</p>
                <p className="text-[var(--input-text-clr)] opacity-70">
                  {params.amount} pcs
                </p>
              </div>
              <p className="font-bold">
                {params.amount * (params.price - params.discount)} ₴
              </p>
            </div>
          )}

          {params.type === "checkout" && (
            <p className="text-[var(--input-text-clr)] underline decoration-dashed underline-offset-4">
              Remove
            </p>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
