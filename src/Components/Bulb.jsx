import React, { useState } from "react";
import "./Style.css";
import Off from "../Images/off2.png";
import On from "../Images/on2.png";

function Bulb() {
  const [offBulb, setOffBulb] = useState(Off);

  const bulbToggle = () => {

    if (offBulb == Off) {
      setOffBulb(On);
    } else {
      setOffBulb(Off);
    }
  };

  return <img src={offBulb} className="bulbImg" onClick={bulbToggle} />;
}

export default Bulb;