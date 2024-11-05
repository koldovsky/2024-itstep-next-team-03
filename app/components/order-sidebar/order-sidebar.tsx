"use client";

import CheckoutInput from "@/app/components/input/checkout-input";
import Button from "@/app/components/button/button";

import { order } from "@/app/lib/placeholder-order";

import OrderProduct from "./order-product-card/order-product-card";

// interface OrderSidebar {
//   params: {};
// }

export default function OrderSidebar() {
  return (
    <div className="bg-[var(--primary-clr)] h-full w-full flex-1 p-3">
      <div className="flex flex-col gap-6 p-5">
        <div className="flex flex-row justify-between text-sm">
          <p className="font-bold">Your order</p>
          <p className="text-[var(--input-text-clr)] underline decoration-dashed underline-offset-4">
            Edit
          </p>
        </div>
        <div
          className="flex flex-col overflow-y-scroll
                    orders-scrollbar h-48 gap-6"
        >
          {order.products.map((product) => (
            <OrderProduct
              params={{
                src: product.image,
                alt: product.title,
                title: product.title,
                customAttribute: product.customAttribute,
                price: product.price,
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col p-5 gap-4 text-xs">
        <div className="flex flex-row justify-between">
          <p>Cost of goods</p>
          <p className="font-bold">{order.totalCost} ₴</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Discount</p>
          <p className="font-bold">-{order.discount} ₴</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Shipping cost</p>
          <p className="font-bold">-</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col p-5 gap-2 h-fit items-start">
        <p className="text-xs">Enter promo code:</p>
        <div className="flex flex-row gap-4 h-[42px]">
          <CheckoutInput
            params={{
              type: "text",
              placeholder: "Promo code",
              className: "h-full",
            }}
          />
          <Button
            params={{
              content: "Ok",
              url: "/shop/checkout/",
              className: "h-full mt-1 checkout-btn",
            }}
          />
        </div>
      </div>
      <hr />
      <div className="flex p-5 gap-4 h-fit items-start justify-between">
        <p>Total:</p>
        <p className="font-bold">{order.finalPrice} ₴</p>
      </div>
    </div>
  );
}
