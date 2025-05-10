import React, { useState } from "react";
import WarningBadgeGroup from "../WarningBadgeGroup/WarningBadgeGroup";
import {
  getImageUrl as getImageUrl,
  steps as steps,
} from "../../utils/constants";
import "../../styles/SkipSelector/main.scss";

const SkipSelector = ({ skips }) => {
  console.log(skips);
  const [selectedId, setSelectedId] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [hireDays, setHireDays] = useState(null);

  return (
    <div className="skip-selector">
      <div className="skip-grid">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className={`skip-card ${selectedId === skip.id ? "selected" : ""}`}
            onClick={() => {
              setSelectedId(skip.id);
              setPrice(skip.price_before_vat);
              setSize(skip.size);
              setHireDays(skip.hire_period_days);
            }}
          >
            <div className="image-wrapper">
              <img
                src={getImageUrl(skip.size)}
                alt={`${skip.size} Yard Skip`}
              />
              <div className="badge">{skip.size} Yards </div>
              <WarningBadgeGroup skip={skip} />
            </div>

            <div className="details">
              <h2>{skip.size} Yard Skip</h2>
              <p>{skip.hire_period_days} day hire period</p>
              <div className="price">£{skip.price_before_vat}</div>
              {selectedId === skip.id ? (
                <button className="button selected-btn">Selected</button>
              ) : (
                <button className="button">Select This Skip →</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
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

        <div className="buttons">
          <button className="button secondary">Back</button>
          <button className="button primary">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
