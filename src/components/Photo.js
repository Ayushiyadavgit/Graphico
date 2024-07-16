import React from "react";
import {
    FavoriteBorder,
    Visibility,
    Favorite,
    BookmarkBorder,
} from "@mui/icons-material";

function Photo({ src, title }) {
    return (
        <>
            <div className="photo-outer">
                <div className="photo">
                    <div className="photo-container">
                        <img src={src} alt="missing" />
                    </div>
                    <div className="photo-icon-box">
                        <span>
                            <FavoriteBorder />
                        </span>
                        <span>
                            <BookmarkBorder />
                        </span>
                        <span>{title}</span>
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
