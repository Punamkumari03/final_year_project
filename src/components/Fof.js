import React from 'react'
import Navbar from './Navbar/Navbar';
import helpingHands from './assets/helpingHands.jpg';
import logo1 from './assets/logo1.jpg';
import logo from './assets/logo.png'
import './Fof.css';
import { Link } from 'react-router-dom';
import post from '../components/assets/post.jpg' ;
import post1 from '../components/assets/post1.png';
import chat from '../components/assets/chat.png';
import loc from '../components/assets/loc.png';
import saumya from '../components/assets/Saumya.jpg';
import punam from '../components/assets/Punam.jpeg';
import kashish from '../components/assets/Kashish.jpg';
import anand from '../components/assets/anand.jpeg'
import kushaal from '../components/assets/kushaal.jpeg'
import a5 from '../components/assets/a5.jpeg'
import a1 from '../components/assets/a1.jpg'
import a2 from '../components/assets/a2.jpg'
import post3 from '../components/assets/post3.jpeg';
import post4 from '../components/assets/post4.jpeg';
import Footer from './Footer/Footer';



const Fof = () => {
  return (
    <div>
        <Navbar/>

        {/* header */}
        
        <div class="header" id='top-header'>
              <section class="header-section">
                  <div class="center-div">
                        <h1 class="font-weight-bold">Take a step towards humanity</h1>
                        <p>Be a helping hand</p>
                        <div class="header-buttons">
                            
                            <Link to={"/about"}>About Us</Link>
                            <Link to={"/login"}> Help Now</Link>                     
                        </div>
                  </div>
              </section>
        </div> 





{/* Active Posts */}


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

{/* **********************************Recents Posts  starts here**************************** */}
<div className='homePosts' class="container">
       <div className='postHeading'>
             <h2 style={{textAlign:'center'}}>Recent Posts</h2>
       </div>
       <div className='postSection'>
             <div class= 'row d-flex justify-content-center'>

                  <div className='post-mainpage' class='col-lg-3 col-md-6 col-12 post1' style={{margin:'20px',padding:'20px'}}>
                        <div className='section-row'>
                            <img className='prp' alt="" src={anand}/>
                            <div className='section-col'>
                              <h1 style={{marginLeft:'10px'}}>Anand Shukla</h1>
                            </div>
                        </div>
                      
                        <img className='pop' alt="" src={a5}/>
                    
                        <p><span>Anand&nbsp;</span>need B-Positive</p>
                        <p><span>Location - </span>gamma-1 greater noida</p>
                    </div> 
                  
                    <div className='post-mainpage' class='col-lg-3 col-md-6 col-12' style={{margin:'20px',padding:'20px'}}>
                            <div className='section-row'>
                                <img className='prp' alt="" src={kushaal}/>
                                <div className='section-col'>
                                  <h1 style={{marginLeft:'10px'}}>Kushaal Singh</h1>
                                </div>
                            </div>
                          
                            <img className='pop' alt="" src={a1}/>
                        
                            <p><span>Kushaal&nbsp;</span> Urgent need of O+ blood</p>
                            <p><span>Location - </span>alpha 1 greater noida</p>
                      </div> 

                      <div className='post-mainpage' class='col-lg-3 col-md-6 col-12' style={{margin:'20px',padding:'20px'}}>
                            <div className='section-row'>
                                <img className='prp' alt="" src={punam}/>
                                <div className='section-col'>
                                  <h1 style={{marginLeft:'10px'}}>Punam Gupta</h1>
                                </div>
                            </div>
                          
                            <img className='pop' alt="" src={a2}/>
                        
                            <p><span>Punam&nbsp;</span> Urgent need of B-negative blood</p>
                            <p><span>Location - </span>Rajnagar extension Gaziyabad</p>
                      </div> 
    
                  
             </div>

       </div>

       <div className='postLink'>
            <p><Link to='/signup'>View More... </Link></p>
       </div>

</div>

<br />
<br />
<br />



{/* **********************************Recents Posts  ends here**************************** */}



{/* ***************************Testimonials starts here**************************** */}

{/* mid section start here */}
<div class="common">
         <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12"><h6>Know More</h6>
                    <h1>Get help in case of emergency through some simple steps.</h1></div>
                <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-end">
                <Link to={'/about'}>
                <button class="btn btn-light px-5 py-2">About Us </button></Link>
                </div>
              </div>
         </div>
     </div>
{/* mid section end  here */}

<div className='testimonials'>
           <div className='test'>
                 <h2>What People Say</h2>
           </div> 
           <br />
                  

    <div id="carouselExampleIndicators" class="carousel slide testIndicators" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
                <div class="carousel-item active testItem">
                          <div className="row testCenter">
                                <div className="col-md-3 text-center">
                                  <div className="profile">
                                      <img src={punam} alt=""className="user"/>
                                    <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                      <h3>punam Gupta </h3>
                                  </div>
                                </div>
                                <div className="col-md-3 text-center">
                                  <div className="profile">
                                      <img src={saumya} alt=""className="user"/>
                                      <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                      <h3>punam Gupta </h3>
                                  </div>
                                </div>
                                <div className="col-md-3 text-center">
                                  <div className="profile">
                                      <img src={kashish} alt=""className="user"/>
                                    <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                      <h3>punam Gupta</h3>
                                  </div>
                                </div>                          
                          </div>
                  </div>
                  <div class="carousel-item testItem">
                              <div className="row testCenter">
                                    <div className="col-md-3 text-center">
                                      <div className="profile">
                                          <img src={kashish} alt=""className="user"/>
                                        <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                          <h3>punam Gupta <span>Co-Founder at XYX</span></h3>
                                      </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                      <div className="profile">
                                          <img src="https://images.pexels.com/photos/7090350/pexels-photo-7090350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""className="user"/>
                                          <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                          <h3>punam Gupta <span>Co-Founder at XYX</span></h3>
                                      </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                      <div className="profile">
                                          <img src="https://images.pexels.com/photos/7090350/pexels-photo-7090350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""className="user"/>
                                        <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                          <h3>punam Gupta <span>Co-Founder at XYX</span></h3>
                                      </div>
                                    </div>
                                </div>
                  </div>
                    <div class="carousel-item testItem">
                      <div className="row testCenter">
                            <div className="col-md-3 text-center">
                              <div className="profile">
                                  <img src="https://images.pexels.com/photos/7090350/pexels-photo-7090350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""className="user"/>
                                <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                  <h3>punam Gupta <span>Co-Founder at XYX</span></h3>
                              </div>
                            </div>
                            <div className="col-md-3 text-center">
                              <div className="profile">
                                  <img src="https://images.pexels.com/photos/7090350/pexels-photo-7090350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""className="user"/>
                                  <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                  <h3>punam Gupta <span>Co-Founder at XYX</span></h3>
                              </div>
                            </div>
                            <div className="col-md-3 text-center">
                              <div className="profile">
                                  <img src="https://images.pexels.com/photos/7090350/pexels-photo-7090350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""className="user"/>
                                <p>The history of the labor movement needs to be taught in every school in this land. America is a living testimonial to what free men and women, organized in free democratic trade unions can do to make a better life. We ought to be proud of it!</p>
                                  <h3>punam Gupta <span>Co-Founder at XYX</span></h3>
                              </div>
                            </div>
                          </div>
                      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Previous</span> */}
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Next</span> */}
  </button>
</div>

</div>
<br />
<br />

{/* ****************************Testimonials ends here*********************** */}



{/* Footer */}

<Footer></Footer>


    </div>


  )
}

export default Fof
