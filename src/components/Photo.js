import React from "react";
import cycle from "../assets/cycle.png";
import {
    FavoriteBorder,
    Visibility,
    Favorite,
    BookmarkBorder,
} from "@mui/icons-material";

function Photo() {
    return (
        <>
            <div className="photo-outer">
                <div className="photo">
                    <div className="photo-container">
                        <img src={cycle} alt="missing" />
                    </div>
                    <div className="photo-icon-box">
                        <span>
                            <FavoriteBorder className="photo-icon" />
                        </span>
                        <span>
                            <BookmarkBorder />
                        </span>
                    </div>
                    <div className="photo-outerIcon">
                        <span className="heart">
                            <Favorite />
                        </span>
                        <text className="like">334</text>
                        <span className="photo-icon">
                            <Visibility />
                            <text className="visible">1.5k</text>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Photo;
