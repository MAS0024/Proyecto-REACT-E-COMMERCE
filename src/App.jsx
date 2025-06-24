import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
