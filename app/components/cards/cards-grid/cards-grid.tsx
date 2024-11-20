"use client";
import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "../product-card/product-card";
import { useSearchParams } from "next/navigation";
import {
  defineSortCriteria,
  getSortedProducts,
} from "@/app/utils/sort-products";
import { ProductSortCriteria } from "@/app/enum/ProductSortCriteria";
import { Product } from "@/app/lib/definitions";
import ProductSkeleton from "../../product-skeleton";

interface CardsGridType {
  params: { pageType: "home" | "shop" };
}

export default function CardsGrid({ params }: CardsGridType) {
  const [products, setProducts] = useState<Product[]>([]);
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
        let url = "/api/products";
        if (category) {
          url += `?categoryName=${encodeURIComponent(category)}`;
        }
        if (subcategory) {
          url += `?subcategoryName=${encodeURIComponent(subcategory)}`;
        }

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

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    if (minPrice || maxPrice) {
      result = result.filter((product) => {
        const price = product.price;
        return price >= Number(minPrice) && price <= Number(maxPrice);
      });
    }

    if (sortBy) {
      const sortCriteria: ProductSortCriteria = defineSortCriteria(sortBy);
      result = getSortedProducts(sortCriteria, result);
    }

    if (producer) {
      result = result.filter((product) => {
        const producers = producer
          .split(",")
          .map((item) => item.replace("+", " "));
        return producers.includes(product.manufacturer!);
      });
    }

    return result;
  }, [products, minPrice, maxPrice, sortBy, producer]);

  return (
    <div
      className={`${
        params.pageType === "home"
          ? "sm:grid-cols-2 md:grid-cols-3"
          : "sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      } grid justify-center gap-4 grid-rows-auto`}
    >
      {isLoading ? (
        Array.from({ length: 10 }, (_, index) => (
          <ProductSkeleton key={index} />
        ))
      ) : filteredAndSortedProducts.length > 0 ? (
        filteredAndSortedProducts.map(
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
