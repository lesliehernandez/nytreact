import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", backgroundColor: "#9C5387", color: "white" }} className="btn">
    {props.children}
  </button>;
