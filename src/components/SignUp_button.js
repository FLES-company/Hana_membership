import React from "react";
import "./SignUp_button.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Signup_btn() {
  return (
    <div className="Btn_default">
      <Link to="/signup">
        <input className="gray" type="submit" value="회원가입" />
      </Link>
    </div>
  );
}

export default Signup_btn;
