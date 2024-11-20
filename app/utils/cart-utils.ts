export interface CartItem {
    id: number;
    title: string;
    price?: number;
    image: string;
    quantity: number;
  }
  
export const getCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
    }
    return [];
  };


  
  
  export const addToCart = (item: CartItem): boolean => {
    try {
      const cart = getCart();
  
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + (item.quantity || 1);
        console.log(`Product quantity increased:`, existingItem);
      } else {
        cart.push({ ...item, quantity: item.quantity || 1 });
        console.log("Product added to cart:", item);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      return true;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      return false;
    }
  };
  
//   export const removeFromCart = (id: number): boolean => {
//     try {
//       const cart = getCart();
//       const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
  
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       console.log("Product removed from cart:", id);
//       return true;
//     } catch (error) {
//       console.error("Error removing product from cart:", error);
//       return false;
//     }
//   };


  export const incrementQuantity = (id: number): boolean => {
    try {
      const cart = getCart();
  
      const product = cart.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Product quantity incremented:", product);
        return true;
      } else {
        console.error("Product not found in cart.");
        return false;
      }
    } catch (error) {
      console.error("Error incrementing product quantity:", error);
      return false;
    }
  };
  
  export const decrementQuantity = (id: number): boolean => {
    try {
      const cart = getCart();
  
      const product = cart.find((item) => item.id === id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          console.log("Product quantity decremented:", product);
          return true;
        } else {
          console.error("Cannot decrement quantity below 1.");
          return false;
        }
      } else {
        console.error("Product not found in cart.");
        return false;
      }
    } catch (error) {
      console.error("Error decrementing product quantity:", error);
      return false;
    }
  };
  
  export const getCartItemCount = (): number => {
    return getCart().length;
  };