import React from 'react';

const PriceItem = ({subtotal}) => {

    return (
        <React.Fragment>
            <p className="Precio">{subtotal}</p>
        </React.Fragment>
    );

}

export default PriceItem;