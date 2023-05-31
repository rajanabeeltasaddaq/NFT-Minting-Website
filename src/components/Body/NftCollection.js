import React from "react";
import data from "../../data.json";
import NftCard from "./NftCard";
import "./Body.css";

function NftCollection() {
  return (
    <div className="Nft__Collections">
      <div className="Nft__Collections__Title">
        <h2>Non-Fungible Tokens</h2>
      </div>
      <div className="Nfts">
        {data.map((element) => {
          return (
            <NftCard
              image={element.Image}
              title={element.Title}
              price={element.price}
              desc={element.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NftCollection;
