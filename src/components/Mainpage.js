import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import './Mainpage.css'
import { collection, doc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
import Post_mainpage from "./post/Post_mainpage";
import Footer from './Footer/Footer';
import helpingHands from './assets/helpingHands.jpg';

const Mainpage = (props) => {
  let curruser = props.userdata[0];
  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async ()=>{
      const postsArray = [];
      const postsref = collection(db,"posts")
      const q = query(postsref);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>{
        postsArray.push({...doc.data(),id:doc.id})
      });
      setPosts(postsArray)
    }
    getPosts()
  },[])
// function shuffleArray(array){
//   for(var i = array.length -1; i>0;i++){
//     var j = Math.floor(Math.random()* (i+1));
//     var temp = array[i];
//     array[i]=array[j];
//     array[j]=array[i]
//   }
//   return array;
// }
// shuffleArray(posts)
  // console.log(curruser)
  return (
    <div>
      {props ? (
        <div>
          <Navbar userdata={curruser} />
          {/* <br /> */}
          <div className="postSec">
                <div className="postHeading col-lg-4 col-md-6 col-12">
                      <h3>Take a step forward...</h3>
                      <p>Your small favor can save someone's life.</p>
                </div>
          </div>
          <div className="mainpage-outer">
            <br />
            <h2>Recent Posts</h2>
            <br />
          {posts.length>0 ? <div>
          <div className='app_post'>
          {posts.map((post) => (
            <Post_mainpage key={post.id} postdata={post} />
          ))}
          </div>
            </div>:
            <div className="big-head">Try refreshing the page ..</div>}
        </div>

        <br />
        <br />

        <Footer></Footer>
        </div>
      ) : (
        <div>
          <Navbar />
          <div>mainpage</div>
        </div>
      )}
    </div>
  );
};

export default Mainpage;
