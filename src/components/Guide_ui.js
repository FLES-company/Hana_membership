import React from "react";
import "./Guide_ui.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Btn_default from "./Btn_default";
import Signup_btn from "./SignUp_button";
import Social_login_btn from "./Social_login_button";
import Social_login_btn_2 from "./Social_login_button_2";

function Guide_ui() {
  return (
    <div className="wrapper">
      <div className="guide wrap">
        <div id="guide_header">
          <h1 className="guide_h1">UI guide</h1>
          <ul className="tab_guide-list">
            <li>
              <a href="#button">버튼</a>
            </li>
            <li>
              <a href="#form">form</a>
            </li>
            <li>
              <a href="#form-ex">form-ex</a>
            </li>
          </ul>
        </div>

        <div id="guide_container">
          <div className="article" id="button">
            <h2 className="guide_h2">button 샘플</h2>
            <h3 className="guide_h3">- BUTTON</h3>
            <div className="Btn_default">
              <input
                className="gray"
                type="submit"
                value="Btn_default_rouund"
              />
            </div>
            <div className="Btn_default">
              <input
                className="navy"
                type="submit"
                value="Btn_default_rouund"
              />
            </div>
            <div className="Btn_default">
              <input
                className="border"
                type="submit"
                value="Btn_default_border"
              />
            </div>
            <div className="Btn_default">
              <input
                className="gradient blue"
                type="submit"
                value="Btn_default_gradient"
              />
            </div>
            <div className="Btn_default">
              <input
                className="gradient red"
                type="submit"
                value="Btn_default_gradient"
              />
            </div>
            <div className="Btn_default opacity">
              <input className="w80 blue" type="submit" value="Btn_w80" />
              <input className="w80 gray" type="submit" value="Btn_w80" />
              <input className="w80 red" type="submit" value="Btn_w80" />
              <input className="w72 light-gray" type="submit" value="Btn_w72" />
              <input className="w72 light-gray" type="submit" value="Btn_w72" />
            </div>
          </div>
          <div className="article" id="form">
            <h2 className="guide_h2">form 샘플</h2>
            <h3 className="guide_h3">- form</h3>
            <form>
              <div className="inner">
                <div className="item">
                  <p>이름, 아이디, 비밀번호</p>
                  <div className="input_unit">
                    <input
                      type="text"
                      placeholder="이름"
                      name="name"
                      minlength={2}
                    />
                    <span className="check_ok"></span>
                  </div>
                  <div className="input_unit">
                    <input type="text" placeholder="아이디" name="id" />
                    <span className="check_ok"></span>
                  </div>
                  <div className="input_unit">
                    <input
                      type="password"
                      minlength={5}
                      placeholder="비밀번호를 입력해주세요."
                      name="password"
                    />
                    <span className="check_fail"></span>
                  </div>
                  <div className="input_unit">
                    <input
                      type="text"
                      placeholder="이름, 아이디, 비밀번호 비활성"
                      disabled
                    />
                  </div>
                  <div className="input_unit input_search">
                    <button className="search-btn"></button>
                    <input type="text" placeholder="검색하기" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="article" id="form-ex">
            <h2 className="guide_h2">form-ex 샘플</h2>
            <h3 className="guide_h3">- form-ex</h3>
            <form action="">
              <div className="input_unit select">
                <select class="" id="">
                  <option value="1">select-box</option>
                  <option value="2">1</option>
                  <option value="3">2</option>
                  <option value="4">3</option>
                  <option value="5">4</option>
                </select>
              </div>
              <div className="input_unit count">
                <button type="button" className="minusBtn"></button>
                <input type="text" value="0" />
                <button type="button" className="plusBtn"></button>
              </div>
              <div className="input_unit checkbox">
                <input id="checkbox1" type="checkbox" name="" class="chk_blue" />
                <label for="checkbox1" class="chk">checkbox1</label>
                <input id="checkbox2" type="checkbox" name="" class="chk_red" />
                <label for="checkbox2" class="chk">checkbox1</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide_ui;