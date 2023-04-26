import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import logo from '../assets/logo.png';
import about from '../assets/pic1.jpg'
import about1 from '../assets/pic4.jpg'
import './About.css'

const About = () => {
  return (
    <div>
      <Navbar/>
          <div className="postSec">
                <div className="postHeading col-lg-4 col-md-6 col-12">
                <h3>About Us</h3>
                      {/* <h3>Take a step forward...</h3> */}
                      <p>Your small favor can save someone's life.</p>
                </div>
          </div>
          <br />
          <br />
          <br />
          <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 aboutImg'>
                        <img src={about1} className='col-lg-11' style={{height:'85vh'}}></img>
                    </div>
                    <div className='col-lg-6'>
                      <div className='para1 container'>
                        <h4>Origin of Emergency-SoS</h4>
                        <p>This project is about how different users can communicate efficiently in real time with each
                          other. So, to make these things possible we have a communication platform for chatting with
                          a goal to help the users in need or in an emergency to get the needed help on time and save
                          lives. With the advent of the pandemic, we saw a huge surge in the use of the Chat
                          Applications for business communication so, it gave rise to the idea to create a chat
                          application which will help users to get the needed help in an emergency of hour on time via
                          chat with other registered users, friends or family in a more proper and efficient way.
                        </p>              
                      </div>
                      <br />
                      <div className='para1 container'>
                            <h4>Purpose of Emergency-SoS</h4>
                            <p>The purpose of this Emergency-SOS is to chat one user with another user so they can know
                              their blood groups as well as other informative details. All the chats and files will be stored
                              on the server.
                            </p>              
                      </div>
                      <br />
                      <div className='para1 container'>
                            <h4>Mission of Emergency-SoS</h4>
                            <p>The Mission of Emergency-SoS is to inspire, encourage and initiate at all times all forms of humanitarian activities so that human suffering can be minimized and even prevented and thus contribute to creating more congenial climate for peace.
                            </p>              
                      </div>
                      <br />                
                    </div>
                </div>
          </div>

        
      <br />
      <br /> 
      <Footer/>
    </div>
  )
}

export default About
