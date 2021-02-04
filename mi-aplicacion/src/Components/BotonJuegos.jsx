import React from 'react'
import { Link } from 'react-router-dom';

function BotonJuegos() {
  return (
    <React.Fragment>
        <div className="Menu">
            <Link to={`/juegos`} style={{color:'white',textDecoration:'none', fontWeight: '300'}} >Juegos</Link>
        </div>
    </React.Fragment>
  );
}

export default BotonJuegos;