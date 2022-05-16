import React from "react";
import "../index.css"
import logo from "../images/logo192.png";
import gitLogo from "../images/GitHub Icon.png";
import itchLogo from "../images/itch.io.png";

export default function Introduction()
{
    return (
        <div>
                {/*change image*/}
                <img src={logo} className="logo" alt="react logo"/>
                <h1>name</h1>
                <h2>Profession</h2>

                <a href="https://github.com/STIVVVV">
                    <img className="image" src={gitLogo}  alt="github logo"/>  
                </a> 

                <a href="https://stivvvv.itch.io/">
                    <img className="image" src={itchLogo}  alt="itch.io logo"/> 
                </a> 
        </div>
    )
}