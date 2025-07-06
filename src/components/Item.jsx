import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={img} className="img" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text fw-bold">${price}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;