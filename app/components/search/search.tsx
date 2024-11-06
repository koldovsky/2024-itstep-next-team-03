'use client'

import { useState } from 'react'
import Input from '../input/input'
import SearchResult from './search-result'
import { Product } from '@/app/types/products'
import RightArrowIcon from '@/public/icons/right-arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
const products: Product[] = [
  {
    id: "15151",
    name: 'Gold earrings "Congo"',
    image: "https://v0.dev/placeholder.svg?height=200&width=400",
    originalPrice: 5200,
    currentPrice: 4600,
    inStock: true
  },
  {
    id: "15151",
    name: "Double gold pendant with round plate",
    image: "https://v0.dev/placeholder.svg?height=200&width=400",
    currentPrice: 7100,
    inStock: true
  },
  {
    id: "15152",
    name: "Gold bracelet with massive chain",
    image: "https://v0.dev/placeholder.svg?height=200&width=400",
    currentPrice: 8500,
    inStock: false
  }
]

type SearchProps = {  
  searchVisibility: boolean;
  setSearchVisibility: (visibility: boolean) => void;
}

export default function Search({ searchVisibility, setSearchVisibility }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
        // Clear filtered products if the search query is empty
        setFilteredProducts([]);
      } else {
        // Filter products based on the query
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      setFilteredProducts(filtered);
    }
  }

  return (
    <div className={`max-w-2xl relative mx-auto p-4 `}>
      <Input
        type="search"
        placeholder="Search..."
        // labelName="Search Products"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className={`mb-2 border-t-transparent border-l-transparent
         border-r-transparent border-b-1 border-gray-700 focus:border-orange-200 
         focus:border-l-transparent focus:border-r-transparent focus:border-b-black
        focus:border-t-transparent
        mt-4 
        
        
        `}        
      />
      {searchQuery.length > 0 && (
      <div className="space-y-6 absolute  mx-auto max-h-[60vh] mr-4 shadow-lg z-50 border  bg-white p-4 overflow-y-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <SearchResult key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center w-[100%] text-gray-500">No products found</p>
        )}
        {filteredProducts.length > 0 && (
        <div className="pb-3 flex items-center gap-2">
          <Link href={`/shop?search=${searchQuery}`} onClick={() => setSearchVisibility(false)} className="flex items-center gap-2">
          <span>All results</span>
          <Image className="w-4 h-4" src={RightArrowIcon} alt="Right arrow" />
          </Link>
        </div>
        )}
      </div>
      )}
      {/* <div>Look all results</div> */}
    </div>
  )
}