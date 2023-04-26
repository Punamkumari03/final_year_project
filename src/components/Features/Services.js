import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import post1 from '../assets/post1.png';
import chat from '../assets/chat.png';
import loc from '../assets/loc.png';
import './Services.css'
import { Link } from 'react-router-dom';
import services from '../assets/pic2.jpg'


const Services = () => {
  return (
    <div>
         <Navbar></Navbar>
            <div className="postSec">
                    <div className="postHeading col-lg-4 col-md-6 col-12">
                        <h3>Our Services</h3>
                        <p>Take a look at how it actually works.</p>
                    </div>
            </div>
            <br />
                       {/* ******************Cards section*********************** --> */}

<section class="Cards-section">
  <div class="container">
     <div class="row">
       <div class=" extra-div col-lg-4 col-md-4 col-12">
              <a href="#"><img src={post1} /></a>
              <h2>Post Query</h2>
              <p>We can add a post detailing location where help needed with description of patient and his requirements.
              </p>
         
       </div>

        <div class="extra-div col-lg-4 col-md-4 col-12">
              <a href="#"><img src={chat} /></a>
              <h2>One-to-One Chat</h2>
              <p>Users can find available users and can chat with them and share their details in person too.
              </p>
         
       </div>


        <div class="extra-div col-lg-4 col-md-4 col-12">
              <a href="#"><img src={loc} /></a>
              <h2>Location Tracker</h2>
              <p>Location sharing feature is available in app so that people can track the fastest to reach the location.
              </p>
         
       </div>
     </div>
  </div>
</section>


{/* **********************************Cards Section ends *******************--> */}

            <div className='serviceApp container'>
                <div className='row'>
                       <div className='col-lg-6 col-md-6 col-12'>
                                <img className='col-11' src={services} style={{height:'60vh'}}></img>
                       </div>
                       <div className='col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center '>
                            <h3>Get Our App</h3>
                            
                            <h5 style={{padding:'30px',marginBottom:'20px',paddingBottom:'0px'}}>User can access same features in app also -- </h5>
                            <ul>
                                <li>Find available users</li>
                                <li>Chat with other users</li>
                                <li>Upload posts according to their need</li>
                                <li>Location sharing option is available</li>
                            </ul>
                            <br />
                            <button><Link>Get App</Link></button>
                       </div>
                </div>                                       
            </div>
            <br />
            <br />
            <br />
        
            
 
         <Footer></Footer>
    </div>
  )
}

export default Services
