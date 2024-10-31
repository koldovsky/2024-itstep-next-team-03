interface PageHeadingProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function PageHeading({ params }: PageHeadingProps) {
  return (
    <h1 className={`text-4xl font-bold uppercase ${params.className}`}>
      {params.content}
    </h1>
  );
}
