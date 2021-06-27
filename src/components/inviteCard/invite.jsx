import "./invite.css";
import React, { Component } from "react";

export default class InviteCard extends Component {
  render() {
    return (
      <div className="innerBody2 glass">
        <div className="qrCode"></div>
        <div className="btnContainer">
          <div>
            You are invited us to join us at the ceremonies for Shivangi and
            Gangeya's union. Scan the QR code or use the button below.
          </div>
          <div className="btnDiv">
            <a href="https://zoom.us/j/93068859962?pwd=alBnaFl2a3IyVHArL1MzRW5vMk1BUT09" class="btn btn-blue">
              Take me there
            </a>
          </div>
        </div>
      </div>
    );
  }
}
