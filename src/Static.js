// SubPage.js
import React from "react";


function Static() {
    console.info("Static.js");
    return (
        <div className="static-parent">
        {/* <h1 className="text">This is the Subpage</h1>; */}
        <img
        src={`${process.env.PUBLIC_URL}/illustration1.png`}
        alt="illustration1"
       id="illustration1"
        draggable="false"
      />
      <img
        src={`${process.env.PUBLIC_URL}/illustration2.png`}
        alt="illustration2"
       id="illustration2"
        draggable="false"
      />
        <img
        src={`${process.env.PUBLIC_URL}/illustration3.png`}
        alt="illustration3"
        id="illustration3"
        draggable="false"
        />
        <img
        src={`${process.env.PUBLIC_URL}/illustration4.png`}
        alt="illustration4"
        id="illustration4"
        draggable="false"
        />
        </div>
    )
}

export default Static;
