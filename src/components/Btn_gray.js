import React from "react";
import "./Btn_gray.css";
import "./Guide_ui.css";
import classNames from "classnames";

function Btn_gray({ text, color }) {
  return (
    <input
      className={classNames("Btn_gray", text, color)}
      type="button"
      value={text}
    />
    // <button className={classNames('Btn_gray', text, color)} type="button" >{text}</button>
  );
}

export default Btn_gray;

Btn_gray.defaultProps ={
  text: '텍스트',
}
