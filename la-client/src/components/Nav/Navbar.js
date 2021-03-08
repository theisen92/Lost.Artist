import React from "react";
import { Link } from "react-router-dom";

import "./navbar-styles.scss";

function Navbar() {

   function handleMenuClick() {
        console.log("menu click!")
    }

    return (
        <div className="navbar-main">
            <div className="navbar-left" onClick={handleMenuClick}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <div className="lost-artist-font">
                <p className="no-decoration"><Link className="no-decoration"  to="/" >Lost Artist</Link></p>
            </div>
            
            <div className="navbar-right">
                <div>
                    <ion-icon  name="person-circle-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="cart-outline"></ion-icon>
                     
                </div>
               
            </div>
            

        </div>
    )
}

export default Navbar;