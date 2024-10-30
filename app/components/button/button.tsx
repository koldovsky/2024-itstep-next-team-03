import Link from "next/link";

interface ButtonTextProps {
  params: {
    content: string;
    url: string;
    className?: string;
    linkClassName?: string;
  };
}

export default function Button({ params }: ButtonTextProps) {
  const { content, url, className, linkClassName } = params;

  return (
    <Link href={url} className={linkClassName}>
      <button className={`${className} w-full md:w-auto bg-gray-100 transition-all duration-300 hover:bg-milk-jel-primary text-black text-sm font-semibold hover:text-white py-3 px-8 uppercase`}>{content}</button>
    </Link>
  );
}
