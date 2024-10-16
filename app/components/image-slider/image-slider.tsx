"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "./slider-item";
import sliderConfig from "./slider-config";
import SliderCustomArrow from "./slider-custom-arrow";

interface SlideData {
  title: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  { title: "Novelty", imageUrl: "/images/test.jpg" },
  { title: "Rings", imageUrl: "/images/test.jpg" },
  { title: "Earrings", imageUrl: "/images/test.jpg" },
  { title: "For neck", imageUrl: "/images/test.jpg" },
  { title: "Bracelets", imageUrl: "/images/test.jpg" },
  { title: "Anklets", imageUrl: "/images/test.jpg" },
  { title: "Sets", imageUrl: "/images/test.jpg" },
];

const ImageSlider: React.FC = () => {
  const sliderConfigWithArrows = {
    ...sliderConfig,
    nextArrow: <SliderCustomArrow direction="right" />,
    prevArrow: <SliderCustomArrow direction="left" />,
  };

  return (
    <section>
      <Slider {...sliderConfigWithArrows} className="relative w-full">
        {slides.map((slide) => (
          <SlideItem
            key={slide.title}
            title={slide.title}
            imageUrl={slide.imageUrl}
          />
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
