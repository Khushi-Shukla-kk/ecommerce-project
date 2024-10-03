import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

// Create Context
const CartContext = createContext();

// Function to get cart data from localStorage
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("thapaCart");
  return localCartData ? JSON.parse(localCartData) : [];
};

// Initial State
const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 50000,
};

// Cart Provider Component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add product to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // Increment and decrement product quantity
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // Remove item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Use effect to update localStorage and calculate totals
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("thapaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Provide context value to children
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
