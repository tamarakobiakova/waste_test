import React from "react";
import "../../../styles/SkipSelector/SkipCardInfo/main.scss";

const SkipCardInfo = ({ skip, isSelected, onSelect }) => {
  return (
    <div className="skip-card-info">
      <h2>{skip.size} Yard Skip</h2>
      <p>{skip.hire_period_days} day hire period</p>
      <div className="price">£{skip.price_before_vat}</div>
      {isSelected ? (
        <button className="button selected-btn">Selected</button>
      ) : (
        <button className="button" onClick={() => onSelect(skip)}>
          Select This Skip →
        </button>
      )}
    </div>
  );
};

export default SkipCardInfo;
