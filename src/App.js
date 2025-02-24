import './App.css';

import Cart from './components/CartCom.js';
import Navbar from './components/Navbar.js';
import { Route,Routes } from 'react-router';
import Products from './components/Products.js';
import Details from './components/Details.js';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:id' element={<Details/>}/>
      </Routes>
      </>
    </div>
  );
}

export default App;
