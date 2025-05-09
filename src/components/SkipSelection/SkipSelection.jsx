import React, { useState, useEffect } from "react";
import axios from "axios";
import SkipCard from "../SkipCard/SkipCard";
import "../../styles/SkipSelection/main.scss";

const SkipSelection = () => {
  const [skipData, setSkipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      .then((response) => {
        setSkipData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skip data:", error);
        setLoading(false);
      });
  }, []);

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="skip-selection">
      <div className="skip-selection__list">
        {skipData.map((skip) => (
          <SkipCard
            key={skip.id}
            title={skip.size} // Ensure the size matches the mapping
            price={skip.price}
            description={skip.hire_period}
            warnings={skip.warning}
            onSelect={() => handleSelectSkip(skip)}
          />
        ))}
      </div>

      {selectedSkip && (
        <div className="selected-skip">
          <h3>Selected Skip: {selectedSkip.size}</h3>
          <p>Price: £{selectedSkip.price}</p>
        </div>
      )}
    </div>
  );
};

export default SkipSelection;
