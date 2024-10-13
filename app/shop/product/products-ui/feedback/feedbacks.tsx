import Image from "next/image";
import commentsListImage from "@/public/images/empty-comments-list.svg";

const Feedbacks = () => {
  return (
    <article className="lg:w-2/3">
      <h2 className="text-3xl font-bold mb-5 sm:mb-0">Reviews</h2>
      <div className="flex flex-col gap-3 justify-center items-center h-full py-6 lg:py-0">
        <Image
          src={commentsListImage}
          alt="Empty comments list"
          width={300}
          height={300}
        />
        <p className="text-center">No reviews yet</p>
        <p className="text-gray-400 text-center">
          Be the first to leave a review
        </p>
      </div>
    </article>
  );
};

export default Feedbacks;
