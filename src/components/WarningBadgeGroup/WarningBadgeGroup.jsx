import React from "react";
import WarningBadge from "./WarningBadge/WarningBadge";
import "../../styles/WarningBadgeGroup/main.scss";

const WarningBadgeGroup = ({ skip }) => {
  if (!skip || typeof skip !== "object") return null;

  const showRoadWarning = skip.allowed_on_road === false;
  const showWeightWarning = skip.allows_heavy_waste === false;

  if (!showRoadWarning && !showWeightWarning) return null;

  return (
    <div className="warning-badge-group">
      {showRoadWarning && <WarningBadge type="road" />}
      {showWeightWarning && <WarningBadge type="weight" />}
    </div>
  );
};

export default WarningBadgeGroup;
