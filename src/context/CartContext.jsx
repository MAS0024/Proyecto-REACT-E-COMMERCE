import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const exist = cart.find(i => i.id === item.id);
    if (exist) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter(i => i.id !== id));
  const clearCart = () => setCart([]);
  const totalItems = () => cart.reduce((acc, el) => acc + el.quantity, 0);
  const totalPrice = () => cart.reduce((acc, el) => acc + el.quantity * el.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
