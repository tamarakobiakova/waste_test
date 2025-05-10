import React from "react";
import "../../../styles/WarningBadgeGroup/WarningBadge/main.scss";

const WarningBadge = ({ type }) => {
  const warnings = {
    road: {
      text: "Not Allowed On The Road",
      className: "warning-road",
    },
    weight: {
      text: "Not Suitable for Heavy Waste",
      className: "warning-weight",
    },
  };

  const warning = warnings[type];
  if (!warning) return null;

  return (
    <div className={`warning-badge ${warning.className}`}>
      ⚠️ {warning.text}
    </div>
  );
};

export default WarningBadge;
