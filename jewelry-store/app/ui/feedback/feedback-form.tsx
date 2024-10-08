"use client";
import React, { FormEvent } from "react";

import Input from "@/app/ui/input";
import ActionButton from "@/app/ui/action-button";
import Rating from "../rating/rating";

const FeedbackForm = () => {
  const handleFeedbackSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <article className="lg:w-1/3 ">
      <h2 className="text-3xl font-bold mb-4">Залишіть свій відгук</h2>
      <form onSubmit={handleFeedbackSubmit}>
        <div className="flex flex-col gap-4">
          <Input type="text" labelName="Ім'я*" />
          <Input type="email" labelName="Email*" />

          <Rating content="Поставте оцінку" />

          <div className="flex flex-col gap-2 text-gray-500">
            <label>Повідомлення коментаря*</label>
            <textarea className="h-24 border outline-none border-gray-400 px-2 py-3 w-full focus:border-orange-200 resize-none"></textarea>
          </div>

          <ActionButton
            type="submit"
            className="self-end px-8"
            content="Залишити відгук"
          />
        </div>
      </form>
    </article>
  );
};

export default FeedbackForm;
