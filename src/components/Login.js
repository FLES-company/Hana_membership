import React, { Component, useState, useEffect, useHistory } from "react";

import "./Login.css";
import "./Guide_ui.css";
import icon_back from "../img/right-arrow.png";
import check_ok from "../img/icon_confirm.png";
import { Routes, Link, Switch, Route, BrowserRouter, withRouter } from "react-router-dom";

import Btn_navy from "./Btn_navy";
import Btn_gray from "./Btn_gray";
import Btn_social from "./Btn_social";
import Btn_social_bg from "./Btn_social_bg";

const btn_style = { width : '100%' }

class Login extends Component {
  state = {
    email: "",
    psw: "",
  };
  
  onChange = (e) => {
      if (e.target.value != ""){
        if(e.target.name == 'email'){
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(e.target.value)) {
            this.setState(() => ({'className':"check_error"}))
          }else{
            this.setState(() => ({'className':"check_ok"}))
          }
        } 
      }
  }

  loginClick = (e) => {
    const user = {
      email : document.getElementById('email').value,
      psw: document.getElementById('psw').value
    };
    e.preventDefault();
    // console.log(user);
    window.localStorage.setItem("userinfo", JSON.stringify(user));
    this.props.history.push('/home');
  }
  
  render(){
    return (
      <div className="Login">
        {/* back_header : s */}
        <div className="back_header">
          <div className="back_header_inner">
            <a href="/home" className="header_icon_item icon_back">
              <div className="icon_img">
                <img hidden src={icon_back} Link to="/home" />
              </div>
            </a>
            <h1>로그인</h1>
          </div>
        </div>
        {/* back_header : e */}

        <form>
          <ul>
            <li className={this.state.className}>
              <span>이메일</span>
              <input
                style={Object.assign(
                  {},
                  styles.input,
                  this.state.email && styles.check_image
                )}
                name="email"
                type="text"
                id="email"
                placeholder="이메일"
                required 
                onChange={this.onChange}
              />
              {/* <span className="check_ok" style={Object.assign({},styles.check_image)}></span> */}
            </li>
            <li>
              <span>비밀번호</span>
              <input
                name="psw"
                id="psw"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                required
                onChange={this.onChange}
              />
            </li>
          </ul>

          <Link to="/find">
            <button className="findBtn">아이디 / 비밀번호 찾기</button>
          </Link>

          {/* <Link to="/home"> */}
            {/* findidComplete */}
            {/* <Btn_navy text="로그인"/> */}
            <button className="Btn_navy" style={btn_style} onClick={this.loginClick}>로그인</button>
          {/* </Link> */}

          <Link to="/signup">
            <Btn_gray text="회원가입" />
          </Link>
          {/* <Btn_social /> */}
        </form>
      </div>
    );
  }
}
const styles = {};

export default Login;
