'use client'

import React from "react";
import { useState } from 'react'
import PageHeading from "@/app/components/page-heading/page-heading";
import Button from "@/app/components/button/button";
import ChangePasswordSidebar from '../components/change-password-sidebar/change-password-sidebar'

export default function AccountPage() {
    const [isChangePasswordSidebarOpen, setChangePasswordSidebarOpen] = useState(false);

  return (
      <div className="w-full">
          <PageHeading
              params={{content: "Profile", className: "capitalize mb-4 text-3xl"}}
          />

          <div className="flex flex-col md:flex-row justify-between gap-4">
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
              <button
                  onClick={() => setChangePasswordSidebarOpen(true)}
                  className="w-full md:w-auto secondary-btn"
              >
                  Change password
              </button>
              {isChangePasswordSidebarOpen && (
                  <ChangePasswordSidebar onClose={() => setChangePasswordSidebarOpen(false)} />
              )}

              <Button
                  params={{
                      content: "Edit",
                      url: "/account/editprofile",
                      className: "w-full md:w-auto secondary-btn",
                  }}
              />
          </div>
      </div>
  );
}
