import React from "react";
import "./Header.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar__Logo">
        {/* <img></img> */}
        <h4>NFT MINTING</h4>
      </div>
      <div className="NavBar__Search">
        {/* <input type="text" placeholder="Search"></input> */}
      </div>
      <div className="NavBar__Links">
        <ul>
          <li className="NavBar__Pages">
            <a href="#">Home</a>
          </li>
          <li className="NavBar__Pages">
            <a href="#">Minting</a>
          </li>
          <li className="NavBar__Button">
            <button>Connect Wallet</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
