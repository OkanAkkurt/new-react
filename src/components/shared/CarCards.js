import React from "react";

const CarCards = ({ entry, handleDeleteCar }) => {
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
