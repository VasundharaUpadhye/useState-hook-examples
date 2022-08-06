import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import PersonalDetails from "./Components/Personal-Details/PersonalDetails";
import Addition from "./Components/Addition/Addition";
import Example from "./Components/Example/Example";

function App() {
  return (
    <div className="wrapper">
      <div className="first-part">
        <div className="counter">
          <Counter />
        </div>
        <div className="personal-details">
          <PersonalDetails />
        </div>
      </div>
      <div className="second-part">
        <div className="addition">
          <Addition />
        </div>
        <div className="example">
          <Example />
        </div>
      </div>
    </div>
  );
}

export default App;
