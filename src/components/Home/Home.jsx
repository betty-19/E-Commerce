import React from 'react'
import './Home.css'
import Voucher from '../../assets/images/voucher.jpg'
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

<FaApple size={24} />

const Home = ()=>{
return(
    <div className="home-container">
        <div className="home-content">
            <div className="home-section1">
                <ul className='home-lists'>
                <li className="home-list">Woman's Fashion</li>
                <li className="home-list">Men's Fashion</li>
                <li className="home-list">Electronics</li>
                <li className="home-list">Home & Lifestyle</li>
                <li className="home-list">Medicine</li>
                <li className="home-list">Sports & Outdoor</li>
                <li className="home-list">Baby's & Toys</li>
                <li className="home-list">Groceries & Pets</li>
                <li className="home-list">Health & Beauty</li>
            </ul>
            <div className="voucher">
                <div className="voucher-left">
                    <div className="voucher-row1">
                        <FaApple size={40}/>
                        <p>iPhone 14 Series</p>
                    </div>
                    <p className='off-voucher'>Up to 10% off Voucher</p>
                    <div className="voucher-shop-now">
                        <a href="">Shop Now</a>
                        <FaArrowRight size={24} />
                    </div>

                </div>
                <div className="voucher-right">
                    <img src={Voucher} alt="" />
                </div>
            </div>
            <div className="discs">
                <div className='disc'></div>
                <div className='disc'></div>
                <div className='disc'></div>
                <div className='disc'></div>
                <div className='disc'></div>
            </div>
            </div>
            

        </div>
    </div>
)
}
export default Home;