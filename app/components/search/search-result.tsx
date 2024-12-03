import Link from "next/link";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";

const SearchResult = ({ product }: { product: Product }) => (
  <div key={product.product_id} className="border-b pb-6">
    <div>
      <h2 className="text-xl font-semibold mb-2">{product.product_name}</h2>
      <p className="text-sm text-gray-500 mb-2">#{product.product_id}</p>
    </div>
    <Image
      src={product.image_url}
      alt={product.product_name}
      className="w-full h-48 object-cover mb-4"
      width={400}
      height={400}
    />
    <div className="flex justify-between items-center">
      <div>
        {product.price && (
          <span className="text-gray-500 line-through mr-2">
            {product.price} ₴
          </span>
        )}
        <span className="text-xl font-bold">{product.price} ₴</span>
      </div>
      {product.quantity_available && (
        <span className="bg-primary/10 text-primary px-2 py-1 text-sm rounded">
          IN STOCK
        </span>
      )}
    </div>
  </div>
);

export default SearchResult;
