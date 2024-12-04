import React from "react";

type PaginationArrowProps = {
  content: string;
  onClick: () => void;
};

const PaginationArrow = ({ content, onClick }: PaginationArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 md:px-5  bg-textclr rounded-xl text-white font-bold text-sm md:text-base"
    >
      {content}
    </button>
  );
};

export default PaginationArrow;
