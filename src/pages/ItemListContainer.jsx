import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsRef = categoryId
      ? query(collection(db, 'productos'), where('category', '==', categoryId))
      : collection(db, 'productos');

    getDocs(productsRef)
      .then((res) => {
        setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <div className="text-center mt-5">Cargando productos...</div>;

  return (
    <div className="container mt-4">
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;