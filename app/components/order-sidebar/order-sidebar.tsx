import OrderProduct from "./order-product-card/order-product-card";
import OrderPromoCode from "./order-promo-code/order-promo-code";

import { orderType } from "@/app/types/placeholder-order-type";

interface OrderSidebarType {
  params: {
    order: orderType;
    type: "checkout" | "complete";
  };
}

export default function OrderSidebar({ params }: OrderSidebarType) {
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
            <p className="text-[var(--input-text-clr)] underline decoration-dashed underline-offset-4">
              Edit
            </p>
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
      </div>

      <div className="flex flex-col p-5 gap-4 text-xs">
        <div className="flex flex-row justify-between">
          <p>Cost of goods</p>
          <p className="font-bold">{params.order.totalCost} ₴</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Discount</p>
          <p className="font-bold">-{params.order.discount} ₴</p>
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
        <p className="font-bold">{params.order.finalPrice} ₴</p>
      </div>
    </div>
  );
}
