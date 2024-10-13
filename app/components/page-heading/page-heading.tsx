interface PageHeadingProps {
  params: {
    content: string;
  };
}

export default function PageHeading({ params }: PageHeadingProps) {
  return <h1 className="text-4xl font-bold uppercase">{params.content}</h1>;
}
