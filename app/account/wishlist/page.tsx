"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/app/lib/products_data.json";
import wishlistData from "@/app/lib/wishlist_data.json";
import { ProductItem } from "@/app/types/products";

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState<ProductItem[]>([]);

    useEffect(() => {
        const wishlistProductIds = wishlistData.product_ids;
        const filteredProducts = productsData.filter((product) =>
            wishlistProductIds.includes(product.id)
        );
        setWishlistItems(filteredProducts);
    }, []);

    const handleRemoveFromWishlist = (productId: number) => {
        const updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
        setWishlistItems(updatedWishlist);

        wishlistData.product_ids = wishlistData.product_ids.filter(id => id !== productId);
        console.log(`Product with ID ${productId} removed from wishlist`);
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="group">
                        <Link
                            href={`/shop/product/${item.id}`} // Dynamic product link
                            className="flex flex-col items-center text-center cursor-pointer"
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.productName}
                                width={200}
                                height={200}
                                className="w-full h-60 object-cover mb-2 transition-transform duration-300 group-hover:scale-105"
                            />
                            <h2 className="font-medium text-lg">{item.productName}</h2>
                        </Link>
                        <button
                            onClick={() => handleRemoveFromWishlist(item.id)}
                            className="text-sm mt-2 transition duration-200"
                        >
                            Remove from wishlist
                        </button>
                    </div>
                ))}
            </div>
            {wishlistItems.length === 0 && (
                <p className="text-lg font-bold">Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default WishlistPage;
