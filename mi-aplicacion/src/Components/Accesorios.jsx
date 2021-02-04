import React from 'react';
import './ItemList.css';
import Imagen from './Imagen-Ejemplo.png';
import Agregar from './Agregar';
import Detalles from './Detalles';
import {Link} from 'react-router-dom';

const Accesorios = ({item}) => {

    return(
        
    <div className="ItemList">
        <img src={Imagen} style={{width:300, height: 200}} alt="foto"/>
        <div className="TituloArticuloPadre">
            <p className="TituloArticulo">{item.nombre}</p>
        </div>
        <div className="TituloArticuloPadre02">
            <p className="TituloPrecio">$ {item.costo}</p>
        </div>
        <div className="TituloArticuloPadre03">
            <Link to={`/accesorios/${item.id}`}>
                <Detalles />
            </Link>
            <Agregar />
        </div>
    </div>

    )

}

export default Accesorios;