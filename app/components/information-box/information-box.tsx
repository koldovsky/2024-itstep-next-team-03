import Image from "next/image";
import { StaticImageData } from "next/image";

interface InformationBoxProps {
    imageSrc: StaticImageData;
    tittle: string;
}

export default function InformationBox({ imageSrc, tittle }: InformationBoxProps) {
    return (
        <div
            className="bg-[#F2F1EE] h-72 w-96 overflow-hidden
            transition-transform duration-700 ease-out hover:-translate-y-2 "
        >
            <div className="w-full">
                <Image src={imageSrc} alt="info-pics" className="h-56" />
            </div>
            <div className="px-5 py-5">
                <h1 className="font-sm">{tittle}</h1>
            </div>
        </div>
    );
}
