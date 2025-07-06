import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">TiendaComputer</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/placasvideo">Placas de Video</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/motherboard">Motherboards</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/procesadores">Procesadores</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/rams">Memorias Rams</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/almacenamiento">Almacenamiento</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/fuentes">Fuentes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/gabinetes">Gabinetes</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;