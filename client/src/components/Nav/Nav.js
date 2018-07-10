import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top" style={{backgroundColor: "#9C5387", borderColor: "#9C5387"}}>
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          New York Times App
        </a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/">Home</a></li>
        <li><a href="/saved">Saved Articles</a></li>
      </ul>
    </div>
  </nav>;

export default Nav;
