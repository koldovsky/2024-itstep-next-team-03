interface ListHeaderProps {
  params: {
    content: string;
    className: string;
  };
}

export default function ListHeader({ params }: ListHeaderProps) {
  return (
    <p
      className={`${params.className} w-full bg-[var(--primary-clr)] p-5 text-xl font-bold`}
    >
      {params.content}
    </p>
  );
}
