import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
import Banner from "./Banner";
function Header() {
  return (
    <div className="Header">
      <NavBar />
      <Banner />
    </div>
  );
}

export default Header;
