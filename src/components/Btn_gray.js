import React from "react";
import "./Btn_gray.css";
import "./Guide_ui.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_gray() {
  return (
    <div className="Btn_gray">
      <input className="gray" type="button" value="회원가입" />
    </div>
  );
}

export default Btn_gray;
