import React from "react";
import carl from "../images/logo192.png";

export default function Introduction()
{
    return (
        <div>
                {/*change image*/}
                <img src={carl}/>
                <h1>Name</h1>
                <h2>Profession</h2>

                <button>github link</button>
                <button>itch.io link</button>
        </div>
    )
}