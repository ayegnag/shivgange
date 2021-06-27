import React, { useState, useEffect } from "react";
import CountDown from "../countdownTimer/countdown";
import SplitTitle from "../splitTitle/splittitle";
import InviteCard from "../inviteCard/invite"
import "./pagecontainer.css";

export default function PageContainer() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const percentScroll = Math.floor(
      (window.pageYOffset * 100) /
        (document.documentElement.offsetHeight - window.innerHeight)
    );
    setScrollPosition(percentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pageContainer">
      <SplitTitle scrollVal={scrollPosition}></SplitTitle>
      <InviteCard></InviteCard>
      {/* <CountDown scrollVal={scrollPosition}></CountDown>  */}
      <div className={scrollPosition > 5 ? "backdrop blurr" : "backdrop"}></div>
    </div>
  );
}
