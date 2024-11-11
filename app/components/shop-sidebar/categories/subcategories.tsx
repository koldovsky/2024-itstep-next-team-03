import Image from "next/image";
import leftArrow from "@/public/icons/left-arrow.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Subcategory } from "@/app/lib/definitions";
import SubcategoryLink from "./subcategory-link";

type Subcategories = {
  category: string | null;
  subcategory: string | null;
};

const Subcategories = ({ category, subcategory }: Subcategories) => {
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const url = `/api/subcategories?category=${category}`;
        const response = await fetch(url);
        const data = await response.json();
        setSubCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch subcategories:", error);
      }
    };

    loadCategories();
  }, [category]);

  return (
    <div className="mb-4">
      <Link href="/shop" className="flex items-center gap-3">
        <Image src={leftArrow} alt="Left arrow" width={25} height={30} />
        <button className="text-left text-base">All categories</button>
      </Link>

      <ul className="flex flex-col gap-2">
        <li className="bg-gray-200 px-2 py-1 mt-3 capitalize cursor-pointer text-sm">
          {category || subcategory}
        </li>
        {subCategories &&
          subCategories.map((subcategory) => (
            <SubcategoryLink
              key={subcategory.subcategory_id}
              subcategoryName={subcategory.subcategory_name}
              subcategoryId={subcategory.subcategory_id}
            />
          ))}
      </ul>
    </div>
  );
};

export default Subcategories;
