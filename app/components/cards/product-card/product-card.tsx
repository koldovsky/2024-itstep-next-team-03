"use client";
import React, { useState } from "react";
import Image from "next/image";
import heart from "@/public/icons/heart.svg";
import heartBlack from "@/public/icons/heart-black.svg";
import ProductCardSwitch from "./product-card-switch";
import Button from "@/app/components/button/button";
import wishlistData from "@/app/lib/wishlist_data.json";
import { addToCart } from "@/app/utils/cart-utils";
import { CartItem } from "@/app/utils/cart-utils";


const ProductCard = ({ id, title, price, image, quantity }: CartItem) => {
  const [isInWishlist, setIsInWishlist] = useState(
    wishlistData.product_ids.includes(id)
  );

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      wishlistData.product_ids = wishlistData.product_ids.filter(
        (productId) => productId !== id
      );
      setIsInWishlist(false);
    } else {
      wishlistData.product_ids.push(id);
      setIsInWishlist(true);
    }
  };

  return (
    <div
      className={`shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex flex-col 
      flex-1 bg-white h-128 p-4 relative transition-all duration-300 hover:shadow-xl hover:shadow-gray-500 hover:z-20`}
    >
      <div
        className={`w-full relative flex-grow aspect-square overflow-hidden`}
      >
        <div
          className="absolute top-2 left-2 z-10 p-1.5 rounded-full flex items-center justify-center cursor-pointer
          hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-300 bg-white"
          onClick={handleWishlistToggle}
        >
          <Image
            src={isInWishlist ? heartBlack : heart}
            alt="Heart Icon"
            width={23}
            height={23}
          />
        </div>
        <Image
          src={image}
          alt="Product"
          width={200}
          height={200}
          className="w-full h-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={`text-gray-700 pt-3`}>
        <h1 className={`flex justify-between gap-4`}>
          <span className="text-base">{title}</span>
          <span className="text-base font-bold text-center">{price}€</span>
        </h1>
        <div className="flex flex-col justify-between mt-4 gap-4">
          <ProductCardSwitch />
          <Button
            params={{
              onClick: handleAddToCart,
              content: "Buy",
              url: `/shop/product/${id}`,
              className: "secondary-btn w-full",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
