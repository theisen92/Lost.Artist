import React from "react";

import "./image-box.scss";

function ImageBox({backgroundUrl}) {
    return (
        <div className="image-box" >
            <img className="image" src={backgroundUrl} alt="person"/>
        </div>
    )
}

export default ImageBox;