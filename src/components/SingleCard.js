import React from "react";
import {
    FavoriteBorder,
    BookmarkBorder,
} from "@mui/icons-material";
import img5 from "../assets/img5.webp";
import apple from "../assets/apple.png";

function SingleCard() {
    return <>
    <div className="header-outer">
        <div className="head-inner">
        <div className="head-title">
        <div className="">
        <span>Turterra</span>
        </div>
        </div>
        <div className="head-profile">
            <img src={img5} alt="not found"/>
            <span>DKSY</span>
            <div className="head-icon">
                <span>
                    <FavoriteBorder />
                </span>
                <span>
                    <BookmarkBorder />
                </span>
                <button className="head-button"><a href="#">Get in touch</a></button>
            </div>
        </div>
        </div>
        <div className="card-image">
            <img src={apple} alt=' not found'/>
        </div>
    </div>
    </>
}

export default SingleCard;
