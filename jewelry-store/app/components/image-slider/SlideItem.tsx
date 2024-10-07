import React from 'react';
import Image from 'next/image';

interface SlideItemProps {
    title: string;
    imageUrl: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ title, imageUrl }) => (
    <article className="relative group overflow-hidden p-4 cursor-pointer">
        <figure className='overflow-hidden'>
            <Image
                src={imageUrl}
                alt={`Зображення категорії ${title}`}
                layout="responsive"
                width={400}
                height={400}
                className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <figcaption
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-0 duration-500">
                <h3 className="text-white text-2xl font-bold uppercase">{title}</h3>
                <div className='absolute top-[10%] left-[10%] h-[80%] w-[80%] border border-white'></div>
            </figcaption>
        </figure>
    </article>
);

export default SlideItem;