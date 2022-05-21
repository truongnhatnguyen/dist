import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import React from "react";
import { FaCaretDown} from "react-icons/fa";
import banner from "../../assets/image/bg-hero_2x.webp";
import "./style.css";
const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      <div className="overlay">
        <h2>sàn giao dịch bất động sản</h2>
        <div className="box">

          <div className="dropdown">
            <p>Tỉnh</p>
            <div className="dropdown-select">
              <span className="select">chọn tỉnh</span>
              <FaCaretDown/>
            </div>
            <div className="dropdown-list">
                <div className="dropdown-list__item">da nag</div>
                <div className="dropdown-list__item">ha noi</div>
                <div className="dropdown-list__item">hcm</div>
            </div>
          </div>
          <div className="dropdown">
            <p>Diện tích</p>
            <div className="dropdown-select">
              <span className="select">chọn diện tích</span>
              <FaCaretDown/>
            </div>
            <div className="dropdown-list">
                <div className="dropdown-list__item">39m</div>
                <div className="dropdown-list__item">trên 40m</div>
                <div className="dropdown-list__item">trên 60m</div>
            </div>
          </div>
          <div className="form-search">
              <input type="search" placeholder="search" />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'white',position:"absolute",left:'20px',fontSize:'20px',cursor:'pointer'}}/>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
