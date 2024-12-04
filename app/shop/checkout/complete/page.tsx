"use client";
import { useState, useEffect } from "react";

import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "@/app/components/page-heading/page-heading";
import OrderSidebar from "@/app/components/order-sidebar/order-sidebar";

import Button from "@/app/components/button/button";

import { getCart } from "@/app/utils/cart-utils";

export default function OrderCompletePage() {
  const [totalCost, setTotalCost] = useState<number>(0);

  const fetchCart = () => {
    const cart = getCart();

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

  const clearLocalStorage = () => {
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <BreadCrumbsBar params={{ url: `/shop/checkout/complete` }} />
      <div className="flex flex-col gap-4 mb-10">
        <PageHeading params={{ content: "Order complete" }} />
        <p>
          Thank you for your order. It will be processed soon. Please see the
          order details below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6 xl:gap-14">
        <div className="flex-[2] flex flex-col gap-10">
          <div className="flex flex-col gap-6 border p-10 text-sm h-fit">
            <p className="font-bold">Order details:</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <div>
                <p className="text-[var(--input-text-clr)] opacity-50 mb-2">
                  Payment:
                </p>
                <p>Not indicated</p>
              </div>
              <div>
                <p className="text-[var(--input-text-clr)] opacity-50 mb-2">
                  Order number:
                </p>
                <p>#81126</p>
              </div>
              <div>
                <p className="text-[var(--input-text-clr)] opacity-50 mb-2">
                  Status:
                </p>
                <p>New</p>
              </div>
              <div>
                <p className="text-[var(--input-text-clr)] opacity-50 mb-2">
                  Sum:
                </p>
                <p className="font-bold">{totalCost} ₴</p>
              </div>
            </div>
          </div>
          <Button
            params={{
              content: "Return to Home page",
              url: "/",
              className: "secondary-btn",
              onClick: clearLocalStorage,
            }}
          />
        </div>

        <OrderSidebar params={{ type: "complete" }} />
      </div>
    </div>
  );
}
