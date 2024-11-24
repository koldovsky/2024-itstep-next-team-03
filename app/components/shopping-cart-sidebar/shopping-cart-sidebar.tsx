"use client";

import React, { useState, useEffect } from "react";
import OrderProduct from "../order-sidebar/order-product-card/order-product-card";
import Button from "../button/button";
import ExpressCheckoutSidebar from "../express-checkout-sidebar/express-checkout-sidebar";
import { getCart } from "@/app/utils/cart-utils";
import { CartItem } from "@/app/lib/definitions";


import { orderType } from "@/app/types/placeholder-order-type";

interface ShoppingCartSidebarType {
  params: {
    className: string;
    type: "checkout" | "complete";
    order: orderType;
    isOpen: boolean;
    onClick: () => void;
  };
}

export default function ShoppingCartSidebar({
  params,
}: ShoppingCartSidebarType) {
  const [isExpressCheckoutOpen, setIsExpressCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const fetchCart = () => {
    const cart = getCart();
    setCartItems(cart);

    const total = cart.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
    const discount = cart.reduce(
      (sum, item) => sum + (item.discount || 0) * (item.quantity || 1),
      0
    );
    setDiscount(discount);
    setTotalCost(total);
  };

  useEffect(() => {
    if (params.isOpen) {
      fetchCart();
    }
  }, [params.isOpen]);

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



  useEffect(() => {
    const onStorageUpdate = () => fetchCart();
    window.addEventListener("storage", onStorageUpdate);

    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  const handleExpressCheckoutClick = () => {
    setIsExpressCheckoutOpen(true);
  };


  return (
    <>
      <div
        className={`${params.className} absolute z-50 top-0 h-[100vh] w-96 bg-white transition-all duration-500 p-4`}
      >
        <p className="text-2xl mb-4">Shopping cart</p>
        <hr />
        <div className="flex gap-6 flex-col h-[calc(100vh-400px)] overflow-y-scroll orders-scrollbar orders-scrollbar-checkout">
          {cartItems.map((product) => (
            <OrderProduct
              key={product.id}
              params={{
                id: product.id,
                src: product.image,
                alt: product.title,
                title: product.title,
                price: product.price || 0,
                amount: product.quantity || 0,
                type: params.type,
                customAttribute: "",
                discount: product.discount,
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-5 w-[calc(100%-40px)] flex flex-col justify-end gap-4 bg-white pt-5">
          <div className="flex flex-col gap-4 text-xs font-bold">
            <div className="flex flex-row justify-between">
              <p>Cost of goods</p>
              <p>{totalCost} €</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Discount</p>
              <p>-{discount} ₴</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Shipping cost</p>
              <p>-</p>
            </div>
          </div>
          <hr />

          <div className="flex flex-row justify-between font-bold">
            <Button
              params={{
                content: "Checkout",
                url: "/shop/checkout",
                className: "secondary-btn text-xs",
                onClick: params.onClick,
              }}
            />
            <Button
              params={{
                content: "Express checkout",
                url: "#",
                className: "secondary-btn text-xs",
                onClick: handleExpressCheckoutClick,
              }}
            />
          </div>
          <Button
            params={{
              content: "Continue shopping",
              url: "",
              className: "primary-btn text-xs w-full",
              onClick: params.onClick,
            }}
          />
        </div>
      </div>
      <ExpressCheckoutSidebar
        isOpen={isExpressCheckoutOpen}
        onClose={() => setIsExpressCheckoutOpen(false)}
        orderTotal={params.order.finalPrice}
      />
    </>
  );
}
