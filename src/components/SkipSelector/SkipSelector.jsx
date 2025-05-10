import React, { useState } from "react";
import WarningBadgeGroup from "../WarningBadgeGroup/WarningBadgeGroup";
import { getImageUrl } from "../../utils/constants";
import SkipCardInfo from "./SkipCardInfo/SkipCardInfo";
import SkipFooter from "./SkipFooter/SkipFooter";
import SkipFooterButtons from "./SkipFooterButtons/SkipFooterButtons";
import "../../styles/SkipSelector/main.scss";

const SkipSelector = ({ skips }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [hireDays, setHireDays] = useState(null);

  const SkipCardImage = ({ skip }) => {
    return (
      <div className="image-wrapper">
        <img src={getImageUrl(skip.size)} alt={`${skip.size} Yard Skip`} />
        <div className="badge">{skip.size} Yards</div>
        <WarningBadgeGroup skip={skip} />
      </div>
    );
  };

  return (
    <div className="skip-selector">
      <div className="skip-grid">
        {skips.map((skip) => {
          const isSelected = selectedId === skip.id;

          const onSelect = () => {
            setSelectedId(skip.id);
            setPrice(skip.price_before_vat);
            setSize(skip.size);
            setHireDays(skip.hire_period_days);
          };

          return (
            <div
              key={skip.id}
              className={`skip-card ${isSelected ? "selected" : ""}`}
              onClick={onSelect}
            >
              <SkipCardImage skip={skip} />
              <SkipCardInfo
                skip={skip}
                isSelected={isSelected}
                onSelect={onSelect}
              />
            </div>
          );
        })}
      </div>

      <div className="footer">
        <SkipFooter size={size} price={price} hireDays={hireDays} />
        <SkipFooterButtons disabled={!size} />
      </div>
    </div>
  );
};

export default SkipSelector;
