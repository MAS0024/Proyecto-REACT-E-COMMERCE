import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">E-Shop</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/smartphones">Smartphones</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/laptops">Laptops</NavLink>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
