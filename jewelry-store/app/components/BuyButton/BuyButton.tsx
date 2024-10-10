import Link from "next/link";
import React from "react";

const BuyButton = () => {
  return (
    <Link href="/shop/product/1">
      <button className="bg-gray-200 text-black p-2 w-full text-center font-semibold mt-4 hover:bg-gray-300 active:bg-gray-400 active:scale-95 transition-all duration-300">
        Buy
      </button>
      ;
    </Link>
  );
};

export default BuyButton;
