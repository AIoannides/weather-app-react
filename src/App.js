import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <Weather city="London" />
      </header>
    </div>
  );
}

export default App;
