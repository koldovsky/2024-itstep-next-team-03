import React from "react";
import Image from "next/image";
import ActionsButtons from "@/app/shop/product/products-ui/actions-buttons";


import ProductFeedback from "@/app/shop/product/products-ui/feedback/product-feedback";
import CharacteristicList from "@/app/shop/product/products-ui/characteristic-list/characteristic-list";
import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";

import RelatedProducts from "@/app/components/similiar-products";
import { fetchProductById } from "@/app/lib/data";
import { Product as ProductItem } from "@/app/lib/definitions";

const Product = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const product: ProductItem = await fetchProductById(productId);

  if (!product) {
    return (
      <p className="flex items-center justify-center text-3xl font-bold">
        Product not found
      </p>
    );
  }

  const {
    category_id,
    product_name,
    image_url,
    article,
    manufacturer,
    price,
    attributes,
    description,
  } = product;

  return (
    <div>
      <BreadCrumbsBar params={{ url: `/shop/${product_name}` }} />
      <section className="p-3 sm:py-10 max-w-[1400px] mx-auto min-h-screen ">
        {/* General Container */}
        <article className="min-h-screen">
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Product Image Container */}
            <div className="w-full lg:w-1/2">
              <Image
                className="w-full h-[600px] object-cover sticky top-0"
                src={image_url}
                alt={`Image of ${product_name}`}
                width={500}
                height={500}
              />
            </div>

            {/* Product Info Container */}
            <div className="py-2 w-full lg:w-1/2 h-[600px] overflow-y-auto custom-scrollbar">
              <h2 className=" text-xl md:text-2xl font-bold mb-4">
                {product_name}
              </h2>

              <p className="text-sm md:text-base text-gray-500 mb-4">
                SKU: <span className="font-bold text-black">{article}</span>
              </p>

              <p className="text-base text-gray-500 mb-4">
                Manufacturer:{" "}
                <span className="font-bold text-black">{manufacturer}</span>
              </p>

              <p className="text-xl md:text-2xl text-gray-800 mb-5">
                {price} € / pcs
              </p>

              {/* Action Buttons */}
              <ActionsButtons product={product} />

              {/* Characteristics Section */}
              <div className="w-full mb-10">
                <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-5">
                  Characterisctics
                </h2>
                <CharacteristicList attributes={attributes} />
              </div>

              {/* Description Section */}
              <div>
                <p className="bg-gray-500 text-white px-5 py-2 w-fit font-bold mb-3">
                  Description
                </p>
                <p className="text-gray-500 text-base w-full mb-3">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <ProductFeedback />
          <RelatedProducts categoryId={category_id!} />
        </article>
      </section>
    </div>
  );
};

export default Product;
