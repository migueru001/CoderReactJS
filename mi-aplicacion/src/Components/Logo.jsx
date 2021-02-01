import React from 'react'
import Logo from './Logo-ReactJS.svg';
import { Link } from 'react-router-dom';

function logo() {
  return (
    <React.Fragment>
      <Link to={`/`}>
        <img src={Logo} style={{height: 60}} alt="Logo"/>
      </Link>
    </React.Fragment>
  );
}

export default logo;