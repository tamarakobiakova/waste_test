import React, { useState } from "react";
import "../../styles/UpperMenu/main.scss";

const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment",
];

const iconTypes = ["map", "bin", "truck", "shield", "calendar", "credit"];

const getIconPath = (type) => {
  switch (type) {
    case "map":
      return "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z";
    case "bin":
      return "M3 6h18v2H3V6zm2 3h14v13H5V9zm3 3v7h2v-7H8zm4 0v7h2v-7h-2z";
    case "truck":
      return "M20 8h-3V4H3v13h2a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h2v-5l-3-4zM6 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm2-5h-3v-3h1.17L18 12z";
    case "shield":
      return "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z";
    case "calendar":
      return "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z";
    case "credit":
      return "M20 4H4a2 2 0 0 0-2 2v2h20V6a2 2 0 0 0-2-2zm0 4H2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8zm-2 6H6v-2h12v2z";
    default:
      return "";
  }
};

const getIcon = (index, currentStepIndex) => {
  const path = getIconPath(iconTypes[index]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke={
        index === currentStepIndex
          ? "#00d78e"
          : index < currentStepIndex
          ? "#ccc"
          : "#777"
      }
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d={path} />
    </svg>
  );
};

const UpperMenu = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(2);
  const isMobile = window.innerWidth <= 768;

  const goToNext = () => {
    if (currentStepIndex < 2) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="upper-menu">
      <div className="steps-wrapper">
        {isMobile ? (
          <>
            <button
              className="arrow-btn prev"
              onClick={goToPrevious}
              disabled={currentStepIndex === 0}
            >
              ←
            </button>
            <div className="step active">
              <span className="icon">
                {getIcon(currentStepIndex, currentStepIndex)}
              </span>
              <span className="step-text">{steps[currentStepIndex]}</span>
            </div>
            <button
              className="arrow-btn next"
              onClick={goToNext}
              disabled={currentStepIndex >= 2}
              style={
                currentStepIndex >= 2 ? { opacity: 0.3, cursor: "default" } : {}
              }
            >
              →
            </button>
          </>
        ) : (
          steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`step ${
                  index <= 2
                    ? index === currentStepIndex
                      ? "active"
                      : "past"
                    : "future"
                }`}
                onClick={() => {
                  if (index <= 2) setCurrentStepIndex(index);
                }}
                style={{
                  cursor: index <= 2 ? "pointer" : "default",
                }}
              >
                <span className="icon">{getIcon(index, currentStepIndex)}</span>
                <span className="step-text">{step}</span>
              </div>
              {index !== steps.length - 1 && (
                <div className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#005baa"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.293 3.293a1 1 0 0 1 1.414 0L15 6.586a1 1 0 0 1 0 1.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L12.586 8H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))
        )}
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
