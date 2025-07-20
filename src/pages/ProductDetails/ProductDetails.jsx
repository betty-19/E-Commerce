import React, { useState, useEffect } from 'react';
import './ProductDetails.css'
import View1 from '../../assets/images/view1.png';
import View2 from '../../assets/images/view2.png';
import View3 from '../../assets/images/view3.png';
import View4 from '../../assets/images/view4.png';
import ViewLarge from '../../assets/images/largeView.png';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiRefund2Line, RiLoopLeftLine, RiRecycleLine } from 'react-icons/ri';
import { FiEye } from "react-icons/fi";
import Gamepad from '../../assets/images/gamepad.png'
import Keyboard from '../../assets/images/keyboard.png'
import Monitor from '../../assets/images/monitor.png'
import Cooler from '../../assets/images/cooler.png';






const ProductDetails = () =>{
    const [activeSize, setActiveSize] = useState("M");
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    
        useEffect(()=>{
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize",handleResize);
            return() =>window.removeEventListener("resize",handleResize);
        },[])
        const iconSize = windowWidth < 480 ?18 : 24;
    
    return(
<div className="productDetailsWrapper">
    <div className="path">
        <p className='account'>Account</p>
        <span>/</span>
        <p className='gaming'>Gaming</p>
        <span>/</span>
        <p>Havic HV G-92 Gamepad</p>
    </div>
<div className="productDetailsContainer">
    <div className="all-views">
           <div className="views">
        <div className="view flip"><img src={View1} alt="" /></div>
        <div className="view flip"><img src={View2} alt="" /></div>
        <div className="view"><img src={View3} alt="" /></div>
        <div className="view"><img src={View4} alt="" /></div>
    </div>
    <div className="large-view">
        <img src={ViewLarge} alt="" />
    </div>
    </div>
 
    <div className="product-detail">
<p>Havic HV G-92 Gamepad</p>
<div className="review">
    <div className="rate">
                                    <AiFillStar className='star'/>
                                     <AiFillStar className='star'/>
                                      <AiFillStar className='star'/>
                                       <AiFillStar className='star'/>
                                        <AiFillStar className='star'/>
                             <p>(150 Reviews)</p>   
             </div>
             <p className='stock'>In Stock</p>

                               
</div>
<p className='price'>$192.00</p>
<p className='description'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
    <hr />
    <div className="colors">
        <p>Colours:</p>
        <div className="color-picker">
            <div></div>
            <div></div>
        </div>

    </div>
    <div className="sizes">
        <p>Size:</p>
        <div className="size-container">
        <div className={`size ${activeSize=="Xs"? 'active-size' : ''}`} onClick={()=>setActiveSize('Xs')}>Xs</div>
        <div className={`size ${activeSize=="S"? 'active-size' : ''}`} onClick={()=>setActiveSize('S')}>S</div>
        <div className={`size ${activeSize=="M"? 'active-size' : ''}`} onClick={()=>setActiveSize('M')}>M</div>
        <div className={`size ${activeSize=="L"? 'active-size' : ''}`} onClick={()=>setActiveSize('L')}>L</div>
        <div className={`size ${activeSize=="XL"? 'active-size' : ''}`} onClick={()=>setActiveSize('XL')}>XL</div>
        </div>

    </div>

<div className="size-buy">
     <div className="quantity">
        <div className="plus"><AiOutlinePlus size={24} /></div>
        <div className="no-quantity">2</div>
        <div className="minus"><AiOutlineMinus size={24} /></div>
    </div>
    <button className="product-buy-now">Buy Now</button>
    <div className="favourite"><AiOutlineHeart size={32}/></div>
</div>
<div className="delivery-return">
    <div className="product-delivery-container">
          <div className="product-delivery">
<MdOutlineLocalShipping size={40}/>
    </div>
    <div className="product-delivery-content">
<p>Free Delivery</p>
<p>Enter your postal code for Delivery Availability</p>
    </div>
    </div>
        <div className="product-return-container">
          <div className="product-delivery">
<RiLoopLeftLine size={40}/>
    </div>
    <div className="product-return-content">
<p>Return Delivery</p>
<p>Free 30 Days Delivery Returns. <span>Details</span> </p>
    </div>
    </div>
  
</div>
   
    </div>
      
</div>
 <div className="section-title">
                    <div className='rectangle'></div>
                    <p>Related Item</p>
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
                            {/* <div className="today-product-percentage">
                            -25%
                        </div> */}
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
                   
                    
                </div>
</div>
    )
}
export default ProductDetails