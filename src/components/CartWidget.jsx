import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useCart();
  const quantity = totalQuantity();

  return (
    <Link to="/cart" className="btn btn-outline-dark position-relative">
      <FaShoppingCart />
      {quantity > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {quantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;