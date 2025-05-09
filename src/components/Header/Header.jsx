import React from "react";
import "../../styles/Header/main.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <button className="header__button"> Postcode</button>
        <button className="header__button">Waste Type</button>
        <button className="header__button selected">Select Skip</button>
        <button className="header__button">Permit Check</button>
        <button className="header__button">Choose Date</button>
        <button className="header__button">Payment</button>
      </div>
    </header>
  );
};

export default Header;
