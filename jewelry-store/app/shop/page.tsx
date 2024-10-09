import React from "react";
import Link from "next/link";

const Shop = () => {
  return (
    <div>
      <h1>Shop page</h1>
      <Link href="shop/product/1">
        <button className="border-2">Get test product</button>
      </Link>
    </div>
  );
};

export default Shop;
