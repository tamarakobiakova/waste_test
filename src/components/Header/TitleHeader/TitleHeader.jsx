import React from "react";
import "../../../styles/Header/TitleHeader/main.scss";

const TitleHeader = ({
  title = "Choose Your Skip Size",
  subtitle = "Select the skip size that best suits your needs",
  className = "",
}) => (
  <div className={`title-space ${className}`}>
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
  </div>
);

export default TitleHeader;
