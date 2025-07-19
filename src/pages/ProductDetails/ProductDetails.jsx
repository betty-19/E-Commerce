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




const ProductDetails = () =>{
    const [activeSize, setActiveSize] = useState("M");
    return(
<div className="productDetailsWrapper">
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
</div>
    )
}
export default ProductDetails