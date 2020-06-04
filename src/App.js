import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Pages/mainHome";
import MainInfo from "./components/Pages/mainInfo";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/PokemonInfo/:id"
            render={(props) => <MainInfo {...props.match.params} />}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
