"use client";
import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "@/app/components/page-heading/page-heading";
import OrderSidebar from "@/app/components/order-sidebar/order-sidebar";

import { profileData } from "@/app/lib/placeholder-profile-data";
import CheckoutInput from "@/app/components/input/checkout-input";
import CheckoutTextarea from "@/app/components/input/checkout-textarea";
import Button from "@/app/components/button/button";

import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const [commentVisibility, setCommentVisibility] = useState<boolean>(false);

  return (
    <div>
      <BreadCrumbsBar params={{ url: `/shop/checkout` }} />
      <PageHeading params={{ content: "Checkout", className: "mb-10" }} />
      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className="flex-[2] flex flex-col gap-6">
          <div className="flex flex-row gap-2 text-sm">
            <p>
              You are logged in as {profileData.firstName}{" "}
              {profileData.lastName}
            </p>
            <Link
              href=""
              className="underline decoration-dashed underline-offset-4"
            >
              Log out
            </Link>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <CheckoutInput
              params={{
                labelName: "First name",
                type: "text",
                value: profileData.firstName,
              }}
            />
            <CheckoutInput
              params={{
                labelName: "Last name",
                type: "text",
                value: profileData.lastName,
              }}
            />
          </div>
          <div className="flex flex-row gap-4 w-full">
            <CheckoutInput
              params={{
                labelName: "Phone",
                type: "text",
                value: profileData.phone,
              }}
            />
            <CheckoutInput
              params={{
                labelName: "Email",
                type: "text",
                value: profileData.email,
              }}
            />
          </div>
          <div className="flex flex-row gap-4 w-full">
            <CheckoutInput
              params={{
                labelName: "Delivery country",
                type: "text",
                value: profileData.country,
              }}
            />
            <CheckoutInput
              params={{
                labelName: "City",
                type: "text",
                value: profileData.city,
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <CheckoutTextarea
              params={{
                className: `overflow-hidden transition-[max-height] duration-700 ease-in-out 
                            ${commentVisibility ? "max-h-40" : "max-h-0"}`,
                labelName: "Wishes",
              }}
            />
            <p
              className="cursor-pointer text-[var(--input-text-clr)] text-xs underline decoration-dashed underline-offset-4"
              onClick={() => setCommentVisibility(!commentVisibility)}
            >
              {commentVisibility ? "Hide" : "Add a comment"}
            </p>
          </div>
          <Button
            params={{
              content: "Checkout",
              url: "/shop/checkout/complete/id",
              className: "secondary-btn",
            }}
          />
        </div>
        <OrderSidebar />
      </div>
    </div>
  );
}
