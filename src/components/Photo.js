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
                    <div className="profile">
                        <img src={src} alt='not found'/>
                        <text>DSYK</text>
                    </div>
                    <div className="photo-outerIcon">
                        <span className="heart"><Favorite />
                        </span>
                        <span className="like">334</span>
                        <span className="photo-icon"><Visibility />
                        </span>
                        <span className="visible">1.5k</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Photo;
