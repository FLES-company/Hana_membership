import React from "react";
import "./Btn_default.css";
import "./Guide_ui.css";
import classNames from 'classnames'; 
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_default({text, color, size}) {
  return (
      <input className={classNames('Btn_default',color, size)} type="button" value={text} />
  );
}

export default Btn_default;

Btn_default.defaultProps ={
  size: 'h47',
}
