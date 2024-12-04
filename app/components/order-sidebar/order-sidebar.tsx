"use client";
import { useState, useEffect } from "react";
import OrderProduct from "./order-product-card/order-product-card";
import OrderPromoCode from "./order-promo-code/order-promo-code";

import { CartItem } from "@/app/lib/definitions";
import { getCart } from "@/app/utils/cart-utils";

import Link from "next/link";

interface OrderSidebarType {
  params: {
    type: "checkout" | "complete";
  };
}

export default function OrderSidebar({ params }: OrderSidebarType) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [discount, setDiscount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  const fetchCart = () => {
    const cart = getCart();
    setCartItems(cart);

    const totalCost = cart.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );

    const discount = cart.reduce(
      (sum, item) => sum + (item.discount || 0) * (item.quantity || 1),
      0
    );

    const finalPrice = totalCost - discount;

    setDiscount(Number(discount.toFixed(2)));
    setTotalCost(Number(totalCost.toFixed(2)));
    setFinalPrice(Number(finalPrice.toFixed(2)));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleLocalStorageUpdate = (event: CustomEvent) => {
    const { key } = event.detail;
    if (key === "cart") {
      fetchCart();
    }
  };

  useEffect(() => {
    window.addEventListener("localStorageUpdate", (event: Event) => {
      const customEvent = event as CustomEvent;
      handleLocalStorageUpdate(customEvent);
    });
  }, []);

  return (
    <div
      className={`h-full w-full flex-1 p-3
    ${
      params.type === "checkout"
        ? "bg-[var(--primary-clr)]"
        : "bg-[var(--order-sidebar-clr)]"
    }`}
    >
      <div className="flex flex-col gap-6 p-5">
        <div className="flex flex-row justify-between text-sm">
          <p className="font-bold">Your order</p>
          {params.type === "checkout" && (
            <Link
              href="/shop/cart"
              className="text-[var(--input-text-clr)] underline decoration-dashed underline-offset-4"
            >
              Edit
            </Link>
          )}
        </div>
        <div
          className={`${
            params.type === "checkout"
              ? "orders-scrollbar-checkout"
              : "orders-scrollbar-order"
          }
          "flex flex-col overflow-y-scroll orders-scrollbar h-48 gap-6"`}
        >
          {cartItems.map((product) => (
            <OrderProduct
              key={product.id}
              params={{
                id: product.id,
                src: product.image,
                alt: product.title,
                title: product.title,
                price: product.price,
                discount: product.discount,
                quantity: product.quantity,
                type: params.type,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col p-5 gap-4 text-xs">
        <div className="flex flex-row justify-between">
          <p>Cost of goods</p>
          <p className="font-bold">{totalCost} ₴</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Discount</p>
          <p className="font-bold">-{discount} ₴</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Shipping cost</p>
          <p className="font-bold">-</p>
        </div>
      </div>
      <hr />

      {params.type === "checkout" && <OrderPromoCode />}
      {params.type === "checkout" && <hr />}

      <div className="flex p-5 gap-4 h-fit items-start justify-between">
        <p>Total:</p>
        <p className="font-bold">{finalPrice} ₴</p>
      </div>
    </div>
  );
}
