import React from 'react'
import { Link } from 'react-router-dom';

function Consolas() {
  return (
    <React.Fragment>
        <div className="Menu">
            <Link to={`/consolas`} style={{color:'white',textDecoration:'none', fontWeight: '300'}} >Consolas</Link>
        </div>
    </React.Fragment>
  );
}

export default Consolas;