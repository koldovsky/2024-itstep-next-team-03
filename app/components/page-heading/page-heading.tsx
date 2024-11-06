interface PageHeadingProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function PageHeading({ params }: PageHeadingProps) {
  return (
    <h1
      className={`${params.className} text-2xl md:text-3xl font-bold uppercase`}
    >
      {params.content}
    </h1>
  );
}
