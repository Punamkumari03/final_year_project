import React, { useEffect, useState } from "react";
import "./Userprofile.css";
import Navbar from "../Navbar/Navbar";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
// import Post_profile from "../post/Post_profile";
import PostProfile from "../post/PostProfile";
import { Link, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer'

const Userprofile = (props) => {

  const navigate = useNavigate();
  let curruser = props.userdata[0];
  // console.log(curruser)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsArray = [];
      const postsref = collection(db, "posts");
      const q = query(postsref, where("post_user_id", "==", curruser.uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        postsArray.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArray);
    };
    getPosts();
  }, []);

  posts.sort((a, b) => {
    return b.date - a.date;
  });
  
  
  return (
    <div className="userprofile">
      {props ? (
        <div>
          <Navbar userdata={curruser} />
          <br />
          <br />
          <div className="profileSec container">
            <div className="profileData col-lg-3 col-md-6 col-12 d-flex flex-column">
                <br />
                <img src={curruser.profimage} alt='dp' className="profileDp"></img>
                <div className="profileText">
                    <p>{curruser.name}</p>
                    <p>{curruser.email}</p>

                </div>
                
                  
            </div>
            <div className="profilePost col-lg-8 col-md-6 col-12">
                      <h4 style={{marginLeft:'50px'}}>Your Posts</h4>
                      
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
      </div>
      ) : (
        <div>
          <Navbar />
          <div>Not Logged In</div>
        </div>
      )}

    <br />
    <br />
    <Footer></Footer>
    </div>
  );
};

export default Userprofile;
