import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useCart } from '../context/CartContext';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      comprador: form,
      items: cart,
      total: totalPrice(),
      fecha: new Date(),
    };

    addDoc(collection(db, 'orders'), order).then((docRef) => {
      setOrderId(docRef.id);
      clearCart();
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (orderId) {
    return (
      <div className="container py-4">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input type="text" name="telefono" value={form.telefono} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Enviar orden</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;