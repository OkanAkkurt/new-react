import { useState } from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Form from "./components/shared/Form";

import CarList from "./components/shared/CarList";

function App() {
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
    </div>
  );
}

export default App;
