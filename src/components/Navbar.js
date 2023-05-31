import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="header">
      <div className="icons">
        <img src="" alt="images"></img>
        <h3>NFTSTORE</h3>
      </div>

      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"> Services</a>
          </li>
          <li>
            <a href="#"> About Us</a>
          </li>
          <li>
            <a href="#"> My List</a>
          </li>
          <li>
            <a href="#">
              <button className="wallet__button">Connet Wallet</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
