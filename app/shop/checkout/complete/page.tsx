import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "@/app/components/page-heading/page-heading";
import OrderSidebar from "@/app/components/order-sidebar/order-sidebar";

import { order } from "@/app/lib/placeholder-order";

export default function OrderCompletePage() {
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
        <div className="flex-[2] flex flex-col gap-6 border p-10 text-sm h-fit">
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
              <p className="font-bold">{order.finalPrice} ₴</p>
            </div>
          </div>
        </div>
        <OrderSidebar params={{ order, type: "complete" }} />
      </div>
    </div>
  );
}
