import Link from "next/link";

interface ButtonTextProps {
  params: {
    content: string;
    url: string;
    className: string;
    linkClassName?: string;
  };
}

export default function Button({ params }: ButtonTextProps) {
  const { content, url, className, linkClassName } = params;

  return (
    <Link href={url} className={linkClassName}>
      <button className={className}>{content}</button>
    </Link>
  );
}
