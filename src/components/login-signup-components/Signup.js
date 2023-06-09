import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db, storage } from "../../firebase/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './login-signup.css'
import Footer from "../Footer/Footer";
const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dob, setDob] = useState();
  const [profilepic, setProfilepic] = useState();

  const [successMsg, setSuccessMsg] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const auth = getAuth();
  const navigate = useNavigate();

  const handleProductImg = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      setProfilepic(selectedFile)
    }
    else{
      setErrorMsg('please select your profile pic')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const storageRef = ref(storage, `profile-image/${profilepic.name}`);
        uploadBytes(storageRef, profilepic)
          .then(() => {
            getDownloadURL(storageRef).then((url) => {
              addDoc(collection(db, `users`), {
                email,
                password,
                dob,
                profimage: url,
                name,
                uid:user.uid
              })
                .then(() => {
                  setSuccessMsg("user added successfully");
                  setTimeout(() => {
                    navigate("/login");
                  }, 2000);
                })
                .catch((error) => {
                  setErrorMsg(error.message);
                  setTimeout(() => {
                    setErrorMsg(" ");
                  }, 2000);
                });
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        if (
          error.message === "Firebase:Error (auth/invalid-email)." ||
          error.message === "Firebase: Error (auth/admin-restricted-operation.)"
        ) {
          setErrorMsg("please fill all required fields");
        }
        if (error.message === "Firebase:Error(auth/email-already-in-use).") {
          setErrorMsg("user already exists");
        }
        setTimeout(() => {
          setErrorMsg("");
        }, 4000);
      });
  };
  

  return (
    <div>
      <Navbar />
      <div className="form-outermost">
      <div className='logForm' style={{height:'80vh'}}>
        <h2>Be a helping hand</h2>
        <form className="form-inner">
          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
            </>
          )}
          {errorMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
            </>
          )}
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            type="text"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="email"
          />
          <input
            onChange={(e) => setDob(e.target.value)}
            type="date"
            placeholder="Choose Date of Birth"
          />
          <input
            onChange={handleProductImg}
            type="file"
            accept="image/png,image/jpg,image/gif"
            placeholder="Choose a profile picture"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Signup;
