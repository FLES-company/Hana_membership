import React from "react";
import "./Notice.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function Notice() {
  return (
    <div className="Notice">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <Link to="/" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} />
            </div>
          </Link>
          <h1>알림</h1>
          <Link to="/login" className="header_icon_item icon_favorites">
            <div className="icon_img">
              <img src={icon_favorites} hidden />
            </div>
          </Link>
        </div>
      </div>
      {/* back_header : e */}
      <div className="Notice_contents">
        <p className="Notice_text">최근 14일의 알림을 확인할 수 있습니다.</p>
        <div className="accordion_inner">
          <ul className="accordion-list qna">
            <li className="on">
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
                  안녕하세요. 하나회원권거래소 운영팀입니다.
                  <br />
                  <br /> 2021년 설 연휴로 인하여 2021년 2월 11일(목)부터
                  13일(일)까지 휴무인 점 안내해드립니다.
                  <br />
                  <br /> 2021년에도 밝은 희망이 넘치고 행복한 기운이 가득한
                  한해가 되시길 기원합니다. 새해 복 많이 받으세요! <br />
                  <br />
                  운영팀 드림.
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
                  안녕하세요. 하나회원권거래소 운영팀입니다.
                  <br />
                  <br /> 2021년 설 연휴로 인하여 2021년 2월 11일(목)부터
                  13일(일)까지 휴무인 점 안내해드립니다.
                  <br />
                  <br /> 2021년에도 밝은 희망이 넘치고 행복한 기운이 가득한
                  한해가 되시길 기원합니다. 새해 복 많이 받으세요! <br />
                  <br />
                  운영팀 드림.
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
                  안녕하세요. 하나회원권거래소 운영팀입니다.
                  <br />
                  <br /> 2021년 설 연휴로 인하여 2021년 2월 11일(목)부터
                  13일(일)까지 휴무인 점 안내해드립니다.
                  <br />
                  <br /> 2021년에도 밝은 희망이 넘치고 행복한 기운이 가득한
                  한해가 되시길 기원합니다. 새해 복 많이 받으세요! <br />
                  <br />
                  운영팀 드림.
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
                  안녕하세요. 하나회원권거래소 운영팀입니다.
                  <br />
                  <br /> 2021년 설 연휴로 인하여 2021년 2월 11일(목)부터
                  13일(일)까지 휴무인 점 안내해드립니다.
                  <br />
                  <br /> 2021년에도 밝은 희망이 넘치고 행복한 기운이 가득한
                  한해가 되시길 기원합니다. 새해 복 많이 받으세요! <br />
                  <br />
                  운영팀 드림.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Notice;
