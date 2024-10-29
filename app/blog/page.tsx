import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";
import ContentBox from "@/app/components/content-box/content-box";
import MostPopularJewelryStones from "../../public/images/blog/most-popular-jewelry-stones.webp";
import SecretsOfProperCare from "../../public/images/blog/secrets-of-proper-care.webp";
import BasicStylesInJewelryArt from "../../public/images/blog/basic-styles-in-jewelry-art.webp";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <BreadCrumbsBar params={{ url: `/blog` }} />
      <PageHeading params={{ content: "Blog" }} />
      <div className="flex flex-row justify-center gap-9 mt-10">
        <Link href="/blog/1" passHref>
          <ContentBox
            imageSrc={MostPopularJewelryStones}
            date="5/15/2024"
            title="Top 10 most popular types of stones in jewelry"
            description="In the world of jewelry, stones play an important role.
                    They add elegance, shine and beauty to jewelry and can have symbolic meaning..."
          />
        </Link>
        <Link href="/blog/2" passHref>
          <ContentBox
            imageSrc={SecretsOfProperCare}
            date="8/27/2022"
            title="Secrets of proper jewelry care"
            description="Jewelry is not only an item of decoration,
                    but also an important element of your image and style.
                    In order for your favorite jewelry to remain shiny undamaget for many..."
          />
        </Link>
        <Link href="/blog/3" passHref>
          <ContentBox
            imageSrc={BasicStylesInJewelryArt}
            date="1/30/2020"
            title="9 Basic Jewelry Styles"
            description="Jewelry art is not only about making jewelry,
                    but also about expressing various styles and aethetic erformances.
                    From classic to eclectic, there are many in the world of jewelr..."
          />
        </Link>
      </div>
    </div>
  );
}
