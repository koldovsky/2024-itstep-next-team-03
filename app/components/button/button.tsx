import Link from "next/link";

interface ButtonTextProps {
  params: {
    content: string;
    url: string;
    className?: string;
    linkClassName?: string;
    onClick?: () => void;
  };
}

export default function Button({ params }: ButtonTextProps) {
  const { content, url, className, linkClassName, onClick } = params;

  return (
    <Link href={url} className={linkClassName}>
      <button onClick={onClick} className={`${className}`}>
        {content}
      </button>
    </Link>
  );
}
// 