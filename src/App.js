import "./App.css";
import React from "react";

import Header from "./components/Header";
import Gnb from "./components/Gnb";
import Footer from "./components/Footer";

import Login_btn from "./components/Login_button";
import Signup_btn from "./components/SignUp_button";
import Social_login_btn from "./components/Social_login_button";
import Input_text from "./components/Input_text";
import Find_idpw from "./Find_idpw";

import img from "./img/times-light.png";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Input_text />
      
    </div>
  );
}

export default App;
