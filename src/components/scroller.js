import React, { useRef } from "react";
import {
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
} from "@mui/icons-material";

import img5 from "../assets/img5.webp";
import apple from "../assets/apple.png";
import img6 from "../assets/img6.jpg";
import dark from "../assets/dark.png";
import fort from "../assets/fort.png";
import lamp from "../assets/lamp.png";
import man from "../assets/man.png";
import img2 from "../assets/img2.jpg";
import man1 from "../assets/man1.png";
import img3 from "../assets/img3.avif";
import batman from "../assets/batman.png";

function Scroller() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="main-scroll-div">
                <div>
                    <button className="icon" onClick={scrollLeft}>
                        <KeyboardDoubleArrowLeft />
                    </button>
                </div>
                <div className="cover" ref={scrollRef}>
                    <div className="scroll-image">
                        <div className="child">
                            <img className="child-img" src={img5} alt="image" />
                        </div>
                        <div className="child">
                            <img
                                className="child-img"
                                src={apple}
                                alt="image"
                            />
                        </div>
                        <div className="child">
                            <img className="child-img" src={img6} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={dark} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={fort} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={lamp} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={img5} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={man} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={img2} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={man1} alt="image" />
                        </div>
                        <div className="child">
                            <img className="child-img" src={img3} alt="image" />
                        </div>
                        <div className="child">
                            <img
                                className="child-img"
                                src={batman}
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="icon" onClick={scrollRight}>
                        <KeyboardDoubleArrowRight />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Scroller;
