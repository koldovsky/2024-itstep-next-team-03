import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";
import InformationBox from "@/app/components/information-box/information-box";
import AboutUs from "../../public/images/for-customers/about-us.webp";
import Delivery from "../../public/images/for-customers/delivery.webp";
import PublicOffer from "../../public/images/for-customers/public-offer.webp";

export default function ForCustomers() {
  return (
    <div className="w-full">
      <BreadCrumbsBar params={{ url: `/for customers` }} />
      <PageHeading params={{ content: "Buyers" }} />
        <div className="flex flex-row justify-between gap-8 mt-10">
          <InformationBox
              imageSrc={AboutUs}
              tittle="About Us"
          />
          <InformationBox
              imageSrc={Delivery}
              tittle="Delivery and payment"
          />
          <InformationBox
              imageSrc={PublicOffer}
              tittle="Public offer"
          />
      </div>
    </div>
  );
}