"use client";

import { useState } from "react";
import Input from "../input/input";
import SearchResult from "./search-result";
import RightArrowIcon from "@/public/icons/right-arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/definitions";
import { useEffect } from "react";

type SearchProps = {
  searchVisibility: boolean;
  setSearchVisibility: (visibility: boolean) => void;
};

export default function Search({ setSearchVisibility }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const url = `/api/products`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    loadProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className={`max-w-2xl z-50 relative mx-auto`}>
      <Input
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className={`mb-2 z-50 w-full border-t-transparent bg-white outline-none py-5 border-l-transparent
         border-r-transparent border-b-1 border-gray-700 focus:border-orange-200 
         focus:border-l-transparent focus:border-r-transparent focus:border-b-black
        focus:border-t-transparent
        mt-4
        `}
      />
      {searchQuery.length > 0 && (
        <div className="space-y-6 absolute w-full mx-auto max-h-[60vh] mr-4 shadow-lg z-50 border  bg-white p-4 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SearchResult key={product.product_id} product={product} />
            ))
          ) : (
            <p className="text-center w-full text-gray-500">
              No products found
            </p>
          )}
          {filteredProducts.length > 0 && (
            <div className="pb-3 flex items-center gap-2">
              <Link
                href={`/shop?search=${searchQuery}`}
                onClick={() => setSearchVisibility(false)}
                className="flex items-center gap-2"
              >
                <span>All results</span>
                <Image
                  className="w-4 h-4"
                  src={RightArrowIcon}
                  alt="Right arrow"
                />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
