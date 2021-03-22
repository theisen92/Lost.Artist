import React from "react";
import { useParams } from "react-router-dom";

import CreatorProfileBox from "../../components/creator-profile-box/creator-profile-box";
import ItemTiles from "../../components/item-tiles/item-tiles";

import "./creators-home-styles.scss";

const CreatorsHome = () => {
    const { id } = useParams();

    return(
        <div className="creators-home">
            <h3>Creator # {id}</h3>
            <div className="creator-info-box">
                
                <CreatorProfileBox id={id}></CreatorProfileBox>               
            </div>
            
            <div className="creator-item-filters">
                <select name="category">
                    <option value="jackets">All</option>
                    <option value="jackets">Jackets</option>
                    <option value="hats">Hats</option>
                    <option value="bottoms">Bottoms</option>
                    <option value="tops">Tops</option>
                </select>
            </div>
            <div className="creator-item-tiles">
                <ItemTiles></ItemTiles>
                <ItemTiles></ItemTiles>
                <ItemTiles></ItemTiles>
                <ItemTiles></ItemTiles>
            </div>
            
        </div>
    )
}

export default CreatorsHome;