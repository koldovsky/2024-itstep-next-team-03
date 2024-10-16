"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";

type AccordionProps = {
  title: string;
  imageUrl?: string;
  children: ReactNode;
  className?: string;
};

const Accordion = ({
  title,
  imageUrl,
  children,
  className,
}: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleAccordion = () => setOpen((prev) => !prev);

  return (
    <div className={`w-full ${className}`}>
      <div
        onClick={handleToggleAccordion}
        className="w-full flex justify-between items-center cursor-pointer py-3 border-t border-gray-200"
      >
        <p className="text-base text-textclr">{title}</p>
        <Image
          src={imageUrl || "/icons/down-arrow.svg"}
          width={15}
          height={20}
          alt="Arrow"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
