import React, {Component} from "react";

import "./Login.css";
import "./Guide_ui.css";
import icon_back from "../img/right-arrow.png";
import check_ok from "../img/icon_confirm.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Btn_default from "./Btn_default";
import Signup_btn from "./SignUp_button";
import Social_login_btn from "./Social_login_button";
import Social_login_btn_2 from "./Social_login_button_2";

class Login extends Component {
  state = {
    email: '',
    psw: '' 

  }
  onChange = (e) => {
    const input_text = this.setState({[e.target.name]: e.target.value})
    if (input_text != ""){
      this.setState(() => ({ disabled: false }))
    } else if (!this.state.disabled) {
      this.setState(() => ({ disabled: true }))
    }
      
    }

  render(){
    return (
      <div className="Login">
        {/* back_header : s */}
        <div className="back_header">
          <div className="back_header_inner">
            <a href="/loginMain" className="header_icon_item icon_back">
              <div className="icon_img">
                <img hidden src={icon_back} Link to="/loginMain" />
              </div>
            </a>
            <h1>로그인</h1>
          </div>
        </div>
        {/* back_header : e */}

        <form>
          <ul>
            <li className="check_ok">
              <span>이메일</span>
              <input  
                style={Object.assign({}, styles.input, this.state.email && styles.check_image)}
                name="email" 
                type="text" placeholder="이메일" required 
                onChange={this.onChange} />
                {/* <span className="check_ok" style={Object.assign({},styles.check_image)}></span> */}
            </li>
            <li className="check_error">
              <span>비밀번호</span>
              <input 
                style={Object.assign({}, styles.input, this.state.psw && styles.check_image)}
                name="psw" type="password" placeholder="비밀번호를 입력해주세요." required 
                onChange={this.onChange} />
            </li>
          </ul>
          <Link to="/find">
            <button className="findBtn">아이디 / 비밀번호 찾기</button>
          </Link>

          <Btn_default />
          <Signup_btn />
          <Social_login_btn />
          </form>
        
      </div>
    );
  }
}
const styles = {
 
}

export default Login;
