import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = ()=> {
    return (

        <footer class="footer-section " id="footer-div">
<div class="container">
         <div class="row p-3">
              <div class="col-lg-4 col-md-4 col-12 footer-left">
                   <h3>Emergency-SoS</h3>
                   <p><Link to='/*'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/services'>Services</Link></p>
                   <p className='para'>We try to provide useful resources to people who have met with accident.</p>
                   <br />
                   <Link className='footerLink' to='/signup'>Join Us</Link>
              </div>
              <div class="col-lg-4 col-md-4 col-12 ml-auto d-flex flex-column justify-content-center align-items-center">
                    <div className='footerContact'>
                         <ul>
                             <li><Link><i class="fa fa-map-marker"></i></Link>Delhi</li>
                             <li><Link><i class="fa fa-phone"></i></Link>1234567891</li>
                             <li><Link><i class="fa fa-envelope"></i></Link>xyz@gmail.com</li>
                         </ul>
                    </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12 ml-auto d-flex flex-column justify-content-center align-items-center">
                    {/* <div class="logo">
                      <h1>Tech Manish</h1>
                    </div> */}
                    <div class="icons d-flex justify-content-center">
                        <ul>
                           <a href=""><i class="fab fa-facebook"></i></a>
                           <a href=""><i class="fab fa-instagram"></i></a>
                           <a href=""><i class="fab fa-youtube"></i></a>
                           <a href=""><i class="fab fa-whatsapp"></i></a>
                        </ul>
                    </div>
              </div>
         </div>
    </div>
</footer>

    )
}
export default Footer