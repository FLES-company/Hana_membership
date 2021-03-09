import React, { useState } from "react";
import "./Search.css";

function Search() {
    function click(e){
        console.log(e.target)
    }
  return (
    <div className="Search" id="Search">
      <form>
        <div className="input_wrapper">
          <div className="input_unit input_search">
            <button className="search-btn"></button>
            <input type="text" placeholder="회원권 검색하기" />
          </div>
          <div className="Btn_cancle">
            <button type="button" onClick={click}>취소</button>
          </div>
        </div>
      </form>
      <div className="search_item popular">
        <h2>가장 많이 검색</h2>
        <div className="item">
          <span>88(팔팔)</span>
          <span>이포</span>
          <span>가야</span>
          <span>베이사이드(프리미어)</span>
          <span>가야</span>
        </div>
      </div>
      <div className="search_item user">
        <h2>내가 검색한 회원권</h2>
        <div className="item">
          <span>88(팔팔)</span>
          <span>이포</span>
          <span>가야</span>
          <span>베이사이드(프리미어)</span>
          <span>가야</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
