import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <Route exact path="/home">
        <Switch>
          <ItemListContainer nombre='Miguel Sanchez' />
        </Switch>
      </Route>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
