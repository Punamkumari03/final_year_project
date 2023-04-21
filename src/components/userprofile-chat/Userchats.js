import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Userchats.css'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase/FirebaseConfig'
import { Link } from 'react-router-dom'

const Userchats = (props) => {
  let loggeduser = props.userdata[0]
  const [chats,setChats] = useState([])
 
  
  const getchatlist = async ()=>{
    const chatlistArray = []
    const q = query(collection(db,`allchat-${loggeduser.uid}`));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      chatlistArray.push({ ...doc.data(), id: doc.id });
    });
    setChats(chatlistArray)
  }
  getchatlist()
  // console.log(chats)

  return (
    <div>
      {props ? <div>
      
      <Navbar userdata={loggeduser}/>
      <div className='big-head-1'>Userchats</div>
      <div className='chat-list'>
        {chats.length>0?<>
{chats.map((chat)=>(
  <Link style={{textDecoration:'none'}} to={`/msgp2p/${chat.fuseruid}`}>
    <div className='chat-single'>
      <img src={chat.fprofpic} alt="" className='nav-profile-pic'/>
      <p>{chat.fusername}</p>
    </div>
  </Link>
))}
        </>:
        <div> No chats</div>}
      </div>
      </div>:
      <div>
        <Navbar />
        <div>you are not Logged in</div>
      </div>
      }
    </div>
  )
}

export default Userchats
