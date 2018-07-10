import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="panel panel-default">
      {children}
    </div>
  );
};

