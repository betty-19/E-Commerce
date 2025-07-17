import React from 'react'

const Footer = () =>{
    return(
        <div className='footer-header'>
            <div className="exlusive">
                <p>Exclusive</p>
                <p>Subscribe</p>
                <div>
                    <input type="text" placeholder='Enter your email'/>
                </div>
            </div>
            <div className="support">
                <p>Support</p>
                <div className="support-lists">
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
                </div>
                
            </div>
            <div className='account'>
                <p>Account</p>
                <div className="account-lists">
                    <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
                </div>
                
            </div>
            <div className="quick-link">
                <p>Quick-link</p>
                <div className="quick-link-lists">
                     <p>Quick Link</p>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
                </div>
               
            </div>

        </div>
    )
}
export default Footer;