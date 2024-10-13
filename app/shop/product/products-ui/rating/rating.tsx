"use client";
import { useState } from "react";
import StarRating from "./star-rating";

const Rating = ({ content }: { content: string }) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <article className="flex flex-col gap-1 text-gray-500">
      <p>{content}</p>
      <StarRating setRate={setRating} maxRating={5} size={28} />
    </article>
  );
};

export default Rating;
