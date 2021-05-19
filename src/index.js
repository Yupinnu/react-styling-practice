//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red"
};
var word = "";

var today = new Date().getHours();
if (today >= 12 && today < 18) {
  customStyle.color = "green";
  word = "Afternoon";
} else if (today >= 18 && today < 24) {
  customStyle.color = "blue";
  word = "Night";
} else {
  customStyle.color = "red";
  word = "Morning";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {word}
  </h1>,
  document.getElementById("root")
);
