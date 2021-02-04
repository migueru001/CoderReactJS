import React from 'react'
import { Link } from 'react-router-dom';

function BotonAccesorios() {
  return (
    <React.Fragment>
        <div className="Menu">
            <Link to={`/accesorios`} style={{color:'white',textDecoration:'none', fontWeight: '300'}} >Accesorios</Link>
        </div>
    </React.Fragment>
  );
}

export default BotonAccesorios;