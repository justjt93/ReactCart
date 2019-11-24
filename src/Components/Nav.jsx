import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  width: "100vw",
  backgroundColor: "lightblue",
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px 0 20px"
};

const buttonContainerStyle = {
  flexBasis: "25%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px 0 20px"
};

const navButtonStyle = {
  cursor: "pointer",
  margin: "0 5px 0 5px 0"
};

const Nav = props => {
  return (
    <nav className='navbar'>
      <h1>Coffee e-shop</h1>
      <div className='buttonContainer'>
        <Link to='/'>
          <div className='navButton'>E-shop</div>
        </Link>
        <Link to='/cart'>
          <div className='navButton'>Go to CHECKOUT</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
