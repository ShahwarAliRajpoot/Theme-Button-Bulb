import React, { useState } from "react";
import "./Style.css";
import Bulb from "./Bulb";

function Theme() {

  const [mode, setMode] = useState({
    backgroundColor: "White",
    color: "black",
  });

  const toggle = () => {

    if (mode.color == "black") {
      setMode({
        backgroundColor: "black",
        color: "white",
      });
      
    } else {
      setMode({
        backgroundColor: "white",
        color: "black",
      });
    }
  };

  return (
    <div style={mode} className="box">
      <div className="custom-control custom-switch themeBtn">
        <input
          type="checkbox"
          onClick={toggle}
          className="custom-control-input"
          id="customSwitch1"
        />
        <label className="custom-control-label" htmlFor="customSwitch1"></label>
      </div>

      <Bulb />

    </div>
  );
}

export default Theme;
