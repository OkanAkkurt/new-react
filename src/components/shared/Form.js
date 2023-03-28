import React from "react";

const Form = ({ car, setCar, handleCar, error }) => {
  return (
    <form className="form">
      <div className="inp-text first-inp">
        <input
          className="brand"
          type="text"
          placeholder="Enter Car Brand"
          onChange={(event) => setCar({ ...car, brand: event.target.value })}
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
          onChange={(event) => setCar({ ...car, name: event.target.value })}
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
          onChange={(event) => setCar({ ...car, year: event.target.value })}
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
