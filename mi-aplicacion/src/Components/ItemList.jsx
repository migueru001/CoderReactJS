import React from 'react';
import './ItemList.css';

const ItemList = ({items}) => {


    return(
        <React.Fragment>
        <div className="ItemListMain">
            <div className="ItemList">
                <h3>Array de la promise</h3>
                <ul>
                    {items.map(item => <li key={item.id}>{item.nombre}</li>) }
                </ul>
            </div>
        </div>
        </React.Fragment>
    )

}

export default ItemList;