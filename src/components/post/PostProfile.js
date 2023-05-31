import React from 'react'
import './Post_profile.css'

const PostProfile = (props) => {
    let currpost = props.postdata;

  return (
    <div className='post-profile post-mainpage'>
    <img src={currpost.postpic} alt=""/>
    <p><span>{currpost.name} &nbsp;</span>{currpost.description}</p>
     <p><span>Location - </span>{currpost.location}</p>
     
    </div>
  )
}

export default PostProfile;

