"use client";

import { useState } from "react";
import Input from "../input/input";
import SearchResult from "./search-result";
import RightArrowIcon from "@/public/icons/right-arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/definitions";
import { useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
type SearchProps = {
  searchVisibility: boolean;
  setSearchVisibility: (visibility: boolean) => void;
};

export default function Search({ setSearchVisibility }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);



  const fetchProducts = useCallback(async (query: string) => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    setIsLoading(true);
    try {
      const url = `/api/search/${encodeURIComponent(query)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setFilteredProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(debouncedQuery);
  }, [debouncedQuery, fetchProducts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div className="max-w-2xl z-50 relative mx-auto">
      <Input
        type="search"
        placeholder="Search..."
        autoFocus
        value={searchQuery}
        onChange={handleSearch}
        className="mb-2 z-50 w-full border-t-transparent bg-white outline-none py-5 border-l-transparent
         border-r-transparent border-b-1 border-gray-700 focus:border-orange-200 
         focus:border-l-transparent focus:border-r-transparent focus:border-b-black
         focus:border-t-transparent mt-4"
      />
      {searchQuery.length > 0 && (
        <div className="space-y-6 absolute w-full mx-auto max-h-[60vh] mr-4 shadow-lg z-50 border bg-white p-4 overflow-y-auto">
          {isLoading ? (
            <p className="text-center w-full text-gray-500">Loading...</p>
          ) : filteredProducts.length > 0 ? (
            <>
              {filteredProducts.map((product) => (
                <Link
                  href={`/shop/product/${product.product_id}`}
                  key={product.product_id}
                  onClick={() => setSearchVisibility(false)}
                >
                  <SearchResult product={product} />
                </Link>
              ))}
              <div className="pb-3 flex items-center gap-2">
                <Link
                  href={`/shop?search=${encodeURIComponent(searchQuery)}`}
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
            </>
          ) : (
            <p className="text-center w-full text-gray-500">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

