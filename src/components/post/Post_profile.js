import React from 'react'
import './Post_profile.css'

const Post_profile = (props) => {
    let currpost = props.postdata;
    console.log('hi')

  return (
    <div className='post-profile'>
    <img src={currpost.postpic} alt=""/>
     
    </div>
  )
}

export default Post_profile
