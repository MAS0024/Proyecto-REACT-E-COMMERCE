import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
  return (
    <div className="item-card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
