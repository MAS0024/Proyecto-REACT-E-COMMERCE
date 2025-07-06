import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-primary me-2" onClick={decrease}>-</button>
      <strong>{count}</strong>
      <button className="btn btn-outline-primary ms-2" onClick={increase}>+</button>
      <button className="btn btn-success ms-3" onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
};

export default ItemCount;