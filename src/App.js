// src/App.js
import React from "react";
import { Home } from "./Components/Home"; // Correct import for named export
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
