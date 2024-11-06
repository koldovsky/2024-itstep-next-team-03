import { orderType } from "../types/placeholder-order-type";

export const order: orderType = {
  id: 1,
  totalCost: 0,
  finalPrice: 0,
  discount: 0,
  products: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Double gold pendant with round plate",
      customAttribute: "Carbine",
      price: 7100,
      amount: 2,
      discount: 0,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Silver earrings with baroque pearls",
      customAttribute: "Silver Au 925",
      price: 5000,
      amount: 1,
      discount: 600,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Silver earrings with baroque pearls",
      customAttribute: "Silver Au 925",
      price: 5000,
      amount: 1,
      discount: 600,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Silver earrings with baroque pearls",
      customAttribute: "Silver Au 925",
      price: 5000,
      amount: 1,
      discount: 600,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Silver earrings with baroque pearls",
      customAttribute: "Silver Au 925",
      price: 5000,
      amount: 1,
      discount: 600,
    },
  ],
};

order.totalCost = order.products.reduce(
  (acc, product) => acc + product.price * product.amount,
  0
);

order.discount = order.products.reduce(
  (acc, product) => acc + product.discount * product.amount,
  0
);

order.finalPrice = order.totalCost - order.discount;
