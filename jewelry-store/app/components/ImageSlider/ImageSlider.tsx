"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "./SlideItem";
import sliderConfig from "./sliderConfig";
import SliderCustomArrow from "./SliderCustomArrow";

interface SlideData {
  title: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  { title: "Novelty", imageUrl: "/test.jpg" },
  { title: "Rings", imageUrl: "/test.jpg" },
  { title: "Earrings", imageUrl: "/test.jpg" },
  { title: "For neck", imageUrl: "/test.jpg" },
  { title: "Bracelets", imageUrl: "/test.jpg" },
  { title: "Anklets", imageUrl: "/test.jpg" },
  { title: "Sets", imageUrl: "/test.jpg" },
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
