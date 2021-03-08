import React from "react";
import { Link } from "react-router-dom";

import "./navbar-styles.scss";

function Navbar() {
    return (
        <div className="navbar-main">
            <div className="navbar-left">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <div className="lost-artist-font">
                <p><Link className="no-decoration"  to="/" >Lost Artist</Link></p>
            </div>
            
            <div className="navbar-right">
                <div>
                   <p>profile</p> 
                </div>
                <div>
                     <p>cart</p>
                </div>
               
            </div>
            

        </div>
    )
}

export default Navbar;