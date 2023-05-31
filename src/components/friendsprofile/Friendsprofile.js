import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/FirebaseConfig";
import Navbar from "../Navbar/Navbar";
import PostProfile from "../post/PostProfile";
import Footer from "../Footer/Footer";


const Friendsprofile = (props) => {
  const { fuseruid } = useParams();
  const [user, setUser] = useState("");
  const loggeduser = props.userdata[0]; // logged person
  const [posts, setPosts] = useState([]);

  const getUser = async () => {
    const q = query(collection(db, "users"), where("uid", "==", fuseruid));
    getDocs(q).then((data) => {
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const getPosts = async () => {
        const postsArray = [];
        const postsref = collection(db, "posts");
        const q = query(postsref, where("post_user_id", "==", user[0].uid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          postsArray.push({ ...doc.data(), id: doc.id });
        });
        setPosts(postsArray);
      };
      getPosts();
    });
  };
  getUser();
  let curruser = user[0]; //searched user
  posts.sort((a, b) => {
    return b.date - a.date;
  });

  const addtouserchats = () => {
    const addftologged = () => {
      const q = query(
        collection(db, `allchat-${loggeduser.uid}`),
        where("fuseruid", "==", fuseruid)
      );
      getDocs(q).then((data) => {
        console.log(data.docs);
        if (data.docs.length !== 0) {
          console.log("user already added to the chat list");
        } else {
          addDoc(collection(db, `allchat-${loggeduser.uid}`), {
            fuseruid: curruser.uid,
            fprofpic: curruser.profimage,
            fusername: curruser.name,
          })
            .then(() => {
              console.log("user added to chat section");
            })
            .catch(() => {
              console.log("user not added to chat section");
            });
        }
      });
    };
    const addloggedtof = () => {
      const q = query(
        collection(db, `allchat-${fuseruid}`),
        where("fuseruid", "==", loggeduser.uid)
      );
      getDocs(q).then((data) => {
        console.log(data.docs);
        if (data.docs.length !== 0) {
          console.log("user already added to the chat list");
        } else {
          addDoc(collection(db, `allchat-${fuseruid}`), {
            fuseruid: loggeduser.uid,
            fprofpic: loggeduser.profimage,
            fusername: loggeduser.name,
          })
            .then(() => {
              console.log("user added to chat section");
            })
            .catch(() => {
              console.log("user not added to chat section");
            });
        }
      });
    };
    addftologged();
    addloggedtof();
  };

  return (
    <div className="userprofile">
      {user ? (
        <div>
          <Navbar userdata={loggeduser} />
          <br/>
          <br/>

          <div className="profileSec container">
            <div className="profileData col-lg-3 col-md-6 col-12 d-flex flex-column">
              <br/>
              <img
                src={curruser.profimage}
                alt='dp'
                className="profileDp"
                
              />
              <div className="profileText">
              <p>{curruser.name}</p>
              <p>{curruser.email}</p>
              </div>


              {loggeduser.uid !== curruser.uid ? (
              <Link to={`/msgp2p/${curruser.uid}`}>
                {" "}
                <button className="msg-btn-profile" onClick={addtouserchats}>
                  Message
                </button>
              </Link>
            ) : (
              <></>
            )}

            

            </div>
           
            
          
          <div className="profilePost col-lg-8 col-md-6 col-12">
              <h4 style={{marginLeft:'50px'}}>{curruser.name}'s posts</h4>
        
              <div className="section2">
                {posts.length > 0 ? (
                  <>
                    {posts.map((post) => (
                      <PostProfile key={post.id} postdata={post} />
                    ))}
                  </>
                ) : (
                  <div className="big-head">No Post</div>
                )}
              </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <Footer></Footer>
      </div>
      ) : (
        <div>
          <Navbar />
          <div className="big-head">Loading...</div>
          <br />
          <Footer></Footer>
        </div>
        
      )}
    </div>
  );
};

export default Friendsprofile;
