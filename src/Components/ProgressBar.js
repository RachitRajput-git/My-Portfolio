import React, { useState } from "react";
import "../css/progressBar.css";

function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  /**  Get the percentage of scrolled documents */
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll); // listening the event

  return (
    <div className="progressContainer">
      <div className="progressBar" style={{ width: `${scroll}%  ` }}></div>
    </div>
  );
}

export default ProgressBar;
