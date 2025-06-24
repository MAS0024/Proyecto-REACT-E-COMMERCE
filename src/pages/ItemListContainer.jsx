import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(productRef)
      .then((snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container py-4">
      <h2 className="mb-4">{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;