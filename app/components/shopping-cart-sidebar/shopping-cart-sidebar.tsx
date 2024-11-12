import React, { useState } from "react";
import OrderProduct from "../order-sidebar/order-product-card/order-product-card";
import Button from "../button/button";
import ExpressCheckoutSidebar from "../express-checkout-sidebar/express-checkout-sidebar";

import { orderType } from "@/app/types/placeholder-order-type";

interface ShoppingCartSidebarType {
  params: {
    className: string;
    type: "checkout" | "complete";
    order: orderType;
    onClick: () => void;
  };
}

export default function ShoppingCartSidebar({ params }: ShoppingCartSidebarType) {
  const [isExpressCheckoutOpen, setIsExpressCheckoutOpen] = useState(false);

  const handleExpressCheckoutClick = () => {
    setIsExpressCheckoutOpen(true);
  };

  return (
      <>
        <div className={`${params.className} absolute z-50 top-0 h-[100vh] w-96 bg-white transition-all duration-500 p-4`}>
          <p className="text-2xl mb-4">Shopping cart</p>
          <hr />
          <div className="flex gap-6 flex-col h-[calc(100vh-400px)] overflow-y-scroll orders-scrollbar orders-scrollbar-checkout">
            {params.order.products.map((product) => (
                <OrderProduct
                    key={product.id}
                    params={{
                      src: product.image,
                      alt: product.title,
                      title: product.title,
                      customAttribute: product.customAttribute,
                      price: product.price,
                      discount: product.discount,
                      amount: product.amount,
                      type: params.type,
                    }}
                />
            ))}
          </div>

          <div className="absolute bottom-5 w-[calc(100%-40px)] flex flex-col justify-end gap-4 bg-white pt-5">
            <div className="flex flex-col gap-4 text-xs font-bold">
              <div className="flex flex-row justify-between">
                <p>Cost of goods</p>
                <p>{params.order.totalCost} ₴</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>Discount</p>
                <p>-{params.order.discount} ₴</p>
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
