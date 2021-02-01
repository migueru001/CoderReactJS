import React from 'react'
import { Link } from 'react-router-dom';

function Agregar() {
  return (
    <React.Fragment>
        <div className="MenuBot">
            <Link to={`/cart`} style={{textDecoration:'none', fontWeight: '500', color:'blueviolet'}} >Agregar</Link>
        </div>
    </React.Fragment>
  );
}

export default Agregar;