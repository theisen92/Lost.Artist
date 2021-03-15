import React from "react";
import { useParams } from "react-router-dom";

import "./creators-home-styles.scss";

const CreatorsHome = () => {
    const { id } = useParams();

    return(
        <div className="creators-home-box">
            <h2>Creators Home Page: {id}</h2>
        </div>
    )
}

export default CreatorsHome;