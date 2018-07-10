import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 250, textAlign: "center", padding: "30px", color: "#9C5387", backgroundColor: "#FFF6F9"}} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
