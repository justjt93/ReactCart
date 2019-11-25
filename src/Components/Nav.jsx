import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className='navbar'>
      <h1>Satoshi Coffee E-shop</h1>
      <div className='buttonContainer'>
        <Link to='/' className='navLink'>
          <div className='navButton'>E-shop</div>
        </Link>
        <Link to='/cart' className='navLink'>
          <div className='navButton'>Go to CHECKOUT</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
