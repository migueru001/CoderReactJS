import React from 'react';
import './Cart.css'
function Cart() {
  return (

    <React.StrictMode>
        <section className="CartMain">
            <div className="CartTable">
                <div className="CartTableHeader">
                    <p className="CartTableHeaderText">Detalle de la compra:</p>
                </div>
                <div className="CartTableSubHeader">
                    <div className="CartTableSubHeaderArticulo">
                        <p className="CartTableSubHeaderText">Articulo</p>
                    </div>
                    <div className="CartTableSubHeaderImagen">
                        <p className="CartTableSubHeaderText">Imagen</p>
                    </div>
                    <div className="CartTableSubHeaderCantidad">
                        <p className="CartTableSubHeaderText">Cantidad</p>
                    </div>
                    <div className="CartTableSubHeaderPrecio">
                        <p className="CartTableSubHeaderText">Precio</p>
                    </div>
                </div>
                <div className="CartTableBody">
                    <p className="CartTableHeaderText">En este espacio van los datos de compra</p>
                </div>
                <div className="CartTableFooter">
                    <div className="CartTableFooterDescription">
                        <p className="CartTableHeaderText">Detalle de la compra:</p>
                    </div>
                    <div className="CartTableFooterTotal">
                        <p className="CartTableHeaderText">$ 000</p>
                    </div>
                </div>
            </div>
        </section>
    </React.StrictMode>

  );
}

export default Cart;