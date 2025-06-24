import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">${item.precio}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">Ver más</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
