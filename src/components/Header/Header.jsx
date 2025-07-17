
import React,{useState,useEffect} from "react";
import './Header.css'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBox } from 'react-icons/fa'; 
import { MdReceiptLong } from 'react-icons/md';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { LiLogoutBoxLLine } from 'react-icons/ri';
import { RiLogoutBoxLine } from 'react-icons/ri';
// import { FiLogOut } from 'react-icons/fi';       
import { FiShoppingBag } from 'react-icons/fi';




const Header=()=>{
   
    const [activeNav,setActiveNav] = useState('home');
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const [showDropdown,setShowDropdown] = useState(false);

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);
        return() =>window.removeEventListener("resize",handleResize);
    },[])
    const iconSize = windowWidth < 480 ?16 : windowWidth <768? 24 :32;
    const searchIconSize = windowWidth < 480 ?16 : windowWidth <768? 20 :24;

    return(
        <div className="header-container">
<div className="headerWrapper">
    <p >Exclusive</p>

        <ul className="nav-items">
        <li className={`nav-item ${activeNav === 'home' ? 'active' : ''}`} onClick={() => setActiveNav('home')}>Home</li>
        <li className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => setActiveNav('contact')}>Contact</li>
        <li className={`nav-item ${activeNav === 'about' ? 'active' : ''}`} onClick={() => setActiveNav('about')}>About</li>
        <li className={`nav-item ${activeNav === 'signup' ? 'active' : ''}`} onClick={() => setActiveNav('signup')}>Sign Up</li>
        </ul>

 <div className="header-right-side">
       <div className="search">
            <input type="text" placeholder="What are you looking for?"/>
            <FiSearch size={searchIconSize} className="search-icon"/>
           
        </div>
         
       <div className="header-icons">
  <AiOutlineHeart size={iconSize} className="heart-icon" />
  
  <div className="cart">
    <FiShoppingCart size={iconSize} className="cart-icon" />
    <div className="cart-no">2</div>
  </div>

  <div className="user-dropdown-container">
    <AiOutlineUser
      size={iconSize}
      className="user-icon"
      onClick={() => setShowDropdown(!showDropdown)}
    />
    {showDropdown && (
      <div className="account-dropdown">
        <div className="dropdown-list">
          <AiOutlineUser size={iconSize}/>
          <p>Manage My Account</p>
        </div>
        <div className="dropdown-list">
          <FiShoppingBag size={iconSize}/>
          <p>My Order</p>
        </div>
        <div className="dropdown-list">
          <AiOutlineCloseCircle size={iconSize}/>
          <p>My Cancellations</p>
        </div>
        <div className="dropdown-list">
          <AiOutlineStar size={iconSize}/>
          <p>My Reviews</p>
        </div>
        <div className="dropdown-list">
          <RiLogoutBoxLine size={iconSize}/>
          <p>Logout</p>
        </div>
      </div>
    )}
  </div>
</div>

 </div>

 
</div>
{/* {showDropdown &&  <div className="account-dropdown">
    <div className="dropdown-list">
        <AiOutlineUser/>
        <p>Manage My Account</p>
    </div>
    <div className="dropdown-list">
        <FiShoppingBag/>
        <p>My Order</p>
    </div>
    <div className="dropdown-list">
        <AiOutlineCloseCircle/>
        <p>My Cancellations</p>
    </div>
    <div className="dropdown-list">
        <AiOutlineStar/>
        <p>My Reviews</p>
    </div>
    <div className="dropdown-list">
        <RiLogoutBoxLine/>
        <p>Logout</p>
    </div>
 </div>} */}


</div>


    )
}
export default Header