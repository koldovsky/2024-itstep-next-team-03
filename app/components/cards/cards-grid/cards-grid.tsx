"use client";

import ProductCard from "../product-card/product-card";
import { Product } from "@/app/lib/definitions";
import { START_CURRENT_PAGE } from "@/app/constants/shopConstants";
import { paginateProducts } from "@/app/shop/utils/paginateProducts";
import SkeletonContainer from "../../product-skeleton";

interface CardsGridProps {
  params: {
    pageType: "home" | "shop";
    isLoading?: boolean;
    products?: Product[];
    currentPage?: number;
  };
}

export default function CardsGrid({ params }: CardsGridProps) {
  const {
    isLoading = false,
    pageType,
    currentPage = START_CURRENT_PAGE,
    products = [],
  } = params;

  const productsToDisplay = paginateProducts(currentPage, products);

  const gridClassName =
      pageType === "home"
          ? "sm:grid-cols-2 md:grid-cols-3"
          : "sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3";

  return (
      <div
          className={`grid justify-center gap-4 grid-rows-auto ${gridClassName}`}
      >
        {isLoading ? (
            <SkeletonContainer />
        ) : productsToDisplay.length > 0 ? (
            productsToDisplay.map(
                ({ product_id, product_name, price, image_url }) => (
                    <ProductCard
                        key={product_id}
                        id={product_id}
                        title={product_name}
                        price={price}
                        image={image_url}
                    />
                )
            )
        ) : (
            <div className="col-span-3 text-center mt-5 text-2xl font-bold">
              No products found.
            </div>
        )}
      </div>
  );
}
