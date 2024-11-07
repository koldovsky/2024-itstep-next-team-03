import { ProductItem } from "../types/products";

export const products: ProductItem[] = [
  {
    id: 1,
    productName: 'Gold earrings "Congo"',
    category: "earrings",
    article: "12486172205",
    manufacturer: "Gucci",
    price: 9800,
    currency: "₴",
    quantityAvailable: 18,
    clasps: "Clasp",
    attributes: [
      {
        attributeName: "Metal",
        attributeValue: "Gold Au 585",
      },
      {
        attributeName: "Metal color",
        attributeValue: "Yellow gold",
      },
    ],
    description:
      "A sophisticated accessory in the style of classicism that will complement your image Made of high-quality gold, these earrings have a shiny surface that emphasizes their luxury. The spiral shape adds uniqueness and originality to these rings. They look modern and classic at the same time, so they are ideal for both everyday wear and special events. With a diameter of 50 mm, these earrings clearly emphasize your individuality without being too massive. Thanks to the reliable lock, the earrings are comfortable to wear, and they will not fall out during active pastime.",
    imageUrl: "https://i.ebayimg.com/images/g/-0QAAOSwz6BhDx3e/s-l1200.jpg",
  },
];
