import React from "react";
import Image from "next/image";

import saveIcon from "@/public/heart.png";

const Save = () => {
  return (
    <button className="group">
      <Image
        className="group-hover:scale-125 transition-all duration-300 flex-1"
        src={saveIcon}
        alt="Save icon"
        width={20}
        height={20}
      />
    </button>
  );
};

export default Save;
