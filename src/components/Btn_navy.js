import React from "react";
import "./Btn_navy.css";
import "./Guide_ui.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";


function Btn_navy() {
  // state = {
  //   login: '로그인',
  // }

  // appChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  return (
    <div className="Btn_navy">
      <input className="navy" type="button" value="로그인" />
    </div>
  );
}

export default Btn_navy;
