
import React from "react";
import './Header.css'


const Header=()=>{
    return(
<div className="headerWrapper">
    <p >Exclusive</p>
    <div className="nav-items-div">
        <ul className="nav-items">
            <li className="nav-item">Home</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Sign Up</li>
        </ul>
        
    </div><div className="search">
            <input type="text" placeholder="What are you looking for?"/>
            <i></i>
        </div>
</div>
    )
}
export default Header