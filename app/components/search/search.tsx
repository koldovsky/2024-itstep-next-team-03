'use client'

import { useState } from 'react'
import Input from '../input/input'
import SearchResult from './search-result'
import { Product } from '@/app/types/products'

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

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("gold")
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <div className="max-w-2xl relative mx-auto p-4">
      <Input
        type="search"
        placeholder="Search..."
        // labelName="Search Products"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-6 border-t-transparent border-l-transparent border-r-transparent border-b-1 border-gray-700 focus:border-orange-200 focus:border-l-transparent focus:border-r-transparent focus:border-t-transparent"        
      />
      <div className="space-y-6 absolute h-[400px] z-[195] border w-full bg-white p-4 overflow-y-auto">
        {filteredProducts.map((product) => (
            <SearchResult key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}