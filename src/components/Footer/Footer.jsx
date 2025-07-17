import React from 'react'
import './Footer.css'
import { FcGoogle } from 'react-icons/fc'; // Colorful Google icon
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si'; // Not colorful, color must be added manually
{/* <SiGoogleplay style={{ color: '#3bccff' }} /> */}
import QrCode from '../../assets/images/qrcode.jpg';
import PlayStore from '../../assets/images/playStore.png';
import AppStore from '../../assets/images/appStore.png';
import { FaLinkedinIn } from "react-icons/fa";   // LinkedIn outline-like




import { FaApple } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () =>{
    return(
        <>
       <div className="footer-header">
            <div className="col">
                <p className='logo'>Exclusive</p>
                <p className='subscribe'>Subscribe</p>
                <p className="get-off">Get 10% off your first order</p>
                <div className='footer-email'>
                    <input type="text" placeholder='Enter your email'/>
                    <FaTelegramPlane size={24}/>
                </div>
            </div>
            <div className="col">
                <p className="footer-title">Support</p>
                <div className="col-lists ">
                    <p>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
                </div>
                
            </div>
            <div className="col">
                <p className="footer-title">Account</p>
                <div className="col-lists">
                    <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
                </div>
                
            </div>
            <div className="col">
                <p className="footer-title">Quick-link</p>
                <div className="col-lists">
                     <p>Quick Link</p>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
                </div>
               
            </div>
            <div className="col">
                <p className='footer-title'>Download App</p>
                <p className='save'>Save $3 with App New User Only</p>
                <div className="download-app">
                    <div className="qr">
                        <img src={QrCode} alt="" />
                    </div>
                    <div className="apps">
                        <div className="google-app">
                          {/* < SiGoogleplay style={{ color: '#3bccff' }}/>
                          <div className="get-in">
                            <p>GET IT ON</p>
                            <p>Google Play</p>
                          </div> */}
                          <img src={PlayStore} alt="" />
                        </div>
                        <div className="google-app">
                          {/* <FaApple/>
                          <div className="get-in">
                            <p>Download on the</p>
                            <p>App Store</p>
                          </div> */}
                          <img src={AppStore} alt="" />
                        </div>
                      
                    </div>
                </div>
                <div className="social-medias">
                    <FaFacebookF size={24}/>
                    <FaTwitter size={24}/>
                    <FaInstagram size={24}/>
                    <FaLinkedinIn size={24}/>
                    
                </div>
            </div>

        </div> 
        <div className="copyright">
            &copy;Compyright Rimel 2022. All right reserved</div></>
        
    )
}
export default Footer;