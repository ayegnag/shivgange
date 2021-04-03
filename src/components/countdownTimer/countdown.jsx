import React, { useState, useEffect } from "react";
import NumberCard from "./numberCard";
import "./countdown.css";
import "../../index.css";

export default function CountDown() {
  const targetDate = 1625121000000; // 1st July 2021
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const timeDiff = (currentTime) => {
    const duration = targetDate - currentTime;
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);

    setMinutes(minutes.toString().padStart(2, "0"));
    setHours(hours.toString().padStart(2, "0"));
    setDays(days.toString().padStart(2, "0"));
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      timeDiff(Date.now());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="pageContainer">
      <div className="title">ShivGange</div>
      <div className="middleRow">
        <NumberCard val={days} footer="Days"></NumberCard>
        <NumberCard val={hours} footer="Hours"></NumberCard>
        <NumberCard val={minutes} footer="Minutes"></NumberCard>
      </div>
    </div>
  );
}
