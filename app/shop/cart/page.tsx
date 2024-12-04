"use client";
import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "@/app/components/page-heading/page-heading";
import OrderProduct from "@/app/components/order-sidebar/order-product-card/order-product-card";
import { getCart } from "@/app/utils/cart-utils";
import React, { useState, useEffect } from "react";
import { CartItem } from "@/app/lib/definitions";

import Button from "@/app/components/button/button";

export default function ShoppingCart() {
  const [totalCost, setTotalCost] = useState<number>(0);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCart = () => {
    const cart = getCart();
    setCartItems(cart);

    const discountSum = cart.reduce(
      (sum, item) => sum + (item.discount || 0) * (item.quantity || 1),
      0
    );

    const total = cart.reduce(
      (sum, item) =>
        sum + (item.price || 0) * (item.quantity || 1) - discountSum,
      0
    );

    setTotalCost(Number(total.toFixed(2)));
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
    <div>
      <BreadCrumbsBar params={{ url: `/shop/cart` }} />
      <div className="flex flex-col gap-4 mb-10">
        <PageHeading params={{ content: "Shopping cart" }} />
      </div>
      <div>
        <div className="flex flex-row text-xs mb-4">
          <p className="flex md:flex-[2.2] lg:flex-[2]">Products</p>
          <div className="hidden md:flex md:flex-1 flex-row">
            <p className="hidden md:flex md:flex-1 flex-row">Cost</p>
            <p className="hidden md:flex md:flex-1 flex-row">Amount</p>
            <p className="hidden md:flex md:flex-1 flex-row justify-center">
              Price
            </p>
          </div>
        </div>
        <hr />
        {cartItems.map((product) => (
          <OrderProduct
            key={product.id}
            params={{
              id: product.id,
              src: product.image,
              alt: product.title,
              title: product.title,
              price: product.price || 0,
              quantity: product.quantity || 0,
              type: "cart",
              discount: product.discount,
            }}
          />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <div className="w-full md:w-fit flex flex-col gap-4 mt-8">
          <div className="font-bold text-xl flex flex-row justify-between gap-10">
            <p>Subtotal:</p>
            <p>{totalCost} ₴</p>
          </div>
          <Button
            params={{
              content: "Checkout",
              url: "/shop/checkout",
              className: "secondary-btn w-full",
            }}
          />
        </div>
      </div>
    </div>
  );
}
