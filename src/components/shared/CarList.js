import React, { useContext } from "react";
import CarCards from "./CarCards";
import { CarContext } from "../../context/car-context/CarContext";

const CarList = () => {
  const { entries, isEntriesLoading } = useContext(CarContext);

  return (
    <div className="ul-list">
      {isEntriesLoading ? (
        <p>Loading...</p>
      ) : (
        entries.length !== 0 &&
        entries.map((entry) => <CarCards key={entry.id} entry={entry} />)
      )}
    </div>
  );
};

export default CarList;
