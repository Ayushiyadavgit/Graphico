import React from "react";
import Photo from "../Photo";

function Picture() {
    return (
        <>
            <div className="container-fluid">
                <div className="column-container">
                    <Photo />
                </div>
                <div className="column-container">
                    <Photo />
                </div>
                <div className="column-container">
                    <Photo />
                </div>
            </div>
        </>
    );
}

export default Picture;
