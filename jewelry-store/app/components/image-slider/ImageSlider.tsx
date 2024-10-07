"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from './SlideItem';
import sliderConfig from './sliderConfig';
import SliderCustomArrow from './SliderCustomArrow';

interface SlideData {
    title: string;
    imageUrl: string;
}

const slides: SlideData[] = [
    { title: 'Novelty', imageUrl: '/novelty-slider.jpg' },
    { title: 'Rings', imageUrl: '/rings-slider.jpg' },
    { title: 'Earrings', imageUrl: '/earrings-slider.jpg' },
    { title: 'For neck', imageUrl: '/for-neck-slider.jpg' },
    { title: 'Bracelets', imageUrl: '/bracelets-slider.jpg' },
    { title: 'Anklets', imageUrl: '/anklets-slider.jpg' },
    { title: 'Sets', imageUrl: '/sets-slider.jpg' },
];

const ImageSlider: React.FC = () => {
    const sliderConfigWithArrows = {
        ...sliderConfig,
        nextArrow: <SliderCustomArrow direction="right" />,
        prevArrow: <SliderCustomArrow direction="left" />,
    };

    return (
        <section className="w-full p-10">
            <Slider {...sliderConfigWithArrows} className="relative">
                {slides.map((slide) => (
                    <SlideItem key={slide.title} title={slide.title} imageUrl={slide.imageUrl} />
                ))}
            </Slider>
        </section>
    );
};

export default ImageSlider;