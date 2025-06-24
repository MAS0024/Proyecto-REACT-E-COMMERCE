import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then((resp) => {
        setItem({ id: resp.id, ...resp.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container mt-4">
      {loading ? <h2>Cargando producto...</h2> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
