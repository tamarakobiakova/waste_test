import React from "react";
import "../../../styles/SkipSelector/SkipFooterButtons/main.scss";

const SkipFooterButtons = ({ disabled }) => {
  return (
    <div className="buttons">
      <button className="button secondary">Back</button>
      <button className="button primary" disabled={disabled}>
        Continue
      </button>
    </div>
  );
};

export default SkipFooterButtons;
