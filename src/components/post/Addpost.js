import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { db, storage } from "../../firebase/FirebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import Footer from "../Footer/Footer";

const Addpost = (props) => {
  let curruser = props.userdata[0];
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var hours = dateObj.getHours();
  var mins = dateObj.getMinutes();
  var seconds = dateObj.getSeconds();

  // let newdate= `${year}${month}${day}${hours}${mins}${seconds}`;

  const [description, setDescription] = useState();
  const [location,setLocation] = useState();
  const [postpic, setPostpic] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      setPostpic(selectedFile);
      setErrorMsg("");
    } else {
      setErrorMsg("please select your post ");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = curruser;
    let newdate = `${year}${month}${day}${hours}${mins}${seconds}`;
    const storageRef = ref(storage, `posts/${newdate}`);
    uploadBytes(storageRef, postpic)
    .then(() => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(db, `posts`), {
          email: user.email,
          description,location,
          name: user.name,
          profilepic: user.profimage,
          postpic: url,
          post_user_id: user.uid,
          date: parseInt(newdate),
        })
        .then(() => {
            setSuccessMsg("posted successfully");
            setTimeout(() => {
                setSuccessMsg('');
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
    .catch((error)=>{
        console.log(error.message)
    })
  };

  return (
    <div>
      {props ? (
        <div>
          <Navbar userdata={curruser} />
          <div className="form-outermost">
            <div className='logForm'>
            <h1>Add post</h1>
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
                onChange={handleProductImg}
                type="file"
                accept="image/png,image/jpg,image/gif"
                placeholder="Choose a profile picture"
              />
              <input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
              />
                <input
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
              />
              <button onClick={handleSubmit}>Submit</button>
            </form>
            </div>
          </div>
          <Footer></Footer>
        </div>
      ) : (
        <div>
          <Navbar />
          <div>Not logged in</div>
        </div>
      )}
    </div>
  );
};

export default Addpost;
