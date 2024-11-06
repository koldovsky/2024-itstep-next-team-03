"use client";

import { useState, ChangeEvent } from "react";

type CheckoutInputProps = {
  params: {
    labelName?: string;
    type: "text" | "email";
    value?: string;
    className?: string;
    placeholder?: string;
  };
};

const CheckoutInput = ({ params }: CheckoutInputProps) => {
  const [inputValue, setInputValue] = useState(params.value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${params.className} flex flex-col w-full`}>
      <label className="text-[var(--input-text-clr)] text-xs mb-1">
        {params.labelName}
      </label>
      <input
        className="duration-300 border outline-none text-black text-xs text-[var(--input-text-clr)] border-[var(--input-clr)] focus:border-[var(--input-focus-clr)] px-2 py-3 w-full"
        type={params.type}
        value={inputValue}
        onChange={handleChange}
        placeholder={params.placeholder}
      />
    </div>
  );
};

export default CheckoutInput;
