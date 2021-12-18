import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
   

      return (
      <div className="App">
  <ProductContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
        
             <Switch>
                    <Route path="/" exact component={Products}/>
                    <Route path="/cart" exact component={Cart}/>
                    
                    
                   
              </Switch>
        </Router>
    
           
        </CartContextProvider>
        
  </ProductContextProvider>
      </div>
      );
}
export default App;
