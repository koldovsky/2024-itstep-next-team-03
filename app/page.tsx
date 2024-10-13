import React from "react";
import ImageSlider from "./components/image-slider/image-slider";
import PageHeading from "./components/page-heading/page-heading";
import Button from "@/app/components/button/button";
import CardsGrid from "./components/cards/cards-grid/cards-grid";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <ImageSlider />
      <section>
        <div className="flex flex-col gap-2 w-full items-center">
          <PageHeading params={{ content: "Self-made jewelry" }} />
          <p>Which will emphasize your texture</p>
        </div>
      </section>
      <CardsGrid />
      <Button
        params={{
          content: "To the catalog",
          url: "/shop",
          className: "primary-btn",
          linkClassName: "mx-auto",
        }}
      />
    </div>
  );
};

export default HomePage;
