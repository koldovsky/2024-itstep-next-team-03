import React from "react";

import FeedbackForm from "./feedback-form";
import Feedbacks from "./feedbacks";

const ProductFeedback = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 mt-20 py-5 md:py-0">
      <Feedbacks />
      <FeedbackForm />
    </section>
  );
};

export default ProductFeedback;
