import React from 'react'
import './Userprofile.css'
import Navbar from '../Navbar/Navbar';

const Userprofile = (props) => {
  let curruser = props.userdata[0];
  // console.log(curruser)
  return (
    <div className='userprofile'>
    {props ? <div>
      <Navbar userdata={curruser}/>
      <div className='section1'>
        <div className='left'>
          <img src={curruser.profimage} className='userprofile-image'
alt="" /> 
      </div>
        <div className='right'>
          <h1>{curruser.name}</h1>
          <h1>{curruser.email}</h1>
        </div>
      </div>
<div className='userpost-head'>
  <p>Your Posts</p>
</div>
<div className='section2'></div>

    </div>:
    <div>
      <Navbar/>
      <div>Not Logged In</div>
    </div>
    }
      
    </div>
  )
}

export default Userprofile
