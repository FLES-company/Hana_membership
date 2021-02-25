import React from "react";
import "./Splash.css";
import BI_full from "./img/BI_full.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Splash() {
  return (
    //   앱 실행 초기화면
    <div className="Splash">
      <div className="Splash_inner">
        <div className="icon_img">
          <img src={BI_full} />
        </div>
      </div>
    </div>
  );
}

export default Splash;
