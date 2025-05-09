import React, { useState } from "react";
import "../../styles/SkipSelector/main.scss";

const SkipSelector = ({ skips }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="skip-selector">
      <h1 className="title">Choose Your Skip Size</h1>
      <p className="subtitle">
        Select the skip size that best suits your needs
      </p>

      <div className="skip-grid">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className={`skip-card ${selectedId === skip.id ? "selected" : ""}`}
            onClick={() => setSelectedId(skip.id)}
          >
            <div className="image-wrapper">
              <img
                src={`/${skip.size}-yard.png`}
                alt={`${skip.size} Yard Skip`}
              />
              <div className="badge">{skip.size} Yards</div>
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
        <button className="button secondary">Back</button>
        <button className="button primary">Continue</button>
      </div>
    </div>
  );
};

export default SkipSelector;
