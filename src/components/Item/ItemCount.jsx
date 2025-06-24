import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => cantidad < stock && setCantidad(cantidad + 1);
  const handleRestar = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div>
      <div className="d-flex align-items-center mb-2">
        <button onClick={handleRestar} className="btn btn-secondary">-</button>
        <span className="mx-3">{cantidad}</span>
        <button onClick={handleSumar} className="btn btn-secondary">+</button>
      </div>
      <button onClick={() => onAdd(cantidad)} className="btn btn-primary">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
