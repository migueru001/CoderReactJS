import React from 'react'
import { Link } from 'react-router-dom';

function Juegos() {
  return (
    <React.Fragment>
        <div className="Menu">
            <Link to={`/Juegos`} style={{color:'white',textDecoration:'none', fontWeight: '300'}} >Juegos</Link>
        </div>
    </React.Fragment>
  );
}

export default Juegos;