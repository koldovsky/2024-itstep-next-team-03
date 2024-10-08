import React from "react";
import CharacteristicItem from "./characteristic-item";
import { AttributeType } from "@/app/types/products";

type CharacteristicListProps = {
  attributes: AttributeType[];
};

const CharacteristicList = ({ attributes }: CharacteristicListProps) => {
  return (
    <ul>
      {attributes.map((attr, index) => (
        <CharacteristicItem key={index} attribute={attr} />
      ))}
    </ul>
  );
};

export default CharacteristicList;
