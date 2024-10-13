"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./bread-crumbs-bar.module.css";

interface BreadCrumbsBarProps {
  params: {
    url: string;
  };
}

export default function BreadCrumbsBar({ params }: BreadCrumbsBarProps) {
  const { url } = params;
  const currPathArr = usePathname().slice(1).split("/");

  const urlArr = url
    .slice(1)
    .split("/")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1));

  return (
    <div
      className={`${styles.breadcrumbs} h-8 fixed w-full left-0 top-28 z-50`}
    >
      <ul className="container mx-auto h-8 flex gap-4 items-center text-xs">
        <li key={0}>
          <Link href="/" className="text-gray-400 cursor-pointer">
            Home
          </Link>
        </li>

        {urlArr.map((page, index) => {
          const href = "/" + currPathArr.slice(0, index + 1).join("/");
          return (
            <li key={`breadcrumb-${index}`} className="flex gap-4">
              <p className="text-gray-400">{">"}</p>
              {index === urlArr.length - 1 ? (
                <div className="">{page}</div>
              ) : (
                <div className="text-gray-400 cursor-pointer">
                  <Link href={href}>{page}</Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
