const CartItem = ({ title, quantity, price, onRemove }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div>
        <strong>{title}</strong> x{quantity}
      </div>
      <div>
        <span className="me-3">${price * quantity}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={onRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
