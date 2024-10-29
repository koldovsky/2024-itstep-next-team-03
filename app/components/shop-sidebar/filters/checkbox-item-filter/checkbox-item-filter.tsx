import React from "react";
import CheckboxItem from "./checkbox-item";

import { CheckboxItem as CheckboxItemType } from "../types";

const CheckboxItemFilter = ({ items }: { items: CheckboxItemType[] }) => {
  return (
    <div className="w-full">
      <ul className="flex flex-col ">
        {items.map((item, index) => (
          <CheckboxItem key={index} label={item.label} amount={item.amount} />
        ))}
      </ul>
    </div>
  );
};

export default CheckboxItemFilter;
