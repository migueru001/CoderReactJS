import React, { useState } from 'react';
import ItemCount from '../Components/ItemCount';
import PriceItem from '../Components/PriceItem';
import Cart from '../Components/Cart'

const CountContainer = ({initial, stock, item}) => {

    const [count, setCount] = useState(initial);

 
    const sumar = () => {
        if(count >= stock) {
            alert("Superaste el stock")
        } else {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if(count > 0) {
            setCount(count - 1);
        }else {
            alert("Tienes que agregar al menos un item");
        }
    }

    let subtotal;

    if (count === 0) {
        subtotal = item.costo;
    } else { 
        subtotal = item.costo * count;
    }
    
    const miArticulo = new Object();
        miArticulo.id = item.id;
        miArticulo.nombre = item.nombre;
        miArticulo.costo = subtotal;
        miArticulo.descripcion = item.descripcion;
        miArticulo.cantidad = count;


    console.log(miArticulo) 

    function onAdd() {
        alert(`Agregaste ${miArticulo.cantidad} ${miArticulo.nombre} al carrito por $USD ${miArticulo.costo}`);
    }

  


        
    

    return (
        <React.Fragment>
            <PriceItem subtotal={subtotal}/>
            <ItemCount min={restar} max={sumar} count={count} onAdd={onAdd} />
            <Cart articulo={miArticulo}/>
        </React.Fragment>
        
    );

};

export default CountContainer;
