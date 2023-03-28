import { useState } from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Form from "./components/shared/Form";

import CarList from "./components/shared/CarList";

function App() {
  // const [brand, setBrand] = useState("");
  // const [name, setName] = useState("");
  // const [year, setYear] = useState("");
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

  // const [err1, setError1] = useState(false);
  // const [err2, setError2] = useState(false);
  // const [err3, setError3] = useState(false);

  const [entries, setEntries] = useState([]);

  const handleCar = (event) => {
    event.preventDefault();
    setError({ ...car });

    if (!Object.values(car).some((value) => !value)) {
      setEntries([
        ...entries,

        {
          id: `${Date.now()}${Math.floor(Math.random() * 1000)}`,
          ...car,
        },
      ]);
      setCar({ brand: "", name: "", year: "" });
    }
  };

  const handleDeleteCar = (id) => {
    setEntries((prevEntries) => prevEntries.filter((car) => car.id !== id));
  };

  return (
    <div className="app">
      <Header inpLogo={"#Logo"} listItem={["Home", "About", "Contact"]} />
      <Form car={car} setCar={setCar} handleCar={handleCar} error={error} />
      <CarList entries={entries} handleDeleteCar={handleDeleteCar} />

      {/* <form className="form">
        <div className="inp-text first-inp">
          <input
            className="brand"
            type="text"
            placeholder="Enter Car Brand"
            onChange={(event) => setBrand(event.target.value)}
            value={brand}
          />
          {err1 && <span className="error">↑ Please fill this field! ↑</span>}
        </div>
        <div className="inp-text">
          <input
            className="name"
            type="text"
            placeholder="Enter Car Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          {err2 && <span className="error">↑ Please fill this field! ↑</span>}
        </div>
        <div className="inp-text">
          <input
            className="year"
            type="text"
            placeholder="Enter Year"
            onChange={(event) => setYear(event.target.value)}
            value={year}
          />
          {err3 && <span className="error"> ↑ Please fill this field! ↑ </span>}
        </div>
        <div>
          <input
            type="submit"
            value="Create My Car"
            className="submit"
            onClick={handleCar}
          />
        </div>
      </form> */}
      {/* 
      <div className="ul-list">
        {entries.length !== 0 &&
          entries.map((entries) => (
            <div key={entries.id}>
              <ul>
                <li>
                  <p className="list">
                    <input
                      className="reset-click"
                      type="reset"
                      value="X"
                      onClick={() => handleDeleteCar(entries.id)}
                    />
                    <br />
                    {entries.brand} <br /> {entries.name} <br />
                    {entries.year}
                  </p>
                </li>
              </ul>
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default App;
