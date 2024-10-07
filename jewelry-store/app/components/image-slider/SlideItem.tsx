import React from 'react';
import Image from 'next/image';

interface SlideItemProps {
    title: string;
    imageUrl: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ title, imageUrl }) => (
    <div className="relative p-4">
        <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            width={300}
            height={300}
            className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-0">
            <span className="text-white text-2xl font-bold uppercase border py-36 px-24">{title}</span>
        </div>
    </div>
);

export default SlideItem;
