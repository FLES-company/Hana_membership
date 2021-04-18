import React, {Component} from "react";
import "./Body.css";
import img_banner1 from "../img/img_banner1.png";
import Chart from "../Chart_top10"
import Chart_down from "../Chart_down"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import item from "../mock/Weekly_interest.json";


class Body extends React.Component {
  render() {
    let owl_carousel = require('owl.carousel');
    window.fn = owl_carousel;
    const item_name = item.map(item => (<p className="item_tit">{item.Membership_name}</p>));
    const item_current = item.map(item => (<p className="item_dec">{item.Current_price}<span className="price_up">{item.Current_price-item.Base_price}(<span className="percent">{((item.Current_price-item.Base_price)/item.Base_price*100).toFixed(2)}%</span>)<Chart /></span></p>))
    
  return(
  //   앱 실행 초기화면
  <div className="Body">
    <div className="Body_inner">
      {/* 배너 */}
      <div className="Body_inner_banner">
        <ul>
          <li>
            <a href="#">
              <img src={img_banner1} alt="img_banner1" />
            </a>
          </li>
        </ul>
      </div>
      {/* 주간 관심 TOP 10 */}
      <div className="Body_inner_item Body_week">
        <h1>주간 관심 TOP 10</h1>
        <ul>
        <OwlCarousel  margin={10} autoWidth loop items={2}>
          
        <li className="item week_item">
            <a href="#">
              <p className="item_tit">{item_name[0]}</p>
              <p className="item_dec">
                {item_current[0]}
                <span className="price_up">
                  37,450 (<span className="percent">823%</span>)
                  <Chart />
                </span>
              </p>
              <div className="item_graph">
              </div>
            </a>
          </li>
          
          <li className="item week_item">
            <a href="#">
              <p className="item_tit">{item_name[1]}</p>
              <p className="item_dec">
              {item_current[1]}
                <span className="price_up">
                  37,450 (<span className="percent">823%</span>)
                  <Chart />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          

          
          <li className="item week_item">
            <a href="#">
              <p className="item_tit">{item_name[2]}</p>
              <p className="item_dec">
              {item_current[2]}
                <span className="price_up">
                  37,450 (<span className="percent">823%</span>)
                  <Chart />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          

          
          <li className="item week_item">
            <a href="#">
              <p className="item_tit">{item_name[3]}</p>
              <p className="item_dec">
              {item_current[3]}
                <span className="price_up">
                  37,450 (<span className="percent">823%</span>)
                  <Chart />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          
          </OwlCarousel>       
        </ul>
      </div>
      {/* 월간 상승ㆍ하락 회원권 */}
      <div className="Body_inner_item Body_month">
        <h1>월간 상승ㆍ하락 회원권</h1>
        <div>
        <ul>
        <OwlCarousel  margin={10} autoWidth loop items={2}>
          <li className="month_item">
            <a href="#">
              <p className="item_tit">서원밸리</p>
              <p className="item_dec">
                40,000
                <span className="price_up">
                  9,000 (<span className="percent">23%</span>)
                  <Chart_down />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          <li className="month_item">
            <a href="#">
              <p className="item_tit">가평베네스트</p>
              <p className="item_dec">
                74,000
                <span className="price_up">
                  3,000 (<span className="percent">4%</span>)
                  <Chart_down />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          <li className="month_item">
            <a href="#">
              <p className="item_tit">송추</p>
              <p className="item_dec">
                53,000
                <span className="price_up">
                  5,000 (<span className="percent">9%</span>)
                  <Chart_down />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          <li className="month_item">
            <a href="#">
              <p className="item_tit">블루원용인</p>
              <p className="item_dec">
                26,000
                <span className="price_up">
                  4,500 (<span className="percent">17%</span>)
                  <Chart_down />
                </span>
              </p>
              <div className="item_graph"></div>
            </a>
          </li>
          </OwlCarousel>     
        </ul>
        </div>
      </div>
      {/* 추천 상품 */}
      <div className="Body_inner_item recommend_items">
        <h1>추천 상품</h1>
        <div>
        <ul>
        <OwlCarousel  margin={10} autoWidth loop items={2}>
          <li className="recommend_item">
            <a href="#">
              <p className="item_tit">
                우정힐스<span className="tit_price">(32,500)</span>
              </p>
              <p className="item_dec">32,500</p>
              <div className="item_hashtags">
                <span className="hashtag">#골프회원</span>
                <span className="hashtag">#골프회원</span>
              </div>
            </a>
          </li>
          <li className="recommend_item">
            <a href="#">
              <p className="item_tit">
                뉴서울<span className="tit_price">(29,500)</span>
              </p>
              <p className="item_dec">29,500</p>
              <div className="item_hashtags">
                <span className="hashtag">#골프회원</span>
                <span className="hashtag">#골프회원</span>
              </div>
            </a>
          </li>
          <li className="recommend_item">
            <a href="#">
              <p className="item_tit">
                남서울<span className="tit_price">(23,500)</span>
              </p>
              <p className="item_dec">23,500</p>
              <div className="item_hashtags">
                <span className="hashtag">#골프회원</span>
                <span className="hashtag">#골프회원</span>
              </div>
            </a>
          </li>
          <li className="recommend_item">
            <a href="#">
              <p className="item_tit">
                남서울 여자<span className="tit_price">(35,000)</span>
              </p>
              <p className="item_dec">35,000</p>
              <div className="item_hashtags">
                <span className="hashtag">#골프회원</span>
                <span className="hashtag">#골프회원</span>
              </div>
            </a>
          </li>
          </OwlCarousel>     
        </ul>
        </div>
      </div>
    </div>
  </div>
  
)
  }   
}
export default Body
