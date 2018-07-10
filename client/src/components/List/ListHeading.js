import React from "react";
import "./List.css";

export const ListHeading = ({ children }) => {
  return (
      <div className="panel-heading">
        {children}
      </div>
  );
};

