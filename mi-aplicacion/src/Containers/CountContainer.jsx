import React, { useState } from 'react';
import ItemCount from '../Components/ItemCount';

const CountContainer = ({initial, stock}) => {



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

    const onAdd = () => {
        alert(`Agregaste ${count} al carrito`);
    }

    return (
        <React.Fragment>
            <ItemCount min={restar} max={sumar} count={count} onAdd={onAdd} />
        </React.Fragment>
    );

};

export default CountContainer; 

