import React from 'react'
import '../Components/CartWidget.css';
import IconoCarrito from './shopping-cart-icon.svg';

function CartWidget() {
  return (
    <React.Fragment>
        <img className="CartWidget" src={IconoCarrito} alt="Icono Carrito"/>
    </React.Fragment>
  );
}

export default CartWidget;