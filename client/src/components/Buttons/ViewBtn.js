import React from "react";
import "./Buttons.css";

export const ViewBtn = props =>
  <a href={props.link} target="_blank">
    <button {...props} style={{ float: "right", backgroundColor: "#9C5387", color: "white" }} className="btn viewBtn">
      {props.children}
    </button>
  </a>