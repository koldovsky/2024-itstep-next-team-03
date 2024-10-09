import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ProductsSection from "./components/MainPage/ProductsSection";
import CatalogButton from "./components/MainPage/CatalogButton";
import Footer from "./components/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <header>
        <NavigationBar />
      </header>
      <main className="container mx-auto">
        <div className="mt-20 flex flex-col gap-16">
          <ImageSlider />
          <ProductsSection />
          <CatalogButton />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
