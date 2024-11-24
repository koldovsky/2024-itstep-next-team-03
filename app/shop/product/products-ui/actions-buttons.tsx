"use client";
import ProductCounter from "./product-counter";
import Button from "@/app/components/button/button";
import Wishlist from "@/app/components/wishlist/wishlist";
import { addToCart, isProductInCart } from "@/app/utils/cart-utils";
import { Product } from "@/app/lib/definitions";
import { useState, useEffect } from "react";
const ActionsButtons = ({ product }: { product: Product }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(isProductInCart(product.product_id));
  }, [product.product_id]);

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart({
        id: product.product_id,
        title: product.product_name,
        price: product.price,
        image: product.image_url,
        quantity: 1,
        discount: product.discount || 456,
      });
      setInCart(true);
    }
  };

  return (
    <div className="flex gap-4 items-center mb-4 flex-wrap min-h-14">
      <ProductCounter />

      <Button
        params={{
          content: inCart ? "Already in cart" : "Add to Cart",
          url: `/shop/product/${product.product_id}`,
          className: "secondary-btn h-14",
          onClick: handleAddToCart,
        }}
      />
      <Wishlist item={product} />
    </div>
  );
};

export default ActionsButtons;
