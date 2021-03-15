import React from "react";

import "./custom-button-styles.scss";

const CustomButton = (text) => {
    return(
        <>
            <button type="button">
                {text}
            </button>
        </>
    )
}

export default CustomButton