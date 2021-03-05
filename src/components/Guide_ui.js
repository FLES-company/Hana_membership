import React from "react";
import "./Guide_ui.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Btn_navy from "./Btn_navy";
import Btn_gray from "./Btn_gray";
import Btn_social from "./Btn_social";
import Btn_social_bg from "./Btn_social_bg";

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
            <li>
              <a href="#policy">policy</a>
            </li>
            <li>
              <a href="#tab">tab</a>
            </li>
            <li>
              <a href="#accordion">accordion</a>
            </li>
            <li>
              <a href="#slide">slide</a>
            </li>
            <li>
              <a href="#modal">modal</a>
            </li>
          </ul>
        </div>

        <div id="guide_container">
          <div className="article" id="button">
            <h2 className="guide_h2">button 샘플</h2>
            <h3 className="guide_h3">- BUTTON</h3>
            <div className="Btn_navy">
              <input
                className="gray"
                type="submit"
                value="Btn_navy_rouund"
              />
            </div>
            <div className="Btn_navy">
              <input
                className="navy"
                type="submit"
                value="Btn_navy_rouund"
              />
            </div>
            <div className="Btn_navy">
              <input
                className="border"
                type="submit"
                value="Btn_navy_border"
              />
            </div>
            <div className="Btn_navy">
              <input
                className="gradient blue"
                type="submit"
                value="Btn_navy_gradient"
              />
            </div>
            <div className="Btn_navy">
              <input
                className="gradient red"
                type="submit"
                value="Btn_navy_gradient"
              />
            </div>
            <div className="Btn_navy opacity">
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
            <form>
              <div className="input_unit select">
                <select>
                  <option value="1">select-box</option>
                  <option value="2">1</option>
                  <option value="3">2</option>
                  <option value="4">3</option>
                  <option value="5">4</option>
                </select>
              </div>
              <div className="input_unit count">
                <button type="button" className="dec" onClick="onDec"></button>
                <input type="text" value={0} />
                <button type="button" className="inc" onClick="onInc"></button>
              </div>
              <div className="input_unit checkbox blue">
                <input id="checkbox1" type="checkbox" className="chk_blue" />
                <label for="checkbox1" className="chk">
                  <span>checkbox1</span>
                </label>
              </div>
              <div className="input_unit checkbox red">
                <input id="checkbox2" type="checkbox" className="chk_red" />
                <label for="checkbox2" className="chk">
                  <span>checkbox2</span>
                </label>
              </div>
            </form>
          </div>
          <div className="article" id="policy">
            <h2 className="guide_h2">Policy</h2>
            <h3 className="guide_h3">- Policy</h3>
            <div className="Policy_inner">
              <ul className="SinUp_inner_item">
                <li>
                  <input type="checkbox" id="check_all" />
                  <label htmlFor="check_all"></label>
                  <span>
                    <b>모두 동의합니다.</b>
                  </span>
                </li>
                <li>
                  <ul>
                    <li>
                      <input type="checkbox" id="check_1" className="normal" />
                      <label htmlFor="check_1"></label>
                      <span>(필수) 이용약관 필수 동의</span>
                      <button hidden>보기 &gt;</button>
                    </li>
                    <li>
                      <input type="checkbox" id="check_2" className="normal" />
                      <label htmlFor="check_2"></label>
                      <span>(필수) 개인정보 처리방침 필수 동의</span>
                      <button hidden>보기 &gt;</button>
                    </li>
                    <li>
                      <input type="checkbox" id="check_3" className="normal" />
                      <label htmlFor="check_3"></label>
                      <span>
                        (선택) 쿠폰 / 이벤트 알림 선택 동의
                        <p>
                          SMS, 이메일을 통해 파격할인/이벤트/쿠폰 정보를
                          받아보실 수 있습니다.
                        </p>
                      </span>

                      <button hidden>보기 &gt;</button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="article" id="tab">
            <h2 className="guide_h2">tab</h2>
            <h3 className="guide_h3">- tab</h3>
            <div className="tab_inner">
              <div className="tab_menu_wrap">
                <ul>
                  <li className="tab on">
                    <a href="#tab1">호가</a>
                  </li>
                  <li className="tab">
                    <a href="#tab2">차트</a>
                  </li>
                  <li className="tab">
                    <a href="#tab3">정보</a>
                  </li>
                  <li className="tab">
                    <a href="#tab4">매도</a>
                  </li>
                  <li className="tab">
                    <a href="#tab5">매수</a>
                  </li>
                </ul>
              </div>
              <div className="tab_cont_wrap">
                <div class="tab_cont" id="tab1">
                  11111
                </div>
                <div class="tab_cont" id="tab2">
                  22222
                </div>
                <div class="tab_cont" id="tab3">
                  33333
                </div>
                <div class="tab_cont" id="tab4">
                  44444
                </div>
                <div class="tab_cont" id="tab5">
                  55555
                </div>
              </div>
            </div>
          </div>
          <div className="article" id="accordion">
            <h2 className="guide_h2">Accordion Menu</h2>
            <h3 className="guide_h3">- Accordion Menu</h3>
            <div className="accordion_inner">
              <ul className="accordion-list qna">
                <li className="on" >
                  <div className="header-area">
                    <div className="tagImg notice"></div>
                    <div className="tit">
                      2021년 설 연휴 휴무 안내입니다.
                      <div className="sub">
                        <div className="item dateNtime">
                          <span>2021-10-19</span>
                          <span>17:52</span>
                        </div>
                        <div className="item view">
                          조회수<span>234</span>
                        </div>
                      </div>
                    </div>
                    <button className="acc_btn"></button>
                  </div>
                  <div className="con-area">
                    <p className="qna_cont">
                      안녕하세요. 하나회원권거래소 운영팀입니다. 2021년 설
                      연휴로 인하여 2021년 2월 11일(목)부터 13일(일)까지 휴무인
                      점 안내해드립니다. 2021년에도 밝은 희망이 넘치고 행복한
                      기운이 가득한 한해가 되시길 기원합니다. 새해 복 많이
                      받으세요! 운영팀 드림.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="header-area">
                    <div className="tagImg event"></div>
                    <div className="tit">
                      2021년 설 연휴 휴무 안내입니다.
                      <div className="sub">
                        <div className="item dateNtime">
                          <span>2021-10-19</span>
                          <span>17:52</span>
                        </div>
                        <div className="item view">
                          조회수<span>234</span>
                        </div>
                      </div>
                    </div>
                    <button className="acc_btn"></button>
                  </div>
                  <div className="con-area">
                    <p className="qna_cont">
                      안녕하세요. 하나회원권거래소 운영팀입니다. 2021년 설
                      연휴로 인하여 2021년 2월 11일(목)부터 13일(일)까지 휴무인
                      점 안내해드립니다. 2021년에도 밝은 희망이 넘치고 행복한
                      기운이 가득한 한해가 되시길 기원합니다. 새해 복 많이
                      받으세요! 운영팀 드림.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="header-area">
                    <div className="tagImg alarm"></div>
                    <div className="tit">
                      2021년 설 연휴 휴무 안내입니다.
                      <div className="sub">
                        <div className="item dateNtime">
                          <span>2021-10-19</span>
                          <span>17:52</span>
                        </div>
                        <div className="item view">
                          조회수<span>234</span>
                        </div>
                      </div>
                    </div>
                    <button className="acc_btn"></button>
                  </div>
                  <div className="con-area">
                    <p className="qna_cont">
                      안녕하세요. 하나회원권거래소 운영팀입니다. 2021년 설
                      연휴로 인하여 2021년 2월 11일(목)부터 13일(일)까지 휴무인
                      점 안내해드립니다. 2021년에도 밝은 희망이 넘치고 행복한
                      기운이 가득한 한해가 되시길 기원합니다. 새해 복 많이
                      받으세요! 운영팀 드림.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="header-area">
                    <div className="tagImg"></div>
                    <div className="tit">
                      2021년 설 연휴 휴무 안내입니다.
                      <div className="sub">
                        <div className="item dateNtime">
                          <span>2021-10-19</span>
                          <span>17:52</span>
                        </div>
                        <div className="item view">
                          조회수<span>234</span>
                        </div>
                      </div>
                    </div>
                    <button className="acc_btn"></button>
                  </div>
                  <div className="con-area">
                    <p className="qna_cont">
                      안녕하세요. 하나회원권거래소 운영팀입니다. 2021년 설
                      연휴로 인하여 2021년 2월 11일(목)부터 13일(일)까지 휴무인
                      점 안내해드립니다. 2021년에도 밝은 희망이 넘치고 행복한
                      기운이 가득한 한해가 되시길 기원합니다. 새해 복 많이
                      받으세요! 운영팀 드림.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="article" id="slide">
            <h2 className="guide_h2">slide</h2>
            <h3 className="guide_h3">- slide</h3>
          </div>
          <div className="article" id="modal">
            <h2 className="guide_h2">modal</h2>
            <h3 className="guide_h3">- modal</h3>
            <div className="modal_inner">
              <button className="" id="open">
                모달열기
              </button>
              <div className="modal_wrapper">
                <div className="modal">
                  <div className="modal_tit">title</div>
                  <div className="modal_content">content</div>
                  <div className="modal_close_wrapper">
                    <button className="" id="close">
                      닫기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide_ui;
