import React from "react";
import LeftMenu from "./left-menu/left-menu";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftMenu />
      <div className="flex-grow p-4 lg:p-0 ">{children}</div>
    </div>
  );
}
