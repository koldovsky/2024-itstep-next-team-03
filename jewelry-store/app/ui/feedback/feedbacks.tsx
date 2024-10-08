import React from "react";
import Image from "next/image";
import commentsListImage from "@/public/empty-comments-list.svg";

const Feedbacks = () => {
  return (
    <article className="lg:w-2/3">
      <h2 className="text-3xl font-bold mb-5 sm:mb-0">Відгуки</h2>
      <div className="flex flex-col gap-3 justify-center items-center h-full py-6 lg:py-0">
        <Image
          src={commentsListImage}
          alt="Empty comments list"
          width={300}
          height={300}
        />
        <p className="text-center">Ще немає відгуків</p>
        <p className="text-gray-400 text-center">
          Будьте першим, хто залишить відгук
        </p>
      </div>
    </article>
  );
};

export default Feedbacks;
