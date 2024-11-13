'use client'

import { IoPersonCircleOutline } from "react-icons/io5";
import { SlHeart } from "react-icons/sl";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

import React from 'react';
import Link from 'next/link';

interface ProfileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    userEmail?: string;
}

export default function ProfileSidebar({ isOpen, onClose, userEmail = "mn508678@gmail.com" }: ProfileSidebarProps) {

    const menuItems = [
        { name: 'Profile', href: '/account', icon: <IoPersonCircleOutline size={23} /> },
        { name: 'Wishlist', href: '/account/wishlist', icon: <SlHeart size={22} /> },
        { name: 'Orders', href: '/account/orders', icon: <LiaClipboardListSolid size={23} /> },
    ];

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-10 z-50 flex justify-end backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white max-w-md h-full overflow-y-auto w-96 p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center mb-4 border-b pb-4 justify-between">
                    <div className="flex items-center">
                        <div className="text-lg bg-gray-100 rounded-full p-2 mr-2">
                            <IoPersonCircleOutline size={38}/>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg pb-0 mb-0">
                                My Account
                            </div>
                            <div className="text-sm text-gray-500">{userEmail}</div>
                        </div>
                    </div>
                    <button onClick={onClose} className="font-serif text-4xl">×</button>
                </div>

                <ul className="border-b border-gray-200 mb-4">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center p-2 hover:bg-gray-100`}
                            >
                                {item.icon && <span className="mr-3">{item.icon}</span>}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center pb-4 p-3">
                    <IoIosLogOut size={23} />
                    <p className="pl-3">Log Out</p>
                </div>
            </div>
        </div>
    );
}