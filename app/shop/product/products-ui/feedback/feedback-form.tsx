"use client";
import React, { FormEvent } from "react";

import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import Rating from "../rating/rating";

const FeedbackForm = () => {
  const handleFeedbackSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <article className="lg:w-1/3 ">
      <h2 className="text-3xl font-bold mb-4">Leave your feedback</h2>
      <form onSubmit={handleFeedbackSubmit}>
        <div className="flex flex-col gap-4">
          <Input type="text" labelName="Name*" />
          <Input type="email" labelName="Email*" />

          <Rating content="Rate it" />

          <div className="flex flex-col gap-2 text-gray-500">
            <label>Comment Message*</label>
            <textarea className="h-24 border outline-none border-gray-400 px-2 py-3 w-full focus:border-orange-200 resize-none"></textarea>
          </div>

          <Button
            params={{
              content: "Send feedback",
              url: "",
              className: "secondary-btn",
            }}
          />
        </div>
      </form>
    </article>
  );
};

export default FeedbackForm;
