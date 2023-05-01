import React, { useContext, useState } from "react";
import { CarContext } from "../../../context/car-context/CarContext";

const Form = () => {
  const { createCar } = useContext(CarContext);
  const [car, setCar] = useState({
    brand: "",
    name: "",
    year: "",
  });
  const [error, setError] = useState({
    brand: true,
    name: true,
    year: true,
  });
  const setCarHandle = (newCar) => {
    setCar((prevCar) => ({ ...prevCar, ...newCar }));
  };
  const handleCar = (event) => {
    event.preventDefault();
    setError({ ...car });
    if (!Object.values(car).some((value) => !value)) {
      createCar(car);
      setCar({ brand: "", name: "", year: "" });
    }
  };
  return (
    <form className="form">
      <div className="inp-text first-inp">
        <input
          className="brand"
          type="text"
          placeholder="Enter Car Brand"
          onChange={(event) => setCarHandle({ brand: event.target.value })}
          value={car.brand}
        />
        {!error.brand && (
          <span className="error">↑ Please fill this field! ↑</span>
        )}
      </div>
      <div className="inp-text">
        <input
          className="name"
          type="text"
          placeholder="Enter Car Name"
          onChange={(event) => setCarHandle({ name: event.target.value })}
          value={car.name}
        />
        {!error.name && (
          <span className="error">↑ Please fill this field! ↑</span>
        )}
      </div>
      <div className="inp-text">
        <input
          className="year"
          type="text"
          placeholder="Enter Year"
          onChange={(event) => setCarHandle({ year: event.target.value })}
          value={car.year}
        />
        {!error.year && (
          <span className="error"> ↑ Please fill this field! ↑ </span>
        )}
      </div>
      <div>
        <input
          type="submit"
          value="Create My Car"
          className="submit"
          onClick={handleCar}
        />
      </div>
    </form>
  );
};

export default Form;
