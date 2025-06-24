import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <NavLink to="/" className="navbar-brand">MiTienda</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/category/electronica" className="nav-link">Electrónica</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category/ropa" className="nav-link">Ropa</NavLink>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;