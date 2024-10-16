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
  { title: 'Novelty', imageUrl: '/images/novelty.jpg' },
  { title: 'Rings', imageUrl: '/images/rings.jpg' },
  { title: 'Earrings', imageUrl: '/images/earrings.jpg' },
  { title: 'For neck', imageUrl: '/images/for-neck.jpg' },
  { title: 'Bracelets', imageUrl: '/images/bracelets.jpg' },
  { title: 'Anklets', imageUrl: '/images/anklets.jpg' },
  { title: 'Sets', imageUrl: '/images/sets.jpg' },
];

const ImageSlider: React.FC = () => {
  const sliderConfigWithArrows = {
    ...sliderConfig,
    nextArrow: <SliderCustomArrow direction="right" />,
    prevArrow: <SliderCustomArrow direction="left" />,
  };

  return (
      <section className="w-full p-5">
        <Slider {...sliderConfigWithArrows} className="relative">
          {slides.map((slide) => (
              <SlideItem key={slide.title} title={slide.title} imageUrl={slide.imageUrl} />
          ))}
        </Slider>
      </section>
  );
};

export default ImageSlider;