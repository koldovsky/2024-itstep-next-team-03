"use client";

import React from 'react';
import Slider from 'react-slick';
import SlideItem from './SlideItem';
import sliderSettings from './sliderSettings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ImageSlider: React.FC = () => (
    <div className="w-full p-10">
        <Slider {...sliderSettings} className="relative">
            {slides.map((slide, index) => (
                <SlideItem key={index} title={slide.title} imageUrl={slide.imageUrl} />
            ))}
        </Slider>
    </div>
);

export default ImageSlider;