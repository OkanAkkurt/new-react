import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CarContext = createContext();

const CarProvider = () => {
  const [entries, setEntries] = useState([]);
  const [isEntriesLoading, setIsEntriesLoading] = useState(false);
  const handleDeleteCar = (id) => {
    setEntries((prevEntries) => prevEntries.filter((car) => car.id !== id));
  };
  const createCar = (car) =>
    setEntries((prevEntries) => [
      ...prevEntries,
      { id: crypto.randomUUID(), ...car },
    ]);
  useEffect(() => {
    const getCar = async () => {
      try {
        setIsEntriesLoading(true);
        const res = await axios("http://localhost:5050/cars/");
        setEntries(res.data);
        setIsEntriesLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCar();
  }, []);

  return (
    <CarContext.Provider
      value={{
        entries,
        isEntriesLoading,
        handleDeleteCar,
        createCar,
      }}
    ></CarContext.Provider>
  );
};

export default CarProvider;
