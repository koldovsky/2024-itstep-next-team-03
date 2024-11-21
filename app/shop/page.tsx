"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/app/lib/definitions";
import PageHeading from "../components/page-heading/page-heading";
import CardsGrid from "../components/cards/cards-grid/cards-grid";
import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import ShopSidebar from "../components/shop-sidebar/shop-sidebar";
import ProductSorting from "../components/product-sorting";
import Pagination from "../components/pagination";
import { START_CURRENT_PAGE } from "../constants/shopConstants";
import { filterAndSortProducts } from "./utils/filterAndSortProducts";
import { computeTotalPages } from "./utils/computeTotalPages";

export default function Shop() {
  const [isShopSidebarVisible, setIsShopSidebarVisible] =
      useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(START_CURRENT_PAGE);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort");
  const category = searchParams.get("category")
      ? decodeURIComponent(searchParams.get("category")!)
      : null;
  const subcategory = searchParams.get("subcategory")
      ? decodeURIComponent(searchParams.get("subcategory")!)
      : null;
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const producer = searchParams.get("producer");

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (category) params.append("categoryName", category);
        if (subcategory) params.append("subcategoryName", subcategory);

        const url = `/api/products?${params.toString()}`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [category, subcategory]);

  const handleOpenShopSidebar = () => {
    setIsShopSidebarVisible(true);
  };

  const handleCloseShopSidebar = () => {
    setIsShopSidebarVisible(false);
  };

  const filteredAndSortedProducts = useMemo(
      () => filterAndSortProducts(products, minPrice, maxPrice, sortBy, producer),
      [products, minPrice, maxPrice, sortBy, producer]
  );

  const numberOfPages = useMemo(
      () => computeTotalPages(filteredAndSortedProducts),
      [filteredAndSortedProducts]
  );

  return (
      <div className="w-full">
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
            <CardsGrid
                params={{
                  pageType: "shop",
                  isLoading,
                  products: filteredAndSortedProducts,
                  currentPage,
                }}
            />
          </section>
        </div>

        <Pagination
            numberOfPages={numberOfPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
      </div>
  );
}
