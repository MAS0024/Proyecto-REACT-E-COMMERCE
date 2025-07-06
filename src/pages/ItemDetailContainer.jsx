import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then(res => {
        setProduct({ id: res.id, ...res.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-5">Cargando producto...</div>;
  if (!product) return <div className="text-center mt-5">Producto no encontrado</div>;

  return (
    <div className="container mt-4">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;