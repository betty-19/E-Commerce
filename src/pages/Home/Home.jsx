import React,{useState,useEffect} from 'react'
import './Home.css'
import Voucher from '../../assets/images/voucher.jpg'
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
import { MdPhoneIphone } from 'react-icons/md';
import { FiSmartphone, FiCamera, FiHeadphones } from 'react-icons/fi';
import { LuLaptop } from 'react-icons/lu';
import {RiGamepadLine } from 'react-icons/ri';

import { LuWatch } from 'react-icons/lu';
import { MdOutlineWatch } from 'react-icons/md';
import NorthCoat from '../../assets/images/northCoat.png';
import DuffleBag from '../../assets/images/duffleBag.png';
import Cooler from '../../assets/images/cooler.png';
import BookSelf from '../../assets/images/bookself.png';
import BoomBox from '../../assets/images/boomBox.png';



import DogFood from '../../assets/images/dogFood.jpg';
import Camera from '../../assets/images/camera.png';
import Laptop from '../../assets/images/laptop.png';
import Curology from '../../assets/images/curology.png';
import ElectricCar from '../../assets/images/electricCar.png';
import SoccerCleats from '../../assets/images/soccerCleats.png';
import UsbGamePad from '../../assets/images/usbGamepad.png';
import Jacket from '../../assets/images/jacket.png';


import PlayStation from '../../assets/images/playStation.png';
import Collections from '../../assets/images/collections.jpg';
import Speaker from '../../assets/images/speakers.png';
import Perfume from '../../assets/images/perfume.png';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiShield } from 'react-icons/fi';
import { RiShieldCheckLine } from 'react-icons/ri';









<FaApple size={24} />

const Home = ()=>{

const [activeDesc, setActiveDesc] = useState("disk3");
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);
        return() =>window.removeEventListener("resize",handleResize);
    },[])
    const iconSize = windowWidth < 480 ?18 : 24;

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
                <div className="section-title">
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
                    <div className="section-arrows">
                        <div className="section-left-arrow">
                            <FaArrowLeft size={iconSize} className='section-arrow'/>
                        </div>
                        <div className="section-right-arrow" >
                            <FaArrowRight size={iconSize} className='section-arrow'/>
                        </div>
                    </div>
                </div>
                <div className="today-products">
                    <div className="today-product-container">
                        <div className="today-product">
                        {/* <div className="today-product-head"></div> */}
                            <div className="today-product-percentage">
                            -40%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
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
                        {/* <div className="today-product-head"> </div> */}
                            <div className="today-product-percentage">
                            -35%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
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
                        {/* <div className="today-product-head"></div> */}
                            <div className="today-product-percentage">
                            -30%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
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
                        {/* <div className="today-product-head"></div> */}
                            <div className="today-product-percentage">
                            -25%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
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
                        {/* <div className="today-product-head"> </div> */}
                            <div className="today-product-percentage">
                            -40%
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
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


           <div className="section2-view-all"><button>View All Products</button></div> </div>
           <div className="home-section3">
            <div className="section-title">
                    <div className='rectangle'></div>
                    <p>Categories</p>
                </div>
                <div className="section-head">
                       <p>Browse By Category</p>
                    <div className="section-arrows">
                        <div className="section-left-arrow">
                            <FaArrowLeft size={iconSize} className='section-arrow'/>
                        </div>
                        <div className="section-right-arrow" >
                            <FaArrowRight size={iconSize} className='section-arrow'/>
                        </div>
                    </div>
                </div>
                <div className="categories-container">
                    <div className="category">
                       <FiSmartphone size={30} />
                        <p>Phones</p>
                    </div>
                     <div className="category">
                        <LuLaptop size={30} />
                        <p>Computers</p>
                    </div>
                     <div className="category">
                        <MdOutlineWatch size={30} />
                        <p>SmartWatch</p>
                    </div>
                     <div className="category">
                        <FiCamera size={30} />
                        <p>Camera</p>
                    </div>
                     <div className="category">
                        <FiHeadphones size={30} />
                        <p>HeadPhones</p>
                    </div>
                     <div className="category">
                        <RiGamepadLine size={30} />
                        <p>Gaming</p>
                    </div>
                </div>

           </div>
           <div className="home-section4">
              <div className="section-title">
                    <div className='rectangle'></div>
                    <p>This Month</p>
                </div>
                <div className="section-head">
                       <p>Best Selling Products</p>
                    {/* <div > */}
                        <button className="section-view-all">View All</button>
                    {/* </div> */}
                </div>
                 <div className="today-products">
                    <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={NorthCoat} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>HAVIT HV-G92 Gamepad</p>
                        <div className="discount">
                            <p>$260</p>
                            <p>$360</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(65)</p>

                        </div>
                    </div>
                    </div>
                      <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={DuffleBag} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Gucci duffle bag</p>
                        <div className="discount">
                            <p>$960</p>
                            <p className='strike'>$1160</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(65)</p>

                        </div>
                    </div>
                    </div>
                      <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={Cooler} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>RGB liquid CPU Cooler</p>
                        <div className="discount">
                            <p>$160</p>
                            <p className='strike'>$170</p>
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(65)</p>

                        </div>
                    </div>
                    </div>  
                    <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={BookSelf} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Small BookSelf</p>
                        <div className="discount">
                            <p>$360</p>
                            {/* <p>$160</p> */}
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(65)</p>

                        </div>
                    </div>
                    </div>
                    </div>
                    
           </div>
           <div className="home-section5">
            <div className="voucher-container">
               <div className="voucher">
                <div className="voucher-left">
                    <div className=" music-row1">
                        {/* <FaApple size={40}/> */}
                        <p>Categories</p>
                    </div>
                    <p className='off-voucher'>Enhance Your Music Experience</p>
                    <div className="music-experience-shop-now">
                        {/* <a href="">Shop Now</a>
                        <FaArrowRight size={24} /> */}
                        <div className="time">
                            <p>23</p>
                            <p>Hours</p>
                        </div>
                        <div className="time">
                            <p>05</p>
                            <p>Days</p>
                        </div>
                        <div className="time">
                            <p>59</p>
                            <p>Minutes</p>
                        </div>
                        <div className="time">
                            <p>35</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <button className='buy-now'>Buy Now</button>

                </div>
                <div className="voucher-right">
                    <img src={BoomBox} alt="" />
                </div>
            
            </div> 
            {/* <div className="discs">
                <div className={`disc ${activeDesc=="disk1"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk1')}></div>
                <div className={`disc ${activeDesc=="disk2"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk2')}></div>
                <div className={`disc ${activeDesc=="disk3"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk3')}></div>
                <div className={`disc ${activeDesc=="disk4"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk4')}></div>
                <div className={`disc ${activeDesc=="disk5"? 'active-desc' : ''}`} onClick={()=>setActiveDesc('disk5')}></div>
            </div>   */}
            </div>
           </div>
             <div className="home-section6">
              <div className="section-title">
                    <div className='rectangle'></div>
                    <p>Our Products</p>
                </div>
                <div className="section-head">
                       <p>Explore Our Products</p>
                  <div className="section-arrows">
                        <div className="section-left-arrow">
                            <FaArrowLeft size={iconSize} className='section-arrow'/>
                        </div>
                        <div className="section-right-arrow" >
                            <FaArrowRight size={iconSize} className='section-arrow'/>
                        </div>
                    </div>
                </div>
                 <div className="explore-products">
                    <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={DogFood} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Breed Dry Dog Food</p>
                            <div className="discount">
                            <p>$100</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(35)</span>

                        </div>
                    </div>
                    </div>
                        <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={Camera} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>CANON EOS DSLR Camera</p>
                        <div className="discount">
                            <p>$360</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(95)</span>

                        </div>
                    </div>
                    </div>
                        <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={Laptop} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>ASUS FHD Gaming Laptop</p>
                          <div className="discount">
                            <p>$700</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(325)</span>

                        </div>
                    </div>
                    </div>
                        <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={Curology} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Curology Product Set </p>
                           <div className="discount">
                            <p>$500</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(145)</span>

                        </div>
                    </div>
                    </div>
                        <div className="today-product-container">
                        <div className="today-product">
                       <div className="section-new">
                            New
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={ElectricCar} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Kids Electric Car</p>
                        <div className="discount">
                            <p>$960</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(65)</span>

                        </div>
                    </div>
                    </div> 
                      <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={SoccerCleats} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Jr. Zoom Soccer Cleats</p>
                       <div className="discount">
                            <p>$1160</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(35)</span>

                        </div>
                    </div>
                    </div>
                      <div className="today-product-container">
                        <div className="today-product">
                       <div className="section-new">
                            New
                        </div>
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={UsbGamePad} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>GP11 Shooter USB Gamepad</p>
                        <div className="discount">
                            <p>$660</p>
                            {/* <p className='strike'>$170</p> */}
                         <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div></div>
                       
                            <span>(55)</span>

                        </div>
                    </div>
                    </div>  
                    <div className="today-product-container">
                        <div className="today-product">
                      
                        <div className="heart-eye">
                            <div className="product-heart">
                                 <AiOutlineHeart size={iconSize}/>

                            </div>
                            <div className="product-eye">
                                   <FiEye size={iconSize}/>
                            </div>
                        </div>
                       
                        <div className="product-img">
                            <img src={Jacket} alt="" />
                        </div>
                        

                    </div>
                    <div className="today-product-info">
                        <p>Quilted Satin Jacket</p>
                        <div className="discount">
                            <p>$660</p>
                            {/* <p>$160</p> */}
                        </div>
                        <div className="rates">
                            <div className="rate">
                                <AiFillStar className='star'/>
                                 <AiFillStar className='star'/>
                                  <AiFillStar className='star'/>
                                   <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>
                            </div>
                            <p>(55)</p>

                        </div>
                    </div>
                    </div>
                    </div><div className="section2-view-all"><button>View All Products</button></div>
                    
           </div>
           <div className="home-section7">
            <div className="section-title">
                    <div className='rectangle'></div>
                    <p>Featured</p>
                </div>
                <div className="section-head">
                       <p>New Arrival</p>
                       
                </div>
                <div className="new-arrival">
                        <div className="play-station5">
                            <img src={PlayStation} alt="" />
                            <div className="new-arrival-info">
                                <p>PlayStation 5</p>
                                <p>Black and White version of the PS5 coming out on sale.</p>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                        <div className="womens-collections">
                            <img src={Collections} alt="" />
                            <div className="new-arrival-info">
                                <p>Women’s Collections</p>
                                <p>Featured woman collections that give you another vibe.</p>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                         <div className="speakers">
                            <img src={Speaker} alt="" />
                            <div className="new-arrival-info">
                                <p>Speakers</p>
                                <p>Amazon wireless speakers</p>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                         <div className="perfume">
                            <img src={Perfume} alt="" />
                            <div className="new-arrival-info">
                                <p>Perfume</p>
                                <p>GUCCI INTENSE OUD EDP</p>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                       </div>
              
           </div>
           <div className="home-section8">
            <div className="delivery">
                <div className="delivery-icon">
                    <MdOutlineLocalShipping size={30} className='delivery-icon1'/>


                </div>
                <p>FREE AND FAST DELIVERY</p>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="delivery">
                <div className="delivery-icon">
                    <FiHeadphones size={30} className='delivery-icon1'/>


                </div>
                <p>24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="delivery">
                <div className="delivery-icon">
<RiShieldCheckLine size={30} className='delivery-icon1'/>
                </div>
                <p>MONEY BACK GUARANTEE</p>
                <p>We reurn money within 30 days</p>
            </div>
           </div>

        </div>
    </div>
)
}
export default Home;