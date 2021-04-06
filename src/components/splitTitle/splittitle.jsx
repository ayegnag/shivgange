import React, { useState, useEffect } from "react";
import "./splittitle.css";

export default function SplitTitle(props) {
  const scrollPosition = props.scrollVal;
  return (
    <div className="titleContainer">
      <div className={`title ${scrollPosition > 5 ? "hide" : ""}`}>
        ShivGange
      </div>
      {scrollPosition > 0 && (
        <div className={scrollPosition > 5 ? "anim shift" : "anim"}>
          <div className="first title">
            Shiv<span className={scrollPosition > 5 ? "show" : ""}>angi</span>
          </div>
          <div className={`mid ${scrollPosition > 5 ? "show" : ""}`}>and</div>
          <div className={`second title ${scrollPosition > 5 ? "move" : ""}`}>
            Gange<span className={scrollPosition > 5 ? "show" : ""}>ya</span>
          </div>
        </div>
      )}
    </div>
  );
}
