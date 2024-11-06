import Link from "next/link";
import React from "react";

type SubcategoryLinkProps = {
  subcategoryName: string;
  subcategoryId: number;
};

const SubcategoryLink = ({ subcategoryName }: SubcategoryLinkProps) => {
  return (
    <li className="w-full text-start hover:text-primary transition-all duration-300 text-sm cursor-pointer px-2">
      <Link href={`/shop?subcategory=${subcategoryName}`}>
        {subcategoryName}
      </Link>
    </li>
  );
};

export default SubcategoryLink;
