import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './login-signup.css'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const [successMsg, setSuccessMsg] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const navigate = useNavigate()
    const auth = getAuth();

    const handleSubmit = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            const user=userCredential.user;
            setSuccessMsg('Logged in successfully')
            setTimeout(() => {
                navigate('/mainpage')
            }, 2000);
        })
        .catch((error) => {
            const errorCode= error.code;
            const errorMessage = error.message;
            console.log(error.message);
            if (
              errorMessage === "Firebase:Error (auth/wrong-password)."
            ) {
              setErrorMsg("wrong password");
            }
            if (errorMessage === "Firebase:Error(auth/user-not-found).") {
              setErrorMsg("user not registered,please sign up first");
            }
            if (errorMessage === "Firebase:Error(auth/missing-email)." || errorMessage === "Firebase: Error (auth/internal-error).") {
                setErrorMsg("fields can't be empty");
              }
            setTimeout(() => {
              setErrorMsg("");
            }, 4000);
          });

    }
  return (
    <div>
    <Navbar />
    <div className="form-outermost">
       <div className='logForm'>
      <h2>Let's get in</h2>
      <br />
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>

    <Footer></Footer>
  </div>
  )
}

export default Login
