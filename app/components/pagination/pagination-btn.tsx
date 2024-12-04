import React from "react";

type PaginationBtn = {
  content: number;
  onClick: (pageNumber: number) => void;
  currentPage: number;
};

const PaginationBtn = ({ content, onClick, currentPage }: PaginationBtn) => {
  return (
    <button
      onClick={() => onClick(content)}
      className={`px-3 py-1.5 md:px-5  bg-textclr rounded-xl text-white font-bold text-sm md:text-base ${
        currentPage === content ? "bg-secondaryclr" : ""
      }`}
    >
      {content}
    </button>
  );
};

export default PaginationBtn;
