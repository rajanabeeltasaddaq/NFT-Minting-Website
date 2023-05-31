import React from "react";
import "./Body.css";
import img from "../../Images/bg1.jpg";

function NftCard({ image, desc, title, price }) {
  return (
    <div className="Nft__Card">
      <div className="Card__Image">
        <img src={img}></img>
      </div>
      <div className="Card__Content">
        <div className="Card__Title">
          <h4>{title}</h4>
        </div>
        <div className="Card__Description">
          <p>{desc}</p>
          <p>Price : {price}</p>
        </div>
        <div className="Card__Button">
          <button>Purchase NFT</button>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
