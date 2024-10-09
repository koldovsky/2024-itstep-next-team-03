import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full items-center">
        <h1 className="text-4xl font-bold uppercase">Self-made jewelry</h1>
        <p>Which will emphasize your texture</p>
      </div>
    </section>
  );
}
