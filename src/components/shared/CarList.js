import React from "react";
import CarCards from "./CarCards";

const CarList = ({ entries, handleDeleteCar }) => {
  return (
    <div className="ul-list">
      {entries.length !== 0 &&
        entries.map((entry) => (
          <CarCards
            key={entry.id}
            entry={entry}
            handleDeleteCar={handleDeleteCar}
          />
        ))}
    </div>
  );
};

export default CarList;
