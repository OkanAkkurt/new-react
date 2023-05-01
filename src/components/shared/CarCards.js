import React, { useContext } from "react";
import { CarContext } from "../../context/car-context/CarContext";

const CarCards = ({ entry }) => {
  const { handleDeleteCar } = useContext(CarContext);
  return (
    <div>
      <ul>
        <li>
          <p className="list">
            <input
              className="reset-click"
              type="reset"
              value="X"
              onClick={() => handleDeleteCar(entry.id)}
            />
            <br />
            {entry.brand} <br /> {entry.name} <br />
            {entry.year}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CarCards;
