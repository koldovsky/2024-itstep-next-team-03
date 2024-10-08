import { ProductItem } from "../types/products";

export const products: ProductItem[] = [
  {
    id: 1,
    productName: "Золоті сережки",
    category: "earrings",
    article: "12486172205",
    manufacturer: "Gucci",
    price: 9800,
    currency: "₴",
    quantityAvailable: 18,
    clasps: ["Замок"],
    attributes: [
      {
        attributeName: "Метал",
        attributeValue: "Золото Au 585",
      },
      {
        attributeName: "Колір металу",
        attributeValue: "Жовте золото",
      },
    ],
    description:
      "Ці елегантні золоті сережки від Gucci створені для тих, хто цінує розкіш та витонченість. Вони виконані з жовтого золота, яке підкреслить вашу жіночність і елегантність. Сережки мають надійний замок, що забезпечує комфортне носіння. Вони підійдуть як для повсякденного носіння, так і для особливих подій. Ідеальний вибір для того, щоб додати нотку шику до вашого образу. Цей аксесуар чудово підходить для подарунка близькій людині.",
  },
];
