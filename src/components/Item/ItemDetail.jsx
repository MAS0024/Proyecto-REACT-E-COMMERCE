import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const [agregado, setAgregado] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    agregarAlCarrito(item, cantidad);
    setAgregado(true);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={item.imagen} alt={item.nombre} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p><strong>${item.precio}</strong></p>
        {agregado
          ? <a href="/cart" className="btn btn-success">Terminar compra</a>
          : <ItemCount stock={item.stock} onAdd={handleAgregar} />}
      </div>
    </div>
  );
};

export default ItemDetail;
