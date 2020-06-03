import React from "react";
import Home from "./components/Pages/mainHome";
import MainInfo from "./components/Pages/mainInfo";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Home />
      <MainInfo />
    </div>
  );
}

export default App;
