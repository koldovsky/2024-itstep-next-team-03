import React from "react";
import ProductSkeleton from "./product-skeleton";
import { NUMBER_OF_PRODUCTS_PER_PAGE } from "@/app/constants/shopConstants";

const SkeletonContainer = () => {
  return (
    <>
      {Array.from({ length: NUMBER_OF_PRODUCTS_PER_PAGE }, (_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </>
  );
};

export default SkeletonContainer;
