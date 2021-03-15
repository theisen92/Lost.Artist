import React from "react";

import "./text-box-styles.scss";

const TextBox = (type, name, value, placeholder) => {
    return (
        <>
            <input className="custom-input" type={type} name={name} value={value} placeholder={placeholder}/>
        </>
    )
}

export default TextBox;