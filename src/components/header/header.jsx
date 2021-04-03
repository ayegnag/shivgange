import "./header.css";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">#ShivGange</div>
        <div className="bar"></div>
      </div>
    );
  }
}
