import React from "react";
import "./Body.css";
function Banner() {
  return (
    <div className="Header__Banner">
      <div className="content">
        <h1>Non-Fungible Tokens</h1>
        <p>
          Learn Basic Html and CSS3 to become a Web Developer. Try to code daily
          and be consistent with it.
        </p>
        <div>
          <button type="button">
            <span></span> COLLECTION
          </button>
          <button type="button">
            <span></span> MINTING
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
