import React from 'react';
import './ItemDetail.css';
import CountContainer from '../Containers/CountContainer';
import Imagen from '../Components/Imagen-Ejemplo.png';


const ItemDetail = ({getItems}) => {


    return(
        
        <React.Fragment>
                
                <div className="ItemDetailMain">
                    <div className="ItemDetailTable"> 
                        <div className="ItemDetailTableHeader">
                            <p className="ItemDetailTableText">Detalles del Producto:</p>
                        </div>

                        {getItems?.map((getItem) => {
                        return (
                        <div className="ItemDetailProps" key={getItem.id}>
                            <h3>{getItem.title}</h3>
                            <br/>
                            <div className="card">
                                <img src={Imagen}  alt="producto ML" style={{height: '100px'}}/>
                            </div>
                            <br/>
                            <p className="Descripcion">{getItem.title}</p>
                            <br/>
                            <p className="Precio">{getItem.price}</p>
                            <CountContainer initial={0} stock={10} />
                        </div> )
                        })}

                    </div>
                </div>
                
        </React.Fragment>
        
    )

}

export default ItemDetail;