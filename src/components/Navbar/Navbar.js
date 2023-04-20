import React from "react";
// import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

const Navbar = (props) => {
  const navigate = useNavigate();
  const logoutuser = () => {
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  let curruser = props.userdata
  let message_icon = "https://images.pexels.com/photos/16063640/pexels-photo-16063640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

  return (
    <div>
      <nav>
        <div className="left">
          <h1>Emergency-SOS</h1>
          {/* <img src={logo} alt="" /> */}
        </div>
     
        {curruser != undefined ?
          <div className="right">
          <button onClick={logoutuser}>Logout</button>
          <Link to="/userchats">
            <button>chat</button>
          </Link>
          <Link to="/userprofile">
            <img src={curruser.profimage} className="nav-prifile-pic" alt="" />
          </Link>
        </div>
        :
        <div className="right">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>

        }
      </nav>
      <hr/>
    </div>
  );
};

export default Navbar;
