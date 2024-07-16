import React from "react";
import Photo from "../Photo";
import test_image from "../../assets/test_image.jpg";
import lamp from "../../assets/lamp.png";
import test_image2 from "../../assets/test_image2.png";

function Picture() {
    return (
        <>
            <div className="container-fluid">
                <div className="column-container">
                    <Photo src={test_image} title={"Test Image"} />
                    <Photo src={test_image2} title={"Test Image 2"} />
                    <Photo src={lamp} title={"Lamp"} />
                </div>
                <div className="column-container">
                    <Photo src={lamp} title={"Lamp"} />
                    <Photo src={test_image} title={"Test Image"} />
                    <Photo src={test_image2} title={"Test Image 2"} />
                </div>
                <div className="column-container">
                    <Photo src={test_image2} title={"Test Image 2"} />
                    <Photo src={lamp} title={"Lamp"} />
                    <Photo src={test_image} title={"Test Image"} />
                </div>
            </div>
        </>
    );
}

export default Picture;
