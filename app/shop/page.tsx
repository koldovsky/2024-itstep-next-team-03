"use client";
import PageHeading from "../components/page-heading/page-heading";
import CardsGrid from "../components/cards/cards-grid/cards-grid";
import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import ShopSidebar from "../components/shop-sidebar/shop-sidebar";
import ProductSorting from "../components/product-sorting";
import { useState } from "react";

export default function Shop() {
  const [isShopSidebarVisible, setIsShopSidebarVisible] =
    useState<boolean>(false);

  const handleOpenShopSidebar = () => {
    setIsShopSidebarVisible(true);
  };

  const handleCloseShopSidebar = () => {
    setIsShopSidebarVisible(false);
  };

  return (
    <div className="w-full ">
      <BreadCrumbsBar params={{ url: "/shop" }} />

      <div className="flex flex-row justify-between items-center mb-10">
        <PageHeading params={{ content: "Shop" }} />
        <ProductSorting handleFilterIconClick={handleOpenShopSidebar} />
      </div>

      <div className="w-full flex items-start gap-5">
        <ShopSidebar
          isShopSidebarVisible={isShopSidebarVisible}
          handleCloseShopSidebar={handleCloseShopSidebar}
        />
        <section className="flex-1">
          <CardsGrid params={{ pageType: "shop" }} />
        </section>
      </div>
    </div>
  );
}
