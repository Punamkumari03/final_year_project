import React from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="left">
        <h1>Emergency-SOS</h1>
          {/* <img src={logo} alt="" /> */}
        </div>
        <div className="right">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>Signup</button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
