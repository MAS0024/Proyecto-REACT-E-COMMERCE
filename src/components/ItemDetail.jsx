import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, price, description, img, stock }) => {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const onAdd = (count) => {
    addItem({ id, name, price }, count);
    setAdded(true);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={img} alt={name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{name}</h2>
        <p>{description}</p>
        <h4>${price}</h4>
        {!added && <ItemCount stock={stock} onAdd={onAdd} />}
        {added && <div className="alert alert-success mt-3">Producto agregado al carrito</div>}
      </div>
    </div>
  );
};

export default ItemDetail;