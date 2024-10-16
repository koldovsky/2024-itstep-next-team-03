import Image from "next/image";
import sort from "@/public/icons/sort.svg";
import PageHeading from "../components/page-heading/page-heading";
import CardsGrid from "../components/cards/cards-grid/cards-grid";
import Button from "../components/button/button";
import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import ShopSidebar from "../components/shop-sidebar/shop-sidebar";
export default function Shop() {
  return (
    <div className="w-full">
      <BreadCrumbsBar params={{ url: "/shop" }} />

      <div className="flex flex-row justify-between items-center mb-10">
        <PageHeading params={{ content: "Shop" }} />
        <div className="flex flex-row gap-4 items-center">
          <p>Sort by:</p>
          <Button
            params={{
              content: "Popular",
              url: "",
              className: "sort-btn h-7 text-sm px-3",
            }}
          />
          <Image src={sort} alt="Sort button" className="h-6 w-6" />
        </div>
      </div>

      <div className="flex w-full items-start gap-5">
        <ShopSidebar />
        <CardsGrid />
      </div>
    </div>
  );
}
