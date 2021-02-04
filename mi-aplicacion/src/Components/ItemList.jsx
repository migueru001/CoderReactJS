import React from 'react';
import './ItemList.css';
import Item from './Item';


const ItemList = ({items}) => {

    return(
        <React.Fragment>
            <section>
            <div className="CentradoArticulos">
                <div className="ItemListMain">
                    {items && items.map( item =>  <Item key={item.id} item={item}/>)}
                </div>
            </div>
            </section>
        </React.Fragment>
    )

}

export default ItemList;