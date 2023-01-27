import React from "react";

import "./toggleButton.css";

const ToggleButton = (props) => (
  <button className={props.buttonClass} onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default ToggleButton;
