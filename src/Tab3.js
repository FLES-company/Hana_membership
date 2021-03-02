import React from "react";
import "./Tab3.css";

function Tab3() {
  return (
    <div className="Tab3">
      <div className="Tab3_contents">
        <table className="info">
          <caption>기본 정보</caption>
          <tbody>
            <tr>
              <th className="info_companyName">회사명</th>
              <td className="info_companyName">한국일보</td>
            </tr>
            <tr>
              <th className="info_ceo">대표이사</th>
              <td className="info_ceo">신윤영</td>
            </tr>
            <tr>
              <th className="info_mainPhone">대표전화</th>
              <td className="info_mainPhone">031-123-4567</td>
            </tr>
            <tr>
              <th className="info_openDate">개장일</th>
              <td className="info_openDate">1992/10/16</td>
            </tr>
            <tr>
              <th className="info_address">주소</th>
              <td className="info_address">경기 남양주 진접읍 팔이리 산1</td>
            </tr>
            <tr>
              <th className="info_reservationPhone">예약전화</th>
              <td className="info_reservationPhone">031-123-4567</td>
            </tr>
          </tbody>
        </table>
        <table className="course">
          <caption>코스 기본</caption>
          <tbody>
            <tr>
              <th className="info_companyName">회사명</th>
              <td className="info_companyName">한국일보</td>
            </tr>
            <tr>
              <th className="info_ceo">대표이사</th>
              <td className="info_ceo">신윤영</td>
            </tr>
            <tr>
              <th className="info_mainPhone">대표전화</th>
              <td className="info_mainPhone">031-123-4567</td>
            </tr>
            <tr>
              <th className="info_openDate">개장일</th>
              <td className="info_openDate">1992/10/16</td>
            </tr>
            <tr>
              <th className="info_address">주소</th>
              <td className="info_address">경기 남양주 진접읍 팔이리 산1</td>
            </tr>
            <tr>
              <th className="info_reservationPhone">예약전화</th>
              <td className="info_reservationPhone">031-123-4567</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tab3;
