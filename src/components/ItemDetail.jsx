// src/components/ItemDetail.jsx
import { useState } from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, img, description, price, stock }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const onAdd = (quantity) => {
    addItem({ id, name, price }, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h4>${price}</h4>
      {added ? <p>Producto agregado ✅</p> : <ItemCount stock={stock} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetail;
