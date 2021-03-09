import React, { useState } from "react";
import { Link } from "react-router-dom";

import DropDownMenu from "../drop-down-menu/DropDownMenu-";
import "./navbar-styles.scss";

function Navbar() {
    const [hamburger, setHamburger] = useState("hidden");
    const [cartMenu, setCartMenu] = useState("hidden");

   function handleMenuClick() {
        if (hamburger === "hidden") {
            setHamburger("show");
        } else {
            setHamburger("hidden")
        }
    }

    function handleCartClick() {
        if (cartMenu === "hidden") {
            setCartMenu("show")
        } else {
            setCartMenu("hidden")
        }
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
                    <Link to="/my-profile"><ion-icon  name="person-circle-outline"></ion-icon></Link>
                </div>
                <div>
                    <ion-icon name="cart-outline" onClick={handleCartClick}></ion-icon>
                     
                </div>
               
            </div>
            {
                hamburger === "hidden" ? null 
                : <DropDownMenu isHamburgerMenu>
                    <ul className="tier1-ul">
                        <li>Shop</li>
                            <ul className="tier2-ul">
                                <li>hi?</li>
                            </ul>
                        <li>Creators</li>
                        <li>States</li>
                    </ul>
                </DropDownMenu> 
            }

            {
                cartMenu === "hidden" ? null
                : <DropDownMenu isCartMenu>
                    <ul className="tier1-ul">
                        <li>Populate me with items.</li>
                            <ul className="tier2-ul">
                                <li>hi?</li>
                            </ul>
                        <li>PLEASE</li>
                    </ul>
                </DropDownMenu>
            }
               

        </div>
    )
}

export default Navbar;