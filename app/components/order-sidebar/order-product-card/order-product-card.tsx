import Image from "next/image";
import { useState } from "react";
import TrashCan from "../../../../public/icons/trash-can.svg";

import { decrementQuantity, incrementQuantity, removeFromCart } from "@/app/utils/cart-utils";

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
    type: "checkout" | "complete";
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

  const handleRemove = () => {
    removeFromCart(params.id);
  };

  return (
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex flex-row gap-6 text-xs relative">
          <div className="relative w-32 h-auto aspect-square lg:h-16 lg:w-28 xl:h-20 2xl:h-24">
            <Image
                src={params.src}
                alt={params.alt}
                sizes="auto auto"
                fill
                className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 mr-4 justify-between flex-grow">
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
            </div>

            <div className="flex flex-col gap-1">
              <p>
                {params.discount === 0
                    ? `${params.price} ₴`
                    : `${params.price - params.discount} ₴`}
              </p>
              {params.discount !== 0 && (
                  <p className="line-through text-[var(--input-text-clr)] opacity-70">
                    {params.price} ₴
                  </p>
              )}
              {params.type === "checkout" && (
                  <div className="h-6 w-fit text-xs px-2 border border-[var(--input-clr)] bg-white flex items-center gap-3 font-bold text-black">
                    <button onClick={handleDecrement}>-</button>
                    <div>{quantity}</div>
                    <button onClick={handleIncrement}>+</button>
                  </div>
              )}
              {params.type === "complete" && (
                  <div className="flex flex-row gap-1">
                    <p className="font-bold">Quantity:</p>
                    <p className="text-[var(--input-text-clr)] opacity-70">
                      {params.amount} pcs
                    </p>
                  </div>
              )}
            </div>
          </div>
          {params.type === "checkout" && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
                <div
                    onClick={handleRemove}
                    className="cursor-pointer transition-transform duration-200 flex items-center justify-center"
                >
                  <Image
                      src={TrashCan}
                      alt="Remove"
                      width={24}
                      height={24}
                      className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              </div>
          )}
        </div>
        <hr />
      </div>
  );
}
