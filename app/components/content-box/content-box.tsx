import Image from "next/image";
import { StaticImageData } from "next/image";

interface ContentBoxProps {
    imageSrc: StaticImageData;
    date: string;
    title: string;
    description: string;
}

export default function ContentBox({ imageSrc, date, title, description }: ContentBoxProps) {
    return (
        <div className="bg-[#F2F1EE] h-full w-full overflow-hidden
         transition-transform duration-700 ease-out hover:-translate-y-2 ">
            <div className="relative">
                <Image src={imageSrc} alt="jewelry-pics" className="h-60 w-full object-cover"/>
                <div className="bg-[#F2F1EE] h-6 w-18 absolute top-0 px-2 z-10">{date}</div>
            </div>
            <div className="px-5 py-3">
                <h1 className="text-lg font-medium mb-2">{title}</h1>
                <p className="text-xs mb-4 text-gray-500">{description}</p>
                <button>
                    <p className="uppercase text-sm font-semibold hover:text-[#d4b486] duration-300"> Details</p>
                </button>
            </div>
        </div>
    );
}
