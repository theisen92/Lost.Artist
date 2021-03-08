import React from "react";

import Carousel from "../../components/carousel/Carousel";
import ImageBox from "../../components/image-box/ImageBox"

import "./home-styles.scss";

function Home() {
    return (
        <div>
            <Carousel />
            <div className="icon-bar">
                <div className="icon-parent">
                    <ion-icon name="tv-outline"></ion-icon>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <ion-icon name="home-outline"></ion-icon>
                </div>
            </div>
            <div className="about-text">
                <p className="about-text-one">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis elit libero, sit amet congue neque efficitur tempus. Morbi sed volutpat orci, a laoreet sem. Suspendisse volutpat id ante vel congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Suspendisse fermentum nunc sed posuere vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pharetra eu velit vitae pretium. Nunc condimentum ac sem sit amet maximus. Nulla auctor, leo nec ultricies tincidunt, nulla arcu gravida diam, eget ornare velit tellus sit amet ipsum. Suspendisse non tempus elit. Praesent rutrum condimentum nisl, id gravida elit pharetra consequat. Cras dictum quam sed sem consectetur, quis mollis enim fringilla.
                </p>
            </div>
            <div className="photo-with-text">
                <ImageBox backgroundUrl={"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} />
                <div className="text-box-color-parent">
                    <p className="text-box-color"> In tristique iaculis suscipit. Etiam eu magna scelerisque, molestie est volutpat, viverra est. Etiam vestibulum sollicitudin tortor, a aliquet elit molestie lacinia. Mauris lobortis, orci mattis condimentum placerat, justo purus consequat arcu, vitae molestie erat ante ut mi. Nam efficitur semper purus, eget suscipit lacus finibus at.</p>
                </div>
            </div>
            <div className="about-text">
                <p className="about-text-one">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis elit libero, sit amet congue neque efficitur tempus. Morbi sed volutpat orci, a laoreet sem. Suspendisse volutpat id ante vel congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Suspendisse fermentum nunc sed posuere vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pharetra eu velit vitae pretium. Nunc condimentum ac sem sit amet maximus. Nulla auctor, leo nec ultricies tincidunt, nulla arcu gravida diam, eget ornare velit tellus sit amet ipsum. Suspendisse non tempus elit. Praesent rutrum condimentum nisl, id gravida elit pharetra consequat. Cras dictum quam sed sem consectetur, quis mollis enim fringilla.
                </p>
                
                <ImageBox backgroundUrl={"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} />
                
            </div>
        </div>
    )
}

export default Home;