import React from "react";
import "./Buttons.css";

export const SaveBtn = props =>
  <button {...props} style={{ float: "right", backgroundColor: "#9C5387", color: "white" }} className="btn saveBtn">
    {props.children}
  </button>;
