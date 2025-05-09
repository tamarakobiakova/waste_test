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
            <div className="step">
              <text className="emoji-style">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon-style"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </text>
              {step}
            </div>
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
      <div className="title-space">
        <div className="title">Choose Your Skip Size</div>
        <div className="subtitle">
          Select the skip size that best suits your needs
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
