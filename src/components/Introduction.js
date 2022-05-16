import React from "react";
import logo from "../images/logo192.png";

export default function Introduction()
{
    return (
        <div>
                {/*change image*/}
                <img src={logo} className="logo"/>
                <h1>name</h1>
                <h2>Profession</h2>

                <button>github link</button>
                <button>itch.io link</button>
        </div>
    )
}