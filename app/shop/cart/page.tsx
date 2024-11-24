import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "@/app/components/page-heading/page-heading";
import OrderProduct from "@/app/components/order-sidebar/order-product-card/order-product-card";

import Button from "@/app/components/button/button";

import { order } from "@/app/lib/placeholder-order";

export default function ShoppingCart() {
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
        {order.products.map((product) => (
          <OrderProduct
            key={product.id}
            params={{
              id: product.id,
              src: product.image,
              alt: product.title,
              title: product.title,
              customAttribute: product.customAttribute,
              price: product.price,
              discount: product.discount,
              amount: product.amount,
              type: "cart",
            }}
          />
        ))}
      </div>
      <div className="w-full flex justify-end">
        <div className="w-full md:w-fit flex flex-col gap-4 mt-8">
          <div className="font-bold text-xl flex flex-row justify-between gap-10">
            <p>Subtotal:</p>
            <p>{order.finalPrice} ₴</p>
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
