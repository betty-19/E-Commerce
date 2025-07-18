import React,{useState} from 'react'
import './Home.css'
import Voucher from '../../assets/images/voucher.jpg'
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiEye } from "react-icons/fi";
import Gamepad from '../../assets/images/gamepad.png'
import Keyboard from '../../assets/images/keyboard.png'
import Monitor from '../../assets/images/monitor.png'
import ComfortChair from '../../assets/images/comfortChair.png'



<FaApple size={24} />

const Home = ()=>{

const [activeDesc, setActiveDesc] = useState("disk3");

return(
    <div className="home-container">
        <div className="home-content">
            <div className="home-section1">
                <ul className='home-lists'>
    <li className="home-list fashion">
        <span>Woman's Fashion</span>
        <AiOutlineRight />
    </li>
    <li className="home-list fashion">
        <span>Men's Fashion</span>
        <AiOutlineRight />
    </li>
    <li className="home-list">Electronics</li>
    <li className="home-list">Home & Lifestyle</li>
    <li className="home-list">Medicine</li>
    <li className="home-list">Sports & Outdoor</li>
    <li className="home-list">Baby's & Toys</li>
    <li className="home-list">Groceries & Pets</li>
    <li className="home-list">Health & Beauty</li>
</ul>

            {/* <hr/> */}
            <div className="voucher-container">
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
                <div className={`disc ${activeDesc=="disk1"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk1')}></div>
                <div className={`disc ${activeDesc=="disk2"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk2')}></div>
                <div className={`disc ${activeDesc=="disk3"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk3')}></div>
                <div className={`disc ${activeDesc=="disk4"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk4')}></div>
                <div className={`disc ${activeDesc=="disk5"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk5')}></div>
            </div>  
            </div>
          
            
            </div>
            <div className="home-section2">
                <div className="today">
                    <div className='rectangle'></div>
                    <p>Today's</p>
                </div>
                <div className="flash-sales">
                     
                    <div className="date">
                       <p>Flash Sales</p>
                       <div className="date-cols">
                           <div className="date-col">
                            <p>Days</p>
                            <p>03</p>
                        </div>
                        <div className="colon">
                            <span></span>
                            <span></span>
                        </div>
                         <div className="date-col">
                            <p>Hours</p>
                            <p>23</p>
                        </div>
                         <div className="colon">
                            <span></span>
                            <span></span>
                        </div>
                         <div className="date-col">
                            <p>Minutes</p>
                            <p>19</p>
                        </div>
                         <div className="colon">
                            <span></span>
                            <span></span>
                        </div>
                         <div className="date-col">
                            <p>Seconds</p>
                            <p>56</p>
                        </div>
                       </div>
                     
                    </div>
                    <div className="today-arrows">
                        <div className="today-left-arrow">
                            <FaArrowLeft size={24} className='today-arrow'/>
                        </div>
                        <div className="today-right-arrow" >
                            <FaArrowRight size={24} className='today-arrow'/>
                        </div>
                    </div>
                </div>
                <div className="today-products">
                    <div className="today-product-container">
                        <div className="today-product">
                        <div className="today-product-head">
                            <div className="today-product-percentage">
                            -40%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={24}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={24}/>
                            </div>
                        </div>
                        </div>
                        <div className="product-img">
                            <img src={Gamepad} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>HAVIT HV-G92 Gamepad</p>
                        <div className="discount">
                            <p>$120</p>
                            <p>$160</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(88)</p>

                        </div>
                    </div>
                    </div>
                     <div className="today-product-container">
                        <div className="today-product">
                        <div className="today-product-head">
                            <div className="today-product-percentage">
                            -35%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={24}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={24}/>
                            </div>
                        </div>
                        </div>
                        <div className="product-img">
                            <img src={Keyboard} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>AK-900 Wired Keyboard</p>
                        <div className="discount">
                            <p>$960</p>
                            <p>$1160</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(75)</p>

                        </div>
                    </div>
                    </div>
                     <div className="today-product-container">
                        <div className="today-product">
                        <div className="today-product-head">
                            <div className="today-product-percentage">
                            -30%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={24}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={24}/>
                            </div>
                        </div>
                        </div>
                        <div className="product-img">
                            <img src={Monitor} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>IPS LCD Gaming Monitor</p>
                        <div className="discount">
                            <p>$370</p>
                            <p>$400</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(99)</p>

                        </div>
                    </div>
                    </div>
                     <div className="today-product-container">
                        <div className="today-product">
                        <div className="today-product-head">
                            <div className="today-product-percentage">
                            -25%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={24}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={24}/>
                            </div>
                        </div>
                        </div>
                        <div className="product-img">
                            <img src={ComfortChair} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>S-Series Comfort Chair </p>
                        <div className="discount">
                            <p>$375</p>
                            <p>$400</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(99)</p>

                        </div>
                    </div>
                    </div>
                     <div className="today-product-container">
                        <div className="today-product">
                        <div className="today-product-head">
                            <div className="today-product-percentage">
                            -40%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={24}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={24}/>
                            </div>
                        </div>
                        </div>
                        <div className="product-img">
                            <img src={Gamepad} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>HAVIT HV-G92 Gamepad</p>
                        <div className="discount">
                            <p>$120</p>
                            <p>$160</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(88)</p>

                        </div>
                    </div>
                    </div>
                    
                </div>


            </div>
            

        </div>
    </div>
)
}
export default Home;