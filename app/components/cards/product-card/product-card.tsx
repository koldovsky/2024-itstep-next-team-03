"use client";
import React from "react";
import styles from "./product-card.module.css";
import Image from "next/image";
import heart from "@/public/icons/heart.svg";
import ProductCardSwitch from "./product-card-switch";
import Button from "@/app/components/button/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <div
      className={`shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex flex-col 
        flex-1 bg-white h-128 p-4 ${styles.container} relative transition-all duration-300 hover:shadow-xl hover:shadow-gray-500 hover:z-20`}
    >
      <div
        className={`w-full ${styles.imageContainer} relative flex-grow aspect-square overflow-hidden`}
      >
        <div
          className="absolute top-2 left-2 bg-white z-10 p-1.5 rounded-full flex items-center justify-center 
        cursor-pointer hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all duration-300"
        >
          <Image src={heart} alt="Heart Icon" width={23} height={23} />
        </div>
        <Image src={image} alt="Product" width={200}
    height={200}
    className="w-full h-auto"
    style={{ objectFit: 'contain' }} />
      </div>
      <div className={`${styles.contentContainer} text-gray-700 pt-3`}>
        <h1 className={`flex flex-col items-center gap-4`}>
          <span className="text-base text-center">{title}</span>
          <span className="text-base font-bold text-center">{price}€</span>
        </h1>
        <div className="flex flex-col justify-between mt-4 gap-4">
          <ProductCardSwitch />
          <Button
            params={{
              content: "Buy",
              url: "/shop/product/1",
              className: "secondary-btn w-full",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
