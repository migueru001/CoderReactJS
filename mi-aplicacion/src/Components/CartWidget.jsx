import React from 'react'
import '../Components/CartWidget.css';
import IconoCarrito from './shopping-cart-icon.svg';
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <React.Fragment>
        <Link to={`/cart`}>
          <img className="CartWidget" src={IconoCarrito} alt="Icono Carrito"/>
        </Link>
    </React.Fragment>
  );
}

export default CartWidget;