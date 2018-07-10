import React from "react";
import "./List.css";

export const ListGroup = ({ children }) => {
  return (
    <ul className="list-group">
      {children}
    </ul>
  );
};

