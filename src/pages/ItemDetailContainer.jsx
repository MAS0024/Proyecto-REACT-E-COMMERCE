import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const ref = doc(db, 'products', itemId);
    getDoc(ref).then((snap) => {
      if (snap.exists()) setItem({ id: snap.id, ...snap.data() });
    });
  }, [itemId]);

  return (
    <div className="container py-4">
      {item ? <ItemDetail item={item} /> : <p>Cargando detalle...</p>}
    </div>
  );
};

export default ItemDetailContainer;