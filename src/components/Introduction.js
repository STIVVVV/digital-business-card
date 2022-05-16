import React from "react";
import "../index.css"
import gitLogo from "../images/GitHub Icon.png";
import itchLogo from "../images/itch.io.png";
import videoMp4 from "../images/video.mp4"
import videoWebm from "../images/video.webm"

export default function Introduction()
{
    return (
        <div>
                <video  muted loop controls className="video">
                    <source src={videoMp4} type="video/mp4"/>
                    <source src={videoWebm} type="video/webm"/>
                    Your browser does the video.
                </video>

                {/* <img src={logo} className="logo" alt="react logo"/> */}

                <h1>STIVVVV</h1>
                <h2>Front end and unity developer</h2>

                <a href="https://github.com/STIVVVV">
                    <img className="image" src={gitLogo}  alt="github logo"/>  
                </a> 

                <a href="https://stivvvv.itch.io/">
                    <img className="image" src={itchLogo}  alt="itch.io logo"/> 
                </a> 
        </div>
    )
}