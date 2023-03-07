import "../component/header.scss";
import logo from "../component/logo.png";
import time from "../component/time.svg";
import pin from "../component/pin.svg";
import tel from "../component/tel.svg";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header_body">
        <div className="wrapper">
          <div>
            <img className="wrapper_logo" src={logo} alt="logo" />
            <span id="wrapper_block">Аренда спецтехники</span>
          </div>
          <div>
            <span>
              <img src={time} alt="time" />
            </span>

            <span>10:00-17:00</span>
          </div>
          <div>
            <span>
              <img src={pin} alt="pin" />
            </span>

            <span id="wrapper_block">г. Москва, ул. Куликовская, 12</span>
          </div>
          <div>
            <span>
              <img src={tel} alt="tel" />
            </span>

            <span id="wrapper_block_item">
              <span>+7 (499)929-96-66</span>
              <span>+7 (985)364-55-18</span>
              <span>+7 (985)226-20-30</span>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
