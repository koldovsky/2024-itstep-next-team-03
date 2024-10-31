"use client";
import Image from "next/image";
import heart from "@/public/icons/heart.svg";
import { ProductItem } from "@/app/types/products";

type AddToWishlistProps = {
    item: ProductItem;
};

const AddToWishlist = ({ item }: AddToWishlistProps) => {
    const handleAddToWishlist = async () => {
        try {
            // delete when connect to backend
            const storedWishlist = localStorage.getItem("wishlist");
            const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

            if (!wishlist.find((product: ProductItem) => product.id === item.id)) {
                wishlist.push(item);
                localStorage.setItem("wishlist", JSON.stringify(wishlist)); // delete when connect to backend
                console.log("Product added to wishlist:", item);
            }
        } catch (error) {
            console.error("Error adding product to wishlist:", error);
        }
    };

    return (
        <button onClick={handleAddToWishlist} className="group">
            <Image
                className="group-hover:scale-125 transition-all duration-300 flex-1"
                src={heart}
                alt="Add to wishlist"
                width={20}
                height={20}
            />
        </button>
    );
};

export default AddToWishlist;
