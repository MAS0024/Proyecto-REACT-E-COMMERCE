import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = categoriaId
      ? query(collection(db, 'productos'), where('categoria', '==', categoriaId))
      : collection(db, 'productos');

    getDocs(productosRef)
      .then((resp) => {
        setItems(resp.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container mt-4">
      {loading ? <h2>Cargando productos...</h2> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
