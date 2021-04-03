import "./maincard.css";
import React from "react";

export default function Maincard() {
  return (
    <div className="container">
      <div className="top">
        <div className="top-container">
          <div className="left leaf"></div>
          <div>ShivGange</div>
          <div className="right leaf"></div>
        </div>
      </div>
      <div className="main-card">
        <img alt="" className="bottom"></img>
      </div>
    </div>
  );
}
