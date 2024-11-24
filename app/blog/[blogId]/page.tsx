"use client";

import { BlogItem } from "@/app/types/blogs";
import { blogs } from "@/app/lib/blog-data";

import BreadCrumbsBar from "@/app/components/bread-crumbs-bar/bread-crumbs-bar";
import ProductCard from "@/app/components/cards/product-card/product-card";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import jewelryImage from "@/public/images/blog/jewelry.webp";
import jewelryInPlate from "@/public/images/blog/jewelry-in-plate.webp";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  discount: number | null;
  quantity: number;
};

const Blog = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  const blog: BlogItem | undefined = blogs.find((b) => b.id === +blogId);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Помилка при отриманні продуктів:", error);
      }
    };

    fetchProducts();
  });

  if (!blog) {
    return <p>Blog not found</p>;
  }
  const { blogName, description } = blog;

  return (
    <div>
      <BreadCrumbsBar params={{ url: `/blog/${blogName}` }} />
      <section className="p-3 sm:p-10 max-w-[1200px] mx-auto min-h-screen">
        <article className="min-h-screen">
          <h1 className="text-3xl font-bold mb-6">{blogName}</h1>
          <p className="mb-7">{description}</p>

          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Product Image Container */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
              <Image
                className="w-full h-full object-cover"
                src={jewelryImage}
                alt={`Image of ${blogName}`}
                width={500}
                height={1200}
                objectFit="cover"
              />
            </div>
            {/*Content*/}
            <div className="w-full lg:w-1/2 lg:py-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Jewelry that Shines</h2>
                <p className="mb-4">
                  Welcome to our jewelry boutique, where every piece tells a
                  story of elegance and craftsmanship. From dazzling diamond
                  rings to timeless gold necklaces, our collection is designed
                  to celebrate life’s most precious moments. Whether you are
                  searching for a unique engagement ring or a gift to mark a
                  special occasion, we offer exquisite designs to suit every
                  taste.
                </p>
                <p className="mb-4">
                  Each piece is crafted with care, blending tradition with
                  modern trends, ensuring you shine on every occasion. Let our
                  jewelry become a reflection of your personality and style.
                  Visit us today and discover the perfect sparkle for you or
                  your loved ones!
                </p>
              </div>
              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.length > 0 ? (
                  products
                    .slice(0, 4)
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        discount={product.discount || 0}
                        quantity={1}
                      />
                    ))
                ) : (
                  <p className="col-span-2">Loading products...</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            {/*Content*/}
            <h2 className="text-xl font-bold mb-2">
              Timeless Sparkle for Every Moment
            </h2>
            <p className="mb-4">
              At our jewelry boutique, quality meets artistry to bring you
              exclusive designs that stand the test of time. Whether you prefer
              classic pieces or bold, contemporary styles, our collection offers
              something for everyone. We believe jewelry is more than an
              accessory—it’s a way to express emotions, capture memories, and
              create personal connections.
            </p>
            <p className="mb-4">
              Each gemstone and metal is carefully selected to ensure brilliance
              and durability. Explore our boutique today and find the piece that
              speaks to your heart.
            </p>
            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.length > 0 ? (
                products
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                      discount={0}
                      quantity={1}
                    />
                  ))
              ) : (
                <p className="col-span-2">Loading products...</p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/*Content*/}
            <div className="w-full lg:w-1/2 lg:py-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Jewelry</h2>
                <p className="mb-4">
                  Welcome to our jewelry boutique, where every piece tells a
                  story of elegance and craftsmanship. From dazzling diamond
                  rings to timeless gold necklaces, our collection is designed
                  to celebrate life’s most precious moments. Whether you are
                  searching for a unique engagement ring or a gift to mark a
                  special occasion, we offer exquisite designs to suit every
                  taste.
                </p>
                <p className="mb-4">
                  Each piece is crafted with care, blending tradition with
                  modern trends, ensuring you shine on every occasion. Let our
                  jewelry become a reflection of your personality and style.
                  Visit us today and discover the perfect sparkle for you or
                  your loved ones!
                </p>
              </div>
              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.length > 0 ? (
                  products
                    .slice(0, 4)
                    .map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        discount={0}
                        quantity={1}
                      />
                    ))
                ) : (
                  <p className="col-span-2">Loading products...</p>
                )}
              </div>
            </div>
            {/* Product Image Container */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
              <Image
                className="w-full h-full object-cover"
                src={jewelryInPlate}
                alt={`Image of ${blogName}`}
                width={500}
                height={1200}
                objectFit="cover"
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Blog;
