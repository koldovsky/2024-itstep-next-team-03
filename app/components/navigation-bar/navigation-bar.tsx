"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo-main.png";
import instagram from "@/public/icons/instagram.svg";
import facebook from "@/public/icons/facebook.svg";
import tiktok from "@/public/icons/tiktok.svg";
import heart from "@/public/icons/heart.svg";
import search from "@/public/icons/search.svg";
import cart from "@/public/icons/cart.svg";
import styles from "./navigation-bar.module.css";
import NavSidebar from "./nav-sidebar/nav-sidebar";

import { useState } from "react";

export default function NavigationBar() {
  const [sidebarVisibility, setSidebarVisibility] = useState<Boolean>(false);
  return (
    <nav
      className={`${styles.navigation} ${
        sidebarVisibility ? "ml-96" : ""
      } h-28 fixed w-full left-0 top-0 z-40 bg-white`}
    >
      <div className="container mx-auto flex justify-between h-28 items-center px-10 md:px-20">
        <div className="flex justify-start items-center mr-10">
          <div
            className={`${styles["burger-icon"]}`}
            onClick={() => setSidebarVisibility(!sidebarVisibility)}
          >
            <div
              className={`${styles.line} 
                ${sidebarVisibility ? `${styles["opened-line1"]}` : ""}`}
            ></div>
            <div
              className={`${styles.line} 
                ${sidebarVisibility ? `${styles["opened-line2"]}` : ""}`}
            ></div>
            <div
              className={`${styles.line} 
                ${sidebarVisibility ? `${styles["opened-line3"]}` : ""}`}
            ></div>
          </div>
        </div>
        <div className="flex flex-1 justify-start items-center gap-x-6">
          <div className="flex items-center gap-x-5">
            <Link href="https://www.instagram.com/" className="h-6 w-6">
              <Image src={instagram} alt="Instagram" />
            </Link>
            <Link href="https://www.tiktok.com/" className="h-6 w-6">
              <Image src={tiktok} alt="Tiktok" />
            </Link>
            <Link href="https://www.facebook.com/" className="h-6 w-6">
              <Image src={facebook} alt="Facebook" />
            </Link>
          </div>
          <Link href="#" className="hidden lg:block">
            +38 (099) 000 00 00
          </Link>
        </div>
        <Link href="/" className="flex flex-1 justify-center">
          <Image className="h-16 w-auto" src={logo} alt="Milk jewelry logo" />
        </Link>
        <div className="flex flex-1 justify-end items-center gap-x-6">
          <Link href="#" className="h-6 w-6">
            <Image src={heart} alt="Instagram" />
          </Link>
          <Link href="#" className="h-6 w-6">
            <Image src={search} alt="Tiktok" />
          </Link>
          <Link href="#" className="h-6 w-6">
            <Image src={cart} alt="Facebook" />
          </Link>
        </div>
      </div>
      <NavSidebar
        params={{
          navClassName: `${styles.sidebar} ${
            sidebarVisibility ? "w-96" : "w-0"
          }`,
          liClassName: `${styles.link} ${
            sidebarVisibility ? "opacity-100" : "opacity-0"
          }`,
        }}
      />
    </nav>
  );
}
