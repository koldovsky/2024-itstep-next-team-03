"use client";

import { useState } from "react";

import CheckoutInput from "@/app/components/input/checkout-input";
import CheckoutTextarea from "@/app/components/input/checkout-textarea";
import Button from "@/app/components/button/button";

import { ProfileDataType } from "@/app/types/placeholder-profile-data-type";

interface CheckoutFormType {
  params: {
    profileData: ProfileDataType;
  };
}

export default function CheckoutForm({ params }: CheckoutFormType) {
  const [commentVisibility, setCommentVisibility] = useState<boolean>(false);

  return (
    <div className="flex-[2] flex flex-col gap-6">
      <div className="flex flex-row gap-4 w-full">
        <CheckoutInput
          params={{
            labelName: "First name",
            type: "text",
            value: params.profileData.firstName,
          }}
        />
        <CheckoutInput
          params={{
            labelName: "Last name",
            type: "text",
            value: params.profileData.lastName,
          }}
        />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <CheckoutInput
          params={{
            labelName: "Phone",
            type: "text",
            value: params.profileData.phone,
          }}
        />
        <CheckoutInput
          params={{
            labelName: "Email",
            type: "text",
            value: params.profileData.email,
          }}
        />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <CheckoutInput
          params={{
            labelName: "Delivery country",
            type: "text",
            value: params.profileData.country,
          }}
        />
        <CheckoutInput
          params={{
            labelName: "City",
            type: "text",
            value: params.profileData.city,
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
          url: "/shop/checkout/complete",
          className: "secondary-btn",
        }}
      />
    </div>
  );
}
