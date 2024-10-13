import React from "react";
import { AttributeType } from "@/app/types/products";

type CharacteristicItemProps = {
  attribute: AttributeType;
};

const CharacteristicItem = ({ attribute }: CharacteristicItemProps) => {
  const { attributeName, attributeValue } = attribute;

  return (
    <li>
      <div className="flex py-2 gap-5 border-b border-gray-200">
        <span className="font-semibold text-gray-600 w-1/2 sm:w-1/3">
          {attributeName}:
        </span>
        <span className="text-gray-600 w-1/2 sm:w-2/3">{attributeValue}</span>
      </div>
    </li>
  );
};

export default CharacteristicItem;
