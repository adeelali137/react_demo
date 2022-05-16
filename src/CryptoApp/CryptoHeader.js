import React from "react";
import "./style.css";

export default function CryptoHeader() {
  return (
    <>
      <div className="header-coins">
        <h3>Search Coins</h3>
        <input
        type="text" 
        placeholder="Bitcoin..."
        onChange={(e)=>{
            
        }}
        />
      </div>
    </>
  );
}
