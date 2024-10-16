import React from "react";

import Checkbox from "./checkbox/checkbox";

type CheckboxItemProps = {
  label: string;
  amount: number;
};

const CheckboxItem = ({ label, amount }: CheckboxItemProps) => {
  return (
    <li className="flex justify-between items-center">
      <Checkbox label={label} />
      <p className="text-gray-300 text-sm">{amount}</p>
    </li>
  );
};

export default CheckboxItem;
