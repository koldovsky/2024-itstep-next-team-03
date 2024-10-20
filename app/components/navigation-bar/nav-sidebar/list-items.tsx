import Link from "next/link";

interface ListItemProps {
  params: {
    id: number;
    linkName: string;
    link: string;
    className: string;
  };
}

export default function ListItem({ params }: ListItemProps) {
  return (
    <li
      key={params.id}
      className={`${params.className} border border-x-0 border-t-0 border-[var(--primary-clr)] p-4 duration-300 hover:bg-[var(--primary-clr)]`}
    >
      <Link key={params.id} href={`/${params.link}`} className={params.className}>
        {params.linkName}
      </Link>
    </li>
  );
}
