"use client";
import Categories from "./categories/categories";
import Filters from "./filters/filters";

type ShopSidebarProps = {
  isShopSidebarVisible: boolean;
  handleCloseShopSidebar: () => void;
};

const ShopSidebar = ({
  isShopSidebarVisible,
  handleCloseShopSidebar,
}: ShopSidebarProps) => {
  return (
    <div
      className={`lg:w-[250px] border border-gray-300 py-4 px-6 box-border text-textclr flex-col gap-5 lg:flex lg:static fixed z-50 lg:z-0 top-0 h-[100vh] lg:h-auto w-full 
              bg-white transition-all duration-500 ease-in-out p-5 overflow-y-auto ${
                isShopSidebarVisible
                  ? "right-0 opacity-100"
                  : "right-[-100%] opacity-0"
              } lg:right-auto lg:opacity-100`}
    >
      <div
        onClick={handleCloseShopSidebar}
        className="lg:hidden py-2 border-b border-gray-600 flex justify-end cursor-pointer mb-3"
      >
        <button className="text-base">X</button>
      </div>
      <Categories />
      <Filters />

      <button
        onClick={handleCloseShopSidebar}
        className="w-full py-2 text-black uppercase text-center bg-gray-200 font-bold lg:hidden mt-10"
      >
        View Products
      </button>
    </div>
  );
};

export default ShopSidebar;
