import React from 'react';

interface SliderArrowProps {
    direction: 'left' | 'right';
    onClick?: () => void;
}

const SliderCustomArrow: React.FC<SliderArrowProps> = ({ direction, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 px-4 pb-1 z-10 cursor-pointer
            ${direction === 'left' ? 'left-4' : 'right-4'}`}
        >
            <span className="text-2xl font-serif text-white">{direction === 'left' ? '<' : '>'}</span>
        </div>
    );
};

export default SliderCustomArrow;