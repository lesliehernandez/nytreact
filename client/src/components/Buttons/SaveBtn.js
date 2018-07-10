import React from "react";
import "./Buttons.css";

export const SaveBtn = props =>
  <button {...props} style={{ float: "right", backgroundColor: "#404E7C", color: "white" }} className="btn saveBtn">
    {props.children}
  </button>;
