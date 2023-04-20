import React from 'react'
import Navbar from '../Navbar/Navbar'

const Userchats = (props) => {
  let curruser = props.userdata[0]
  return (
    <div>
      {props ? <div>
      
      <Navbar userdata={curruser}/>
      <div>Userchats</div>
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
