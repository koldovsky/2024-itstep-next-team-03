'use client';

import { IoPersonCircleOutline } from "react-icons/io5";
import { SlHeart } from "react-icons/sl";
import { LiaClipboardListSolid } from "react-icons/lia";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationMenu() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Profile', href: '/account', icon: <IoPersonCircleOutline size={23} /> },
    { name: 'Wishlist', href: '/account/wishlist', icon: <SlHeart size={22} /> },
    { name: 'Orders', href: '/account/orders', icon: <LiaClipboardListSolid size={23} /> },
  ];

  return (
    <div className=" lg:w-80 w-full bg-white lg:mr-5">
      <div className="flex items-center mb-4 border-b pb-4 ">
        <div className="text-lg bg-gray-100 rounded-full p-2 mr-2"><IoPersonCircleOutline size={38} /></div>
        <div className="flex flex-col">
          <div className="text-lg pb-0 mb-0">
            My Account
          </div>
          <div className="text-sm text-gray-500">mn508678@gmail.com</div>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="">
                <Link
                href={item.href}
                className={`flex items-center p-2 border-l-2 ${
                  isActive ? 'bg-gray-100 border-l-2 border-black' : 'border-white'
                } hover:bg-gray-100`}
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}