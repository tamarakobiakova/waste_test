import React from "react";
import "../../styles/other/ArrowIcon.scss";

const ArrowIcon = ({ size = 16, color = "#005baa", className = "" }) => (
  <div className={`arrow ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 16 16"
    >
      <path d="M10.293 3.293a1 1 0 0 1 1.414 0L15 6.586a1 1 0 0 1 0 1.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L12.586 8H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414z" />
    </svg>
  </div>
);

export default ArrowIcon;
