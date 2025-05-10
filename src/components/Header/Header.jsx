import React, { useState } from "react";
import { getIcon } from "../../utils/constants";
import { steps } from "../../utils/constants";
import ArrowIcon from "../other/Arrow";
import TitleHeader from "./TitleHeader/TitleHeader";
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
              {index !== steps.length - 1 && <ArrowIcon />}
            </React.Fragment>
          ))
        )}
      </div>
      <TitleHeader />
    </div>
  );
};

export default Header;
