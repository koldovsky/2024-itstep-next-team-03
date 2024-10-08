import React from "react";
import Image from "next/image";
import jewelryImage from "@/public/jewelry-2.jpg";

import ProductCounter from "@/app/ui/product-counter";
import ActionButton from "@/app/ui/action-button";
import Save from "@/app/ui/save";
import ProductFeedback from "@/app/ui/feedback/product-feedback";
import CharacteristicList from "@/app/ui/characteristic-list/characteristic-list";

import { ProductItem } from "@/app/types/products";
import { products } from "@/app/lib/placeholder-data";

const Product = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const product: ProductItem | undefined = products.find(
    (prod) => prod.id === +productId
  );

  if (!product) {
    return (
      <p className="flex items-center justify-center text-3xl font-bold">
        Product not found
      </p>
    );
  }
  const {
    productName,
    article,
    manufacturer,
    price,
    currency,
    description,
    attributes,
  } = product;

  return (
    <section className="p-3 sm:p-10 max-w-[1200px] mx-auto min-h-screen">
      {/* General Container */}
      <article className="min-h-screen">
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* Product Image Container */}
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-[600px] object-cover sticky top-0"
              src={jewelryImage}
              alt={`Image of ${productName}`}
              width={500}
              height={500}
            />
          </div>

          {/* Product Info Container */}
          <div className="py-2 w-full lg:w-1/2 h-[600px] overflow-y-auto custom-scrollbar">
            <h2 className="text-2xl font-bold mb-4">{productName}</h2>

            <p className="text-base text-gray-500 mb-4">
              Артикул: <span className="font-bold text-black">{article}</span>
            </p>

            <p className="text-base text-gray-500 mb-4">
              Виробник:{" "}
              <span className="font-bold text-black">{manufacturer}</span>
            </p>

            <p className="text-2xl text-gray-800 mb-5">
              {price} {currency} / шт
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 items-center mb-4 flex-wrap ">
              <ProductCounter />
              <ActionButton
                className="w-full md:w-fit order-last md:order-none"
                content="Придбати"
              />
              <Save />
            </div>

            {/* Characteristics Section */}
            <div className="w-full mb-10">
              <h2 className="text-2xl font-medium text-gray-700 mb-5">
                Характеристики
              </h2>
              <CharacteristicList attributes={attributes} />
            </div>

            {/* Description Section */}
            <div>
              <p className="bg-gray-500 text-white px-5 py-2 w-fit font-bold mb-3">
                Опис
              </p>
              <p className="text-gray-500 text-base w-full mb-3">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <ProductFeedback />
      </article>
    </section>
  );
};

export default Product;
