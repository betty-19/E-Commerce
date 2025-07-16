
import React from "react";
import './Header.css'


const Header=()=>{
    return(
<div className="headerWrapper">
    <p >Exclusive</p>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
        </ul>
        <div className="search">
            <input type="text" placeholder="What are you looking for?"/>
            <i></i>
        </div>
    </div>
</div>
    )
}
export default Header