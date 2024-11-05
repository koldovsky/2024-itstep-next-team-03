import { Product } from "@/app/types/products";

type SearchResultProps = {
  product: Product;
};

const SearchResult = ({ product }: SearchResultProps) => (
  <div key={product.id} className="border-b pb-6">
<h2 className="text-xl font-semibold mb-2">{product.name}</h2>
<p className="text-sm text-gray-500 mb-2">#{product.id}</p>
<img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-cover mb-4"
/>
<div className="flex justify-between items-center">
  <div>
    {product.originalPrice && (
      <span className="text-gray-500 line-through mr-2">
        {product.originalPrice} ₴
      </span>
    )}
    <span className="text-xl font-bold">{product.currentPrice} ₴</span>
  </div>
  {product.inStock && (
    <span className="bg-primary/10 text-primary px-2 py-1 text-sm rounded">
          IN STOCK
        </span>
      )}
    </div>
  </div>
);

export default SearchResult;
