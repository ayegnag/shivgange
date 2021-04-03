import React from "react";
import "./countdown.css";

export default function NumberCard(props) {
  return (
    <div className="innerBody glass">
      <span>{props.val}</span>
      <div className="footer">{props.footer}</div>
    </div>
  );
}
