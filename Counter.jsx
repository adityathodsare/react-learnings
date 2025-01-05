import "./App.css";
import { useState } from "react";

function App() {
  let [couter, setCounter] = useState(0);
  const addvalue = () => {
    if (couter < 10) {
      couter = couter + 1;
      setCounter(couter);
      console.log(couter);
    } else {
      couter = 10;
      setCounter(couter);
    }
  };

  const removeValue = () => {
    if (couter > 0) {
      couter = couter - 1;
      setCounter(couter);
      console.log(couter);
    } else {
      couter = 0;
      setCounter(couter);
    }
  };

  return (
    <>
      <h1>this is an counter app </h1>
      <h2>couter value : {couter}</h2>
      <button onClick={addvalue}>add value {couter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value {couter}</button>
    </>
  );
}

export default App;
