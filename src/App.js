import "./App.css";
import Header from "./components/shared/header/Header";
import Form from "./components/shared/Form/Form";

import CarList from "./components/shared/CarList";
import CarProvider from "./context/car-context/CarContext";

function App() {
  // const [dependency, setDependency] = useState(false);

  return (
    <CarProvider>
      <div className="app">
        <Header inpLogo={"#Logo"} listItem={["Home", "About", "Contact"]} />
        <Form />
        <CarList />
      </div>
    </CarProvider>
  );
}

export default App;
