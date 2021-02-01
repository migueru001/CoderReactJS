import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemListContainer from './Containers/ItemListContainer';
import Cart from './Components/Cart';
import ItemDetailContainer from './Containers/ItemDetailContainer'


function App() {
  return (
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <ItemListContainer />
        </Route>
        <Route exact path="/cart">
            <Cart />
        </Route>
        <Route exact path="/category">
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
  );
}

export default App;
