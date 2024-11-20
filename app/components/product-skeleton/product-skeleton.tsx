import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="h-6 w-6 bg-gray-200 rounded-full mb-4"></div>

      <div className="h-40 bg-gray-200 rounded-md mb-4"></div>

      <div className="h-4 bg-gray-200 rounded-md mb-2 w-3/4"></div>

      <div className="h-4 bg-gray-200 rounded-md mb-4 w-1/3"></div>

      <div className="flex gap-2 mb-4">
        <div className="h-8 w-20 bg-gray-200 rounded-md"></div>
        <div className="h-8 w-20 bg-gray-200 rounded-md"></div>
      </div>

      <div className="h-10 bg-gray-200 rounded-md w-full"></div>
    </div>
  );
};

export default ProductSkeleton;
