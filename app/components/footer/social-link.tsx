import Link from "next/link"
import Image from "next/image"

interface SocialLinkProps {
    params: {
        url: string;
        src: HTMLImageElement;
    }
}

export default function SocialLink({ params }: SocialLinkProps) {
    return (
        <Link href={params.url} className="h-8 w-8 flex justify-center items-center bg-[var(--primary-clr)] duration-300 hover:bg-[var(--secondary-clr)]">
            <Image src={params.src} alt="Social button link" className="w-8 h-8 p-1.5 hover:invert"/>
        </Link>
    )
}