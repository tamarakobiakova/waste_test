import React, { useState } from "react";
import { getIcon } from "../../utils/constants";
import { steps as steps } from "../../utils/constants";
import "../../styles/Header/main.scss";

const Header = () => {
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

export default Header;
