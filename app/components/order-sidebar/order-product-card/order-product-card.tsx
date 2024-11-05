import Image from "next/image";

interface OrderProductType {
  params: {
    src: string;
    alt: string;
    title: string;
    customAttribute: string;
    price: number;
  };
}

export default function OrderProduct({ params }: OrderProductType) {
  return (
    <div className="flex flex-row gap-6 text-xs">
      <div className="relative h-16 w-28">
        <Image
          src={params.src}
          alt={params.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 mr-4">
        <p className="font-bold">{params.title}</p>
        <p>{params.customAttribute}</p>
        <div className="flex flex-row items-center justify-between">
          <p>{params.price} ₴</p>
          <div className="h-full w-fit text-xs px-2 border border-[var(--input-clr)] bg-white flex items-center gap-3 font-bold text-black">
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </div>
        </div>
        <p className="text-[var(--input-text-clr)] underline decoration-dashed underline-offset-4">
          Remove
        </p>
      </div>
    </div>
  );
}
