import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/login-signup-components/Signup";
import Login from "./components/login-signup-components/Login";
import Mainpage from "./components/Mainpage";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase/FirebaseConfig";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import Fof from "./components/Fof";
import Userchats from "./components/userprofile-chat/Userchats";
import Userprofile from "./components/userprofile-chat/Userprofile";
import Addpost from "./components/post/Addpost";
import Friendsprofile from "./components/friendsprofile/Friendsprofile";
import Ptopmsg from "./components/Chat-components/Ptopmsg";
import Services from "./components/Features/Services";
import About from "./components/About/About";


function App() {
  const [user, setUser] = useState("");
  const [seccessMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function GetCurrentUser() {
    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUser = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );

            // console.log(q)
            
            const data = await getDocs(q)
            setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            // setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

          
          };
          getUser();
        } else {
          setUser(null);
        }
      })
    }, []);
    return user;
  }
  GetCurrentUser();
  // console.log(user[0]);
  return (
    <div>
      {user ? (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/mainpage" element={<Mainpage userdata={user} />} />
              <Route path="/mainpage" element={<Mainpage userdata={user} />} />
              <Route
                path="/userchats"
                element={<Userchats userdata={user} />}
              />
              <Route
                path="/userprofile"
                element={<Userprofile userdata={user} />}
              />
              <Route path="/addpost" element={<Addpost userdata={user}/>}/>
              <Route path='/searchedprofile/:fuseruid' element={ <Friendsprofile userdata={user}/>} />
              <Route path='/msgp2p/:fuseruid' element={ <Ptopmsg userdata={user}/>} />
              
              <Route path="*" element={<Fof userdata={user} />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<Fof />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
