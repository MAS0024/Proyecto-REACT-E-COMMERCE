import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-4">
        <h2>Carrito vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>Tu carrito</h2>
      <ul className="list-group mb-3">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.title} x {item.quantity}
            <span>${item.price * item.quantity}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice()}</h4>
      <button className="btn btn-danger me-2" onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
    </div>
  );
};

export default Cart;