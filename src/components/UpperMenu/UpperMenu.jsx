import React from "react";
import "../../styles/UpperMenu/main.scss";

const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment",
];

const UpperMenu = () => {
  return (
    <div className="upper-menu">
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step">{step}</div>
            {index !== steps.length - 1 && (
              <div className="arrow">
                {/* Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" // Adjust the width to fit
                  height="16" // Adjust the height to fit
                  fill="#005baa" // Set the arrow color to match the site blue
                  viewBox="0 0 16 16"
                >
                  <path d="M10.293 3.293a1 1 0 0 1 1.414 0L15 6.586a1 1 0 0 1 0 1.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L12.586 8H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414z" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="title">Choose Your Skip Size</div>
      <div className="subtitle">
        Select the skip size that best suits your needs
      </div>
    </div>
  );
};

export default UpperMenu;
