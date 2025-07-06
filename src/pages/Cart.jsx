import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>El carrito se encuentra vacio</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras 🛒</h2>
      {cart.map(producto => (
        <CartItem key={producto.id} {...producto} onRemove={() => removeItem(producto.id)} />
      ))}
      <h4 className="mt-4">Total: ${totalPrice()}</h4>
      <div className="d-flex gap-3 mt-3">
        <button onClick={clearCart} className="btn btn-danger">Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
