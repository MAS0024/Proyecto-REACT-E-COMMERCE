import { useCart } from '../context/CartContext';

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useCart();

  return (
    <div>
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;