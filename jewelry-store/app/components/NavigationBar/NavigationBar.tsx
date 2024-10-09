import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-main.png";
import instagram from "../../../public/icons/instagram.svg";
import facebook from "../../../public/icons/facebook.svg";
import tiktok from "../../../public/icons/tiktok.svg";
import heart from "../../../public/icons/heart.svg";
import search from "../../../public/icons/search.svg";
import cart from "../../../public/icons/cart.svg";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <nav className={`${styles.navigation} h-28 fixed w-full left-0 top-0`}>
      <div className="container mx-auto px-2 flex justify-between h-28 items-center">
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
          <Link href="#" className="sm:hidden lg:block">
            +38 (099) 000 00 00
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <Image className="h-16 w-auto" src={logo} alt="Milk jewelry logo" />
        </div>
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
    </nav>
  );
}
