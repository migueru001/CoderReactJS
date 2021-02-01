import React from 'react'
import { Link } from 'react-router-dom';

function Detalles() {
  return (
    <React.Fragment>
        <div className="MenuBot">
            <Link to={`/category`} style={{textDecoration:'none', fontWeight: '500', color:'blueviolet'}} >Detalles</Link>
        </div>
    </React.Fragment>
  );
}

export default Detalles;