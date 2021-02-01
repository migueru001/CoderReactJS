import React from 'react';
import './ItemList.css';
import Imagen from './Imagen-Ejemplo.png';
import Agregar from './Agregar';
import Detalles from './Detalles';

const ItemList = ({items}) => {

    return(
        <React.Fragment>
            <section>
            <div className="CentradoArticulos">
                <div className="ItemListMain">
                {items.map(item => 

                    <div className="ItemList" key={item.id}>
                        <img src={Imagen} style={{width:300, height: 200}} alt="foto"/>
                        <div className="TituloArticuloPadre">
                            <p className="TituloArticulo">{item.nombre}</p>
                        </div>
                        <div className="TituloArticuloPadre02">
                            <p className="TituloPrecio">$ {item.costo}</p>
                        </div>
                        <div className="TituloArticuloPadre03">
                            <Detalles />
                            <Agregar />
                        </div>
                    </div>
                                    
                )}
                </div>
            </div>
            </section>
                
                {/* <ul>
                    {items.map(item => <li key={item.id}>{item.nombre}</li>)}
                </ul> */}

        </React.Fragment>
    )

}

export default ItemList;