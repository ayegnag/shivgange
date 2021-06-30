import React, { Component } from "react";
import "./invite.css";

export default class InviteCard extends Component {
  render() {
    return (
      <div className="innerBody2 glass">
        {/* <div className="qrCode"></div> */}
        <div className="roseLine"></div>
        <div className="btnContainer">
          <div className="heading">
          We're Live!
          </div>
          <div className="text">
            We invite you to tune in virtually as we tie knot for our union. Please join our celebration's livestream over Zoom.
          </div>
          <div className="btnDiv">
            <a href="https://zoom.us/j/93068859962?pwd=alBnaFl2a3IyVHArL1MzRW5vMk1BUT09" className="btn btn-blue">
              Join Our Wedding
            </a>
          </div>
        </div>
      </div>
    );
  }
}
