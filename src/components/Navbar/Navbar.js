import React, { useState } from "react";
// import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

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
  // let message_icon = "https://images.pexels.com/photos/16063640/pexels-photo-16063640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
const [finduser,setFinduser] = useState("");
const [finduserdoc,setFinduserdoc] = useState('');

const searchuser = (e)=>{
e.preventDefault();
const getUser = async ()=>{
  const q = query(collection(db,"users"),where("name","==",finduser));
  const data = await getDocs(q)
  setFinduserdoc(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  // console.log(finduserdoc);
  if(finduserdoc.length !==0){
    navigate(`/searchedprofile/${finduserdoc[0].uid}`);
  }
}
getUser();
}

  return (
    <div>
      <nav>
        <div className="left">
          <h1>Emergency-SOS</h1>
          {/* <img src={logo} alt="" /> */}
        </div>
        {curruser !== undefined ?
         <div className="center">
         <input placeholder="Search a helper by name" onChange={(e)=>setFinduser(e.target.value)} className="search-user" />
         <button onClick={searchuser}>&gt;</button>
          </div>
         :
         <div></div>}
     
        {curruser !== undefined ?
          <div className="right">
          <Link to="/mainpage">
            <button>Home</button>
          </Link>
          <Link to="/userchats">
            <button>chat</button>
          </Link>
          <Link to="/addpost">
            <button>+</button>
          </Link>
          <button onClick={logoutuser}>Logout</button>

          
          
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
