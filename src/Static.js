// SubPage.js
import React from "react";


function Static() {
    console.info("Static.js");
    return (
        <div className="static-parent">
        {/* <h1 className="text">This is the Subpage</h1>; */}
        <img
        src={`${process.env.PUBLIC_URL}/illustration1.png`}
       id="illustration1"
        draggable="false"
      />
      <img
        src={`${process.env.PUBLIC_URL}/illustration2.png`}
       id="illustration2"
        draggable="false"
      />
        <img
        src={`${process.env.PUBLIC_URL}/illustration3.png`}
        id="illustration3"
        draggable="false"
        />
        <img
        src={`${process.env.PUBLIC_URL}/illustration4.png`}
        id="illustration4"
        draggable="false"
        />
        </div>
    )
}

export default Static;
