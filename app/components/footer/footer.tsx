import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo-main.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${styles["footer-border"]} w-full`}>
        <div className="mx-auto h-28 flex flex-row items-center justify-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/for-customers">Buyers</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </div>
      <div className={`${styles.navigation} h-40 w-full`}>
        <div className="container mx-auto px-2 flex justify-between h-28 items-center">
          <div className="flex flex-1 justify-start items-center gap-x-6"></div>
          <Link href="/" className="flex flex-1 justify-center">
            <Image className="h-16 w-auto" src={logo} alt="Milk jewelry logo" />
          </Link>
          <div className="flex flex-1 justify-end items-center gap-x-6"></div>
        </div>
      </div>
    </>
  );
}
