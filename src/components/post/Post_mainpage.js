import React from 'react'

const Post_mainpage = (props) => {
    const currpost = props.postdata
  return (
    <div className='post-mainpage'>
     <div className='section-row'>
        <img className='prp' alt="" src={currpost.profilepic}/>
       <div className='section-col'>
        <h1>{currpost.name}</h1>
        <h2>{currpost.email}</h2>
     </div>
     </div>
     <hr/>
     <img className='pop' alt="" src={currpost.postpic}/>
     <hr/>
     <p><span>{currpost.name} &nbsp;</span>{currpost.description}</p>
    </div>
    
  )
}

export default Post_mainpage