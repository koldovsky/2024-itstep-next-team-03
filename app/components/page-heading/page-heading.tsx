interface PageHeadingProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function PageHeading({ params }: PageHeadingProps) {
  return (
    <h1 className={`text-3xl font-bold mb-2 uppercase ${params.className}`}>
      {params.content}
    </h1>
  );
}
