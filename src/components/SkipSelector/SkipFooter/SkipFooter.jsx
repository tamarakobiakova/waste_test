import React from "react";
import "../../../styles/SkipSelector/SkipFooter/main.scss";

const SkipFooterInfo = ({ size, price, hireDays }) => {
  return (
    <div className="selected-info-bottom">
      {size ? (
        <>
          <span className="price-selected">£{price}</span>
          <span className="label-size">
            {size}-Yard Skip | {hireDays} day hire
          </span>
        </>
      ) : (
        <span className="label-size">Select a skip to continue</span>
      )}
    </div>
  );
};

export default SkipFooterInfo;
