import React from "react";
import "./creator-profile-box-styles.scss";


const CreatorProfileBox = ({name, location, about, image}) => (
    <div className="creator-box-parent">
        <div className="img-box">
            <img className="creator-img" src={image || null} alt={"placeholder"}></img>
        </div>
        <div className="creator-info-box">
            <h2>{name || "Creator Name"}</h2>
            <h5 className="creator-location">{location || "Location"}</h5>
            
            
            <p className="creator-about-me">
                {about || "Etiam tempor accumsan enim, eget sollicitudin dui. Suspendisse potenti. Proin molestie, erat id consectetur tincidunt, nisi nisi ultrices purus, eget dictum mauris est et metus"}
            </p>
        </div>
        
    </div>
)

export default CreatorProfileBox;