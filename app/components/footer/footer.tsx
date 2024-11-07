"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "./social-link";
import logo from "@/public/images/logo-main.png";
import facebook from "@/public/icons/facebook-black.svg";
import instagram from "@/public/icons/instagram-black.svg";
import telegram from "@/public/icons/telegram.svg";
import youtube from "@/public/icons/youtube.svg";
import tiktok from "@/public/icons/tiktok-black.svg";
import person from "@/public/icons/person.svg";
import visa from "@/public/icons/visa.svg";
import mastercard from "@/public/icons/mastercard.svg";
import styles from "./footer.module.css";
import { navigationLinks } from "@/app/lib/navigation-links";
import AuthSidebar from "@/app/components/auth-sidebar/auth-sidebar";

export default function Footer() {
  const [isAuthSidebarOpen, setAuthSidebarOpen] = useState(false);

  const toggleAuthSidebar = () => setAuthSidebarOpen(!isAuthSidebarOpen);

  return (
      <>
        <div className={`${styles["footer-border"]} w-full`}>
          <ul className="mx-auto h-28 flex flex-row items-center justify-center gap-6 text-sm">
            {navigationLinks.map((navigationLink) => (
                <Link key={navigationLink.id} href={`/${navigationLink.link}`} className="duration-300 hover:text-[var(--secondary-clr)]">
                  {navigationLink.linkName}
                </Link>
            ))}
          </ul>
        </div>
        <div className={`${styles.navigation} h-fit w-full`}>
          <div className="container mx-auto flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between py-10 items-center px-10 lg:px-28">
            <div className="flex flex-1 flex-col gap-4 items-center md:items-start">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Personal office</p>
                <button onClick={toggleAuthSidebar} className="flex flex-row gap-3 items-center duration-300 hover:text-[var(--secondary-clr)]">
                  <Image src={person} alt="Profile button" className="w-8 h-8"/>
                  <p>Profile</p>
                </button>
              </div>
              <div>
                <p className="font-bold">Pay by card</p>
                <div className="flex flex-row gap-4 items-center">
                  <Image src={visa} width={30} height={30} alt="Visa" className="w-auto h-12" />
                  <Image src={mastercard} width={30} height={30} alt="Mastercard" className="invert w-auto h-5" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 justify-center items-center gap-x-6 h-full">
              <Link href="/">
                <Image className="h-16 w-auto" src={logo} alt="Milk jewelry logo" />
              </Link>
              <div className="flex flex-row gap-2">
                <SocialLink params={{url: "https://www.facebook.com/", src: facebook}}/>
                <SocialLink params={{url: "https://www.instagram.com/", src: instagram}}/>
                <SocialLink params={{url: "https://web.telegram.org/a/", src: telegram}}/>
                <SocialLink params={{url: "https://www.youtube.com/", src: youtube}}/>
                <SocialLink params={{url: "https://www.tiktok.com/", src: tiktok}}/>
              </div>
              <p>Name of shop © 2024</p>
            </div>
            <div className="flex flex-1 justify-end items-center gap-x-6 hidden md:flex"></div>
          </div>
        </div>
        <AuthSidebar isOpen={isAuthSidebarOpen} onClose={toggleAuthSidebar} />
      </>
  );
}
