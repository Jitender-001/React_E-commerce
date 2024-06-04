import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="header">

                <div className="top-header">
                    <div className="icon">
                        <MdLocalShipping/>
                    </div>
                    <div className="info">
                        <p>Free shipping when shopping upto $1000</p>
                    </div>
                </div>

                <div className="mid-header">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                    <div className="search-box">
                        <input type="text" value="" placeholder="Search..." />
                        <button><IoSearch /></button>
                    </div>
                    <div className="user">
                        <div className="icon">
                        <FiLogIn />
                        </div>
                        <div className="btn">
                            <button>Login</button>
                        </div>
                    </div>
                </div>

                <div className="bottom-header">
                    <div className="nav">
                        <ul>
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/shop" className="link">Shop</Link></li>
                            <li><Link to="/collection" className="link">Collection</Link></li>
                            <li><Link to="/about" className="link">About</Link></li>
                            <li><Link to="/contact" className="link">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="offer">
                        <p><marquee behavior="alternate" direction="rtl" scrolldelay="1s">Flat <strong>20%</strong> off on All Items</marquee></p>
                    </div>
                </div>
                


                
            </div>
        </>
    )
}

export default Navbar;