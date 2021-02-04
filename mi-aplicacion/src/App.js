import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import Cart from './Components/Cart';
import ConsolaContainer from './Containers/ConsolaContainer';
import AccesoriosContainer from './Containers/AccesoriosContainer';
import JuegosContainer from './Containers/JuegosContainer';

function App() {
  return (
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <ItemListContainer />
        </Route>
        <Route exact path='/item/:id'>
            <ItemDetailContainer />
        </Route>
        <Route exact path='/cart'>
            <Cart />
        </Route>
        <Route exact path='/consolas'>
            <ConsolaContainer />
        </Route>
        <Route exact path='/accesorios'>
            <AccesoriosContainer />
        </Route>
        <Route exact path='/juegos'>
            <JuegosContainer />
        </Route>
        <Route exact path='/consolas/:id'>
            <ItemDetailContainer />
        </Route>
        <Route exact path='/accesorios/:id'>
            <ItemDetailContainer />
        </Route>
        <Route exact path='/juegos/:id'>
            <ItemDetailContainer />
        </Route> 
      </Switch>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
  );
}

export default App;
