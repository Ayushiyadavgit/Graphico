import React from "react";
import apple from "../../assets/About.jpg";

function About() {
    return (
        <>
            <div className="about-outer">
            <div className="about-us">
            <span>About Graphico</span>
            <div className="about-para">
            <p>
            welcome to our website graphico a place where you can explore free content ,project graphico was intialated with a purpose and that is to give free content for their project graphico is a place where you can access all the graphic without the hesitation of get copyright strike or royality strike graphico was not just made to download graphics but also to upload your own graphics if are good in digital art and you want to share your art with the world then you are at the right place just login and share your art here and let the world use your graphics graphico was made by me 'Ayushi Yadav' a student of B.Tech engineering from CS trade who lives in Raebareli uttar pradesh and i am a passionate person about coding and i love to explore thoughts about programming infact i love programming Thank you for being here..
            </p>
            </div>
            <div className="about-image">
                <img src={apple} alt="no image" />
            </div>
            </div>
            </div>
        </>
    );
}

export default About;
