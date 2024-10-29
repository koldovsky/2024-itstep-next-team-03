interface PageHeadingProps {
  params: {
    content: string;
  };
}

export default function PageHeading({ params }: PageHeadingProps) {
  return <h1 className="text-2xl md:text-4xl font-bold uppercase text-center">{params.content}</h1>;
}
