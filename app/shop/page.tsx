import PageHeading from "../components/page-heading/page-heading";
import CardsGrid from "../components/cards/cards-grid/cards-grid";
import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import ShopSidebar from "../components/shop-sidebar/shop-sidebar";
import ProductSorting from "../components/product-sorting";
export default function Shop() {
  return (
    <div className="w-full">
      <BreadCrumbsBar params={{ url: "/shop" }} />

      <div className="flex flex-row justify-between items-center mb-10">
        <PageHeading params={{ content: "Shop" }} />
        <ProductSorting />
      </div>

      <div className="w-full flex items-start gap-5">
        <ShopSidebar />
        <section className="w-4/5">
          <CardsGrid />
        </section>
      </div>
    </div>
  );
}
