import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const order = {
      buyer: form,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp()
    };
    addDoc(collection(db, 'ordenes'), order)
      .then(doc => {
        setOrderId(doc.id);
        clearCart();
      });
  };

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" name="nombre" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input className="form-control" name="telefono" onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
