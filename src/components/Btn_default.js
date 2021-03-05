import React from "react";
import "./Btn_default.css";
import "./Guide_ui.css";
import classNames from 'classnames'; 
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_default(style) {
  return (
    <div className="Btn_default">
      <input className={classNames(style)} type="button" value="회원가입" />
    </div>
  );
}

export default Btn_default;
