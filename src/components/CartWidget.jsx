import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <NavLink to="/cart" className="btn btn-outline-light position-relative">
      <FaShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalItems()}
      </span>
    </NavLink>
  );
};

export default CartWidget;
