import React from "react";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ProductsSection from "./components/MainPage/ProductsSection";
import CatalogButton from "./components/MainPage/CatalogButton";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <ImageSlider />
      <ProductsSection />
      <CatalogButton />
    </div>
  );
};

export default HomePage;
