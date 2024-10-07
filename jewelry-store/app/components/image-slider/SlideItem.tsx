import React from 'react';
import Image from 'next/image';

interface SlideItemProps {
    title: string;
    imageUrl: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ title, imageUrl }) => (
    <article className="relative group overflow-hidden cursor-pointer p-4">
        <figure className='overflow-hidden'>
            <Image
                src={imageUrl}
                alt={`Категорія: ${title}`}
                layout="responsive"
                width={400}
                height={400}
                className="transition duration-500 ease-in-out transform group-hover:scale-110 brightness-50 group-hover:brightness-100"
            />
            <figcaption
                className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold uppercase">{title}</h3>
                <div className='absolute top-[10%] left-[10%] h-[80%] w-[80%] border border-white'></div>
            </figcaption>
        </figure>
    </article>
);

export default SlideItem;