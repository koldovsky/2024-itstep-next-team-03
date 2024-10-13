import Image from "next/image";
import heart from "@/public/icons/heart.svg";

const AddToWishlist = () => {
  return (
    <button className="group">
      <Image
        className="group-hover:scale-125 transition-all duration-300 flex-1"
        src={heart}
        alt="Add to wishlist"
        width={20}
        height={20}
      />
    </button>
  );
};

export default AddToWishlist;
