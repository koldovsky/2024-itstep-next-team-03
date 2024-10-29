import React from "react";
import Categories from "./categories/categories";
import Filters from "./filters/filters";

const ShopSidebar = () => {
  return (
    <div className="w-1/3 border border-gray-300 py-4 px-6 box-border text-textclr flex flex-col gap-5">
      <Categories />
      <Filters />
    </div>
  );
};

export default ShopSidebar;
