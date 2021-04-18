import React from "react";
import "./Tab3.css";
import img_guide from "./img/img_guide.png";


function Tab3() {
  return (
    <div className="Tab_item Tab3">
      <div className="Tab_content Tab3_contents">
        <table className="info">
          <caption>기본 정보</caption>
          <tbody>
            <tr>
              <th className="info_companyName">회사명</th>
              <td className="info_companyName">(주)한화리조트</td>
            </tr>
            <tr>
              <th className="info_ceo">대표이사</th>
              <td className="info_ceo">홍원기</td>
            </tr>
            <tr>
              <th className="info_mainPhone">대표전화</th>
              <td className="info_mainPhone">02-729-3456</td>
            </tr>
            {/* <tr>
              <th className="info_openDate">개장일</th>
              <td className="info_openDate"></td>
            </tr> */}
            <tr>
              <th className="info_address">주소</th>
              <td className="info_address">충남 태안군 근홍면 정죽리 태안해안국립공원 내</td>
            </tr>
            <tr>
              <th className="info_reservationPhone">예약전화</th>
              <td className="info_reservationPhone">02-729-3456</td>
            </tr>
          </tbody>
        </table>
        <table className="course">
          <caption>코스 소개</caption>
          <tbody>
            <tr>
              <th className="info_companyName">코스구성</th>
              <td className="info_companyName">27홀</td>
            </tr>
            <tr>
              <th className="info_ceo">부대시설</th>
              <td className="info_ceo">골프빌리지 56실</td>
            </tr>
            <tr>
              <th className="info_companyName">주말</th>
              <td className="info_companyName">정회원, 가족회원, 지정회원만 예약가능<br></br> 내장 30일전부터 전날까지 선착순</td>
            </tr>
          </tbody>
        </table>
        <div className="Tab3_contents_guide">
          <p>예약정보</p>
          <img src={img_guide} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Tab3;
