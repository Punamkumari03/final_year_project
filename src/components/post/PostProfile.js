import React from 'react'
import './Post_profile.css'

const PostProfile = (props) => {
    let currpost = props.postdata;

  return (
    <div className='post-profile'>
    <img src={currpost.postpic} alt=""/>
     
    </div>
  )
}

export default PostProfile;

