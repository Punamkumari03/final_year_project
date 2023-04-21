import React, { useEffect, useState } from "react";
import "./Userprofile.css";
import Navbar from "../Navbar/Navbar";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
// import Post_profile from "../post/Post_profile";
import PostProfile from "../post/PostProfile";

const Userprofile = (props) => {
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
          <div className="section1">
            <div className="left">
              <img
                src={curruser.profimage}
                className="userprofile-image"
                alt=""
              />
            </div>
            <div className="right">
              <h1>{curruser.name}</h1>
              <h1>{curruser.email}</h1>
            </div>
          </div>
          <div className="userpost-head">
            <p>Your Posts</p>
          </div>
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
      ) : (
        <div>
          <Navbar />
          <div>Not Logged In</div>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
