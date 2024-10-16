import Button from "../../button/button";

import { CategoryItem } from "./types";

const CategoryLink = ({ category }: { category: CategoryItem }) => {
  const { categoryName, link } = category;
  return (
    <li className="w-full">
      <Button
        params={{
          content: categoryName,
          url: `/shop/${link}`,
          className:
            "w-full text-start hover:text-primary transition-all duration-300 text-sm",
        }}
      />
    </li>
  );
};

export default CategoryLink;
