"use client";
import React, { useState } from "react";

import Star from "./star";

type StarRatingProps = {
  setRate: (index: number) => void;
  maxRating?: number;
  color?: string;
  size?: number;
  defaultRating?: number;
};

const StarRating = ({
  setRate,
  maxRating = 5,
  color = "#000",
  size = 48,
  defaultRating = 0,
}: StarRatingProps) => {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  function handleOnRate(i: number) {
    setRating(i + 1);
    setRate(i + 1);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            color={color}
            size={size}
            onHoverOff={() => setTempRating(0)}
            onHover={() => setTempRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleOnRate(i)}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
