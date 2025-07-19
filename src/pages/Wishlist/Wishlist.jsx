import React,{useState,useEffect} from 'react';
import './Wishlist.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiEye } from "react-icons/fi";
import Laptop from '../../assets/images/laptop.png';
import UsbGamePad from '../../assets/images/usbGamepad.png';
import Jacket from '../../assets/images/jacket.png';
import Gamepad from '../../assets/images/gamepad.png'
import Keyboard from '../../assets/images/keyboard.png'
import Monitor from '../../assets/images/monitor.png'
import BookSelf from '../../assets/images/bookself.png';
import Cooler from '../../assets/images/cooler.png';
import { FiTrash } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import { HiOutlineTrash } from 'react-icons/hi';



const Wishlist = ()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    
        useEffect(()=>{
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize",handleResize);
            return() =>window.removeEventListener("resize",handleResize);
        },[])
        const iconSize = windowWidth < 480 ?18 : 24;
return(
    <div className='wishlist-wrapper'>
<div className="wishlist-section1">
       <div className="wishlist-section-head">
                       <p>Wishlist (4)</p>
                   
                        <button className="section-all">Move All To Bag</button>
                
                </div>
                  <div className="today-products">
                                    <div className="today-product-container">
                                        <div className="today-product">
                                        {/* <div className="today-product-head"></div> */}
                                            <div className="today-product-percentage">
                                            -35%
                                        </div>
                                        <div className="heart-eye">
                                            <div className="product-heart">
                                                 <HiOutlineTrash size={iconSize} />
                
                                            </div>
                                            {/* <div className="product-eye">
                                                   <FiEye size={iconSize}/>
                                            </div> */}
                                        </div>
                                        
                                        <div className="product-img">
                                            <img src={BookSelf} alt="" />
                                        </div>
                                        
                
                                    </div>
                                    <div className="today-product-info">
                                        <p>Gucci duffle bag</p>
                                        <div className="discount">
                                            <p>$960</p>
                                            <p>$1160</p>
                                        </div>
                                        {/* <div className="rates">
                                            <div className="rate">
                                                <AiFillStar className='star'/>
                                                 <AiFillStar className='star'/>
                                                  <AiFillStar className='star'/>
                                                   <AiFillStar className='star'/>
                                                    <AiFillStar className='star'/>
                                            </div>
                                            <p>(88)</p>
                
                                        </div> */}
                                    </div>
                                    </div>
                                     <div className="today-product-container">
                                        <div className="today-product">
                                        {/* <div className="today-product-head"> </div> */}
                                            {/* <div className="today-product-percentage">
                                            -35%
                                        </div> */}
                                        <div className="heart-eye">
                                            <div className="product-heart">
                                                <HiOutlineTrash size={iconSize} />
                
                                            </div>
                                            {/* <div className="product-eye">
                                                   <FiEye size={iconSize}/>
                                            </div> */}
                                        </div>
                                       
                                        <div className="product-img">
                                            <img src={Cooler} alt="" />
                                        </div>
                                        
                
                                    </div>
                                    <div className="today-product-info">
                                        <p>RGB liquid CPU Cooler</p>
                                        <div className="discount">
                                            <p>$1960</p>
                                            {/* <p>$1160</p> */}
                                        </div>
                                        {/* <div className="rates">
                                            <div className="rate">
                                                <AiFillStar className='star'/>
                                                 <AiFillStar className='star'/>
                                                  <AiFillStar className='star'/>
                                                   <AiFillStar className='star'/>
                                                    <AiFillStar className='star'/>
                                            </div>
                                            <p>(75)</p>
                
                                        </div> */}
                                    </div>
                                    </div>
                                     <div className="today-product-container">
                                        <div className="today-product">
                                        {/* <div className="today-product-head"></div> */}
                                            {/* <div className="today-product-percentage">
                                            -30%
                                        </div> */}
                                        <div className="heart-eye">
                                            <div className="product-heart">
                                               <HiOutlineTrash size={iconSize} />
                
                                            </div>
                                            {/* <div className="product-eye">
                                                   <FiEye size={iconSize}/>
                                            </div> */}
                                        </div>
                                        
                                        <div className="product-img">
                                            <img src={UsbGamePad} alt="" />
                                        </div>
                                        
                
                                    </div>
                                    <div className="today-product-info">
                                        <p>GP11 Shooter USB Gamepad</p>
                                        <div className="discount">
                                            <p>$550</p>
                                            {/* <p>$400</p> */}
                                        </div>
                                        {/* <div className="rates">
                                            <div className="rate">
                                                <AiFillStar className='star'/>
                                                 <AiFillStar className='star'/>
                                                  <AiFillStar className='star'/>
                                                   <AiFillStar className='star'/>
                                                    <AiFillStar className='star'/>
                                            </div>
                                            <p>(99)</p>
                
                                        </div> */}
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
                                               <HiOutlineTrash size={iconSize} />
                
                                            </div>
                                            {/* <div className="product-eye">
                                                   <FiEye size={iconSize}/>
                                            </div> */}
                                        </div>
                                        
                                        <div className="product-img">
                                            <img src={Jacket} alt="" />
                                        </div>
                                        
                
                                    </div>
                                    <div className="today-product-info">
                                        <p>Quilted Satin Jacket </p>
                                        <div className="discount">
                                            <p>$750</p>
                                            {/* <p>$400</p> */}
                                        </div>
                                        {/* <div className="rates">
                                            <div className="rate">
                                                <AiFillStar className='star'/>
                                                 <AiFillStar className='star'/>
                                                  <AiFillStar className='star'/>
                                                   <AiFillStar className='star'/>
                                                    <AiFillStar className='star'/>
                                            </div>
                                            <p>(99)</p>
                
                                        </div> */}
                                    </div>
                                    </div>
                                   
                                    
                                </div>
</div>
<div className="wishlist-section2">
     <div className="wishlist-section-head">
                      <div className="section-title">
                    <div className='rectangle'></div>
                    <p>Just For you</p>
                </div>
                   
                        <button className="section-all">See All</button>
                
                </div>
    <div className="today-products">
                        <div className="today-product-container">
                            <div className="today-product">
                            {/* <div className="today-product-head"></div> */}
                                <div className="today-product-percentage">
                                -35%
                            </div>
                            <div className="heart-eye">
                                {/* <div className="product-heart">
                                     <AiOutlineHeart size={iconSize}/>
    
                                </div> */}
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
                                <p>(88)</p>
    
                            </div>
                        </div>
                        </div>
                         <div className="today-product-container">
                            <div className="today-product">
                            {/* <div className="today-product-head"> </div> */}
                                {/* <div className="today-product-percentage">
                                -35%
                            </div> */}
                            <div className="heart-eye">
                                {/* <div className="product-heart">
                                     <AiOutlineHeart size={iconSize}/>
    
                                </div> */}
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
                                {/* <p>$960</p> */}
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
                                <p>(65)</p>
    
                            </div>
                        </div>
                        </div>
                         <div className="today-product-container">
                            <div className="today-product">
                            {/* <div className="today-product-head"></div> */}
                               <div className="section-new">
                            New
                        </div>
                            <div className="heart-eye">
                                {/* <div className="product-heart">
                                     <AiOutlineHeart size={iconSize}/>
    
                                </div> */}
                                <div className="product-eye">
                                       <FiEye size={iconSize}/>
                                </div>
                            </div>
                            
                            <div className="product-img">
                                <img src={Gamepad} alt="" />
                            </div>
                            
    
                        </div>
                        <div className="today-product-info">
                            <p>HAVIT HV-G92 Gamepad </p>
                            <div className="discount">
                                <p>$560</p>
                                {/* <p>$400</p> */}
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
                            {/* <div className="today-product-head"></div> */}
                                {/* <div className="today-product-percentage">
                                -30%
                            </div> */}
                            <div className="heart-eye">
                                {/* <div className="product-heart">
                                     <AiOutlineHeart size={iconSize}/>
    
                                </div> */}
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
                                <p>$200</p>
                                {/* <p>$400</p> */}
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
    </div>
)
}

export default Wishlist