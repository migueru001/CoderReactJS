import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ getItems }) => {


    return(
        
        <React.Fragment>

                {getItems?.map((getItem) => {
                    return (
                    <div className="ItemDetailMain"  key={getItem.id}>
                        <br/>
                        <h3>{getItem.title}</h3>
                        <br/>
                        <div className="card">
                            <img src={getItem.thumbnail}  alt="producto ML" style={{height: '100px'}}/>
                        </div>
                        <br/>
                        <p className="Descripcion">{getItem.title}</p>
                        <br/>
                        <p className="Precio">{getItem.price}</p>
                    </div> )
                })} 

        </React.Fragment>
        
    )

}

export default ItemDetail;