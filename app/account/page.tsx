import React from "react";
import PageHeading from "@/app/components/page-heading/page-heading";
import Button from "@/app/components/button/button";

export default function AccountPage() {
  return (
    <div className="w-full">
      <PageHeading
        params={{ content: "Profile", className: "capitalize mb-4 text-3xl" }}
      />

      <div className="flex justify-between gap-4">
        <div className="mb-6 w-1/2">
          <h2 className="text-md text-gray-500">Name</h2>
          <p className="text-lg">Mykhailo Nyskohuz</p>
        </div>

        <div className="mb-6 w-1/2">
          <h2 className="text-md text-gray-500">Email</h2>
          <p className="text-lg">mn508678@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          params={{
            content: "Change password",
            url: "/account/change-password",
            className: "primary-btn w-full",
          }}
        />
        <Button
          params={{
          content: "Edit",
          url: "/account/edit",
          className: "primary-btn w-full",
          }}
        />
      </div>
    </div>
  );
}
