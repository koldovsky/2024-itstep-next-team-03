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
    { title: 'Новинки', imageUrl: '/test.jpg' },
    { title: 'Каблучки', imageUrl: '/test.jpg' },
    { title: 'Сережки', imageUrl: '/test.jpg' },
    { title: 'Для шиї', imageUrl: '/test.jpg' },
    { title: 'Браслети', imageUrl: '/test.jpg' },
    { title: 'Анклети', imageUrl: '/test.jpg' },
    { title: 'Набори', imageUrl: '/test.jpg' },
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