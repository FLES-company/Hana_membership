import React from "react";
import "./SignUp.css";
import "./components/Guide_ui.css";
import Header_back from "./components/Header_back";
import Btn_navy from "./components/Btn_navy";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";


function SignUp() {
  return (
    <div className="SignUp">
      <Header_back />
      <div className="SinUp_inner">
        <h1>회원가입</h1>
        <form>
          {/* input_email */}
          <div className="SinUp_inner_item input_email">
            <span>이메일</span>
            <div className="input_unit">
              <input type="text" placeholder="이메일" name="email" required />

              {/* 체크사항 */}
              {/* <span className="check_ok"></span> */}
            </div>
          </div>
          {/* input_password */}
          <div className="SinUp_inner_item input_password">
            <span>비밀번호</span>

            <div className="input_unit">
              <input
                type="password"
                minlength={5}
                placeholder="비밀번호를 입력해주세요."
                name="password"
                required
              />

              {/* 체크사항 */}
              {/* <span className="check_fail"></span> */}
            </div>
            <div className="input_unit">
              <input
                type="password"
                minlength={5}
                placeholder="비밀번호를 다시 한번 입력해주세요."
                name="password-repeat"
                required
              />

              {/* 체크사항 */}
              {/* <span className="check_fail"></span> */}
            </div>
          </div>
          <div className="footer_fixed">
            <div className="Policy_inner">
              <ul className="SinUp_inner_item">
                <li>
                  <input type="checkbox" id="check_all" />
                  <label for="check_all"></label>
                  <span>
                    <b>모두 동의합니다.</b>
                  </span>
                </li>
                <li>
                  <ul>
                    <li>
                      <input type="checkbox" id="check_1" className="normal" />
                      <label for="check_1"></label>
                      <span>(필수) 이용약관 필수 동의</span>
                    </li>
                    <li>
                      <input type="checkbox" id="check_2" className="normal" />
                      <label for="check_2"></label>
                      <span>(필수) 개인정보 처리방침 필수 동의</span>
                    </li>
                    <li>
                      <input type="checkbox" id="check_3" className="normal" />
                      <label for="check_3"></label>
                      <span>
                        (선택) 쿠폰 / 이벤트 알림 선택 동의
                        <p>
                          SMS, 이메일을 통해 파격할인/이벤트/쿠폰 정보를
                          받아보실 수 있습니다.
                        </p>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link to="/signUpComplete">
              <Btn_navy text="로그인" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
