import React from "react";

import "./item-tiles-styles.scss";


const ItemTiles = ({imageUrl, name, price}) => (
    <div className="tile-parent">
        <div className="item-image" style={{backgroundImage: `url(${imageUrl || "https://via.placeholder.com/300.png/" })`}} />
        <div className="item-footer">
            <span className="item-name">{name || "Item Name"}</span>
            <span className="item-price">{price|| "$0.00"}</span>
        </div>
    </div>
)

export default ItemTiles;