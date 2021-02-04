import React from 'react';
import './ItemCount.css';

const ItemCount = ({min, max, count, onAdd}) => {

    return (
        <React.Fragment>
            <div className="ItemCount">
                <button  onClick={min} className="ContadorMenos">-</button>
                <p className="ContadorNumero">{count}</p>
                <button  onClick={max} className="ContadorMas">+</button>
            </div>
            <button className="AgregarBoton" onClick={onAdd} >Terminar mi compra</button>
        </React.Fragment>
    );
  }
  
  export default ItemCount;