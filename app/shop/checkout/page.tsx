import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "@/app/components/page-heading/page-heading";
import OrderSidebar from "@/app/components/order-sidebar/order-sidebar";

import CheckoutForm from "./checkout-form/checkout-form";
import { profileData } from "@/app/lib/placeholder-profile-data";

import Link from "next/link";
import { order } from "@/app/lib/placeholder-order";

export default function CheckoutPage() {
  return (
    <div>
      <BreadCrumbsBar params={{ url: `/shop/checkout` }} />
      <div className="flex flex-col gap-4 mb-10">
        <PageHeading params={{ content: "Checkout" }} />
        <div className="flex flex-row gap-2 text-sm">
          <p>
            You are logged in as {profileData.firstName} {profileData.lastName}
          </p>
          <Link
            href=""
            className="underline decoration-dashed underline-offset-4"
          >
            Log out
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-6 xl:gap-14">
        <CheckoutForm params={{ profileData }} />
        <OrderSidebar params={{ order, type: "checkout" }} />
      </div>
    </div>
  );
}
