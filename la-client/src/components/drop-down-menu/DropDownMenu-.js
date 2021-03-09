import React from "react";

import "./drop-down-menu-styles.scss";

function DropDownMenu({ children, isCartMenu, isHamburgerMenu }) {
    return (
        <div className={` ${isCartMenu ? "isCartMenu" : ""} ${isHamburgerMenu ? "isHamburgerMenu" : ""} dropdown-menu`}>
            {children}
        </div>
    )
}

export default DropDownMenu;