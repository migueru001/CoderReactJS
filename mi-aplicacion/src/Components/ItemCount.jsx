import React from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';

const ItemCount = ({min, max, count, onAdd}) => {

    return (
        <React.Fragment>
            <div className="ItemCount">
                <button  onClick={min} className="ContadorMenos">-</button>
                <p className="ContadorNumero">{count}</p>
                <button  onClick={max} className="ContadorMas">+</button>
            </div>
            <Link to={`/cart`}> 
                { count >= 1 && <button className="AgregarBoton" onClick={onAdd} >Terminar mi compra</button> }
            </Link>
        </React.Fragment>
    );
  }
  
  export default ItemCount;