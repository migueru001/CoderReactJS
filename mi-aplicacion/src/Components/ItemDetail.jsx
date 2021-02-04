import React from 'react';
import './ItemDetail.css';
import CountContainer from '../Containers/CountContainer';
import Imagen from './Imagen-Ejemplo.png';

const ItemDetail = ({item, count }) => {

    return(
        
        <React.Fragment>
                
                 <div className="ItemDetailMain">
                    <div className="ItemDetailTable"> 
                        <div className="ItemDetailTableHeader">
                            <p className="ItemDetailTableText">Detalles del Producto:</p>
                        </div>

                        <div className="ItemDetailProps" key={item.id}>
                            <h3>{item.nombre}</h3>
                            <br/>
                            <div className="card">
                                <img src={Imagen}  alt="producto ML" style={{height: '100px'}}/>
                            </div>
                            <br/>
                            <p className="Descripcion">{item.descripcion}</p>
                            <br/>
                            <p className="Precio">{item.costo}</p>
                            <CountContainer initial={0} stock={10} />
                        </div> 
                    </div>
                </div> 

        </React.Fragment>
        
    )

}

export default ItemDetail;