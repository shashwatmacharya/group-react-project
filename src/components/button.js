import React from "react";
import './button.css';

function Button({ type, text }) {
  return (
  <button className={type}>{text}
  </button>
)
}

export default Button;
