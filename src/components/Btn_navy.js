import React from "react";
import "./Btn_navy.css";
import "./Guide_ui.css";
import classNames from "classnames";

function Btn_navy({ text, color }) {
  return (
    <input
      className={classNames("Btn_navy", text, color)}
      type="button"
      value={text}
    />
    // <button className={classNames('Btn_navy', text, color)} type="button" >{text}</button>

  

  );
}
export default Btn_navy;

Btn_navy.defaultProps ={
  text: '텍스트',
}
