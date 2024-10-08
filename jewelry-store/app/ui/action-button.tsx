import React from "react";

type ButtonProps = {
  content: string;
  className?: string;
  type?: "submit";
  onClick?: () => void;
};

const ActionButton = ({ content, className, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`outline-none border-0 text-black uppercase  font-bold bg-gray-200 py-3.5 px-20 hover:text-white hover:bg-orange-200 transition-all duration-300 ${className}`}
    >
      {content}
    </button>
  );
};

export default ActionButton;
